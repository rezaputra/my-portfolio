import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import google from "next-auth/providers/google"
import instagram from "next-auth/providers/instagram"
import credentials from "next-auth/providers/credentials"
import { loginSchema } from "./schemas/auth"
import { getUserByEmail, getUserById } from "./data/user"
import bcrypt from "bcryptjs"
import { UserRole } from "@prisma/client"
import { db } from "./lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getAccountByUserId } from "./data/account"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "./routes"
import { NextResponse } from "next/server"

declare module "next-auth" {
    interface User {
        role?: UserRole
        isOAuth?: boolean
    }
}

const credentialsConfig = credentials({
    async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials)

        if (validateFields.success) {
            const { email, password } = validateFields.data

            const user = await getUserByEmail(email)
            if (!user || !user.password) return null

            const passwordMatch = await bcrypt.compare(password, user.password)
            if (passwordMatch) return user
        }

        return null
    },
})

const config = {
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    providers: [credentialsConfig, google, instagram],
    callbacks: {
        authorized({ request, auth }) {
            const { pathname } = request.nextUrl
            const isLoggedIn = !!auth

            const isApiAuthRoute = pathname.startsWith(apiAuthPrefix)
            const isAuthRoute = authRoutes.includes(pathname)
            const isPublicRoute = publicRoutes.includes(pathname)

            if (isApiAuthRoute) return true

            if (isAuthRoute) {
                if (isLoggedIn) return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.nextUrl))
                return true
            }

            if (!isPublicRoute) return isLoggedIn

            return true
        },
        async session({ session, token }: any) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            if (token.role && session.user) {
                session.user.role = token.role as UserRole
                session.user.name = token.name
                session.user.email = token.email
                session.user.isOAuth = token.isOAuth
            }

            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token

            const existingUser = await getUserById(token.sub)
            if (!existingUser) return token

            const existingAccount = await getAccountByUserId(existingUser.id)
            token.isOAuth = !!existingAccount
            token.name = existingUser.name
            token.email = existingUser.email
            token.role = existingUser.role

            return token
        },
    },
    events: {
        async linkAccount(data) {
            await db.user.update({
                where: { id: data.user.id },
                data: { emailVerified: new Date() },
            })
        },
    },
    session: { strategy: "jwt" },
    adapter: PrismaAdapter(db),
    trustHost: true,
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
