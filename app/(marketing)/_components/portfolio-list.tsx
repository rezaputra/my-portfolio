import { IconTooltip } from "@/components/landingpage/icon-tooltip"
import Image from "next/image"
import { DiMongodb } from "react-icons/di"
import { FaDocker, FaPython } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { SiDjango, SiExpress, SiIbmcloud, SiJupyter, SiPrisma, SiStreamlit, SiTailwindcss } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const nextJs = { tooltip: "Next Js", icon: TbBrandNextjs }
const mongoDb = { tooltip: "MongoDB", icon: DiMongodb }
const tailwind = { tooltip: "Tailwind css", icon: SiTailwindcss }
const mysql = { tooltip: "Mysql", icon: GrMysql }
const ibmCloud = { tooltip: "IBM Cloud", icon: SiIbmcloud }
const django = { tooltip: "Django", icon: SiDjango }
const docker = { tooltip: "Docker", icon: FaDocker }
const expressJs = { tooltip: "Express Js", icon: SiExpress }
const streamlit = { tooltip: "Streamlit", icon: SiStreamlit }
const python = { tooltip: "Python", icon: FaPython }
const jupyterNotebook = { tooltip: "Jupyter Notebook", icon: SiJupyter }
const prisma = { tooltip: "Prisma", icon: SiPrisma }

export const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-sm bg-gradient-to-br from-secondary-foreground/80 to-secondary-foreground dark:from-neutral-900 dark:to-neutral-800  items-center justify-center"></div>
)

export const ImageDisplay = ({ image }: { image: string }) => (
    <div className=" flex justify-center bg-slate-700">
        <Image
            src={image}
            alt="Portfolio thumbnail"
            height={200}
            width={200}
            priority
            className=" h-auto md:max-w-50 lg:min-w-64   "
        />
    </div>
)

export const portfolioList = [
    {
        title: "AuthZzz",
        description: "Develop an efficient authentication and authorization platform for advanced user management .",
        header: <ImageDisplay image="/images/project-authzzz.jpg" />,
        icon: (
            <div className=" space-x-2">
                <IconTooltip icons={[nextJs, tailwind, prisma, mongoDb]} className=" size-3" />
            </div>
        ),
    },
    {
        title: "Predicting Churn with Waze Data",
        description:
            "Develop a robust machine learning model leveraging Waze dataset to accurately forecast user churn.",
        header: <ImageDisplay image="/images/project-waze.jpg" />,
        icon: (
            <div className=" space-x-2">
                <IconTooltip icons={[python, jupyterNotebook]} className=" size-3" />
            </div>
        ),
    },
    {
        title: "Customer Segmentation Website",
        description:
            "Create a dynamic platform capable of segmenting customer data using a range of clustering algorithms.",
        header: <ImageDisplay image="/images/project-customer-segmentation.jpg" />,
        icon: (
            <div className=" space-x-2">
                <IconTooltip icons={[python, django, ibmCloud]} className=" size-3" />
            </div>
        ),
    },
    {
        title: "Elegant Landing Page",
        description: "Craft a visually stunning and seamlessly responsive landing page for showing portfolio",
        header: <ImageDisplay image="/images/project-portfolio.jpg" />,
        icon: (
            <div className=" space-x-2">
                <IconTooltip icons={[nextJs, tailwind, prisma, mysql]} className=" size-3" />
            </div>
        ),
    },
    {
        title: "TaskTackle",
        description:
            "Empower yourself with a comprehensive task management website, designed to streamline your workflow and boost productivity.",
        header: <ImageDisplay image="/images/project-tasktickle.jpg" />,
        icon: (
            <div className=" space-x-2">
                <IconTooltip icons={[nextJs, tailwind, prisma, mysql, docker]} className=" size-3" />
            </div>
        ),
    },
]
