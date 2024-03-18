"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export function ScrollAnimation() {
    const { scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress)

    const background = useTransform(scrollYProgress, [0, 1], ["rgb(86,1,245)", "rgb(1,245,13)"])

    return (
        <div className="  flex flex-col container space-y-4 h-max w-screen items-center justify-center">
            <motion.div
                style={{
                    scaleX: scaleX,
                    transformOrigin: "left",
                    // background: "blue",
                    background,
                    position: "sticky",
                    top: 50,
                    width: "100%",
                    height: "20px",
                }}
            />

            <div>
                Li quaerat quia eveniet dolorem aliquid itaque est at provident in a adipisci, voluptates reiciendis?
                Natus sint cupiditate, libero, est placeat sit eveniet tempore nam omnis ut qui quod iure rerum expedita
                neque distinctio optio aperiam numquam ipsa vitae quisquam. Delectus natus labore mollitia illo incidunt
                laborum unde! Soluta veniam exercitationem similique assumenda laudantium eligendi voluptas sint facere
                eos quisquam voluptatem aliquam rem, pariatur cupiditate labore esse vero culpa. Corporis molestias
                voluptas inventore voluptatum dolorem quae ipsa id exercitationem cum possimus cupiditate vero,
                perspiciatis sed expedita officiis rerum eaque nisi eum magni nesciunt eligendi nulla. Rerum doloremque
                aliquam minus tempore provident, ex cumque in placeat officiis quasi distinctio blanditiis odit libero
                natus corporis id. Debitis aut quos atque, soluta saepe iure earum rerum accusantium optio beatae quia
                at, eaque ipsum ad facere necessitatibus numquam similique quas officiis perferendis nobis quis alias
                nostrum. Non corporis neque aperiam veniam consectetur deserunt esse quam at quas incidunt? Assumenda
                eligendi facere doloremque, explicabo consectetur porro cupiditate? Tempora dolor iusto laborum nobis
                repudiandae molestias possimus illo eius nemo accusamus id doloribus libero adipisci aliquid beatae
                iure, officiis nesciunt cupiditate expedita distinctio esse qui dolorum commodi! Veritatis, voluptate
                sed facilis nesciunt itaque dolorum rerum quaerat maxime! Tenetur consequatur a nostrum quia enim atque,
                ratione vitae ipsam illo ab, numquam qui vel. Perspiciatis facilis accusantium repellendus. Nulla, est.
                Rerum quidem quis magni? Consequatur tempore distinctio, architecto et nesciunt voluptas quisquam a
                commodi ad ipsam dolor maxime. Ipsa distinctio iste velit id illum necessitatibus veniam labore earum
                recusandae atque quibusdam, totam vitae ducimus adipisci eum consequatur voluptate, eaque non nihil,
                esse exercitationem laudantium vel doloremque. Placeat exercitationem fugiat dolorum tempora tempore
                ipsa maiores est neque cumque illum impedit autem aperiam dolore assumenda ad, molestias rerum ipsum
                iusto. Ducimus sint ea laudantium, veniam pariatur alias quaerat saepe amet nesciunt ab? Ad labore
                veritatis nisi nihil est facilis distinctio vero deserunt molestias necessitatibus officiis ab
                reprehenderit doloribus tempore facere fuga, numquam a repellendus sequi fugiat. Eligendi minus nisi
                quam modi, sint expedita quaerat cumque atque, deleniti fuga repellat quasi adipisci consequatur nostrum
                aperiam provident assumenda? Quis eveniet, doloremque id iure est officiis. Reprehenderit, velit
                architecto. Ducimus laudantium eius vel! Qui aliquam fugiat rem perspiciatis quis tempore error,
                reprehenderit quo, consectetur laboriosam eligendi corporis modi, corrupti eius? Beatae nihil nulla
                illum architecto quas cumque quos velit itaque magnam nam officiis atque obcaecati quae, amet fugit
                quidem ex culpa placeat soluta neque eaque aliquam officia consectetur autem? Vero, facere? Eaque
                dolores maxime, fugiat id eius laborum iure! Consequuntur perspiciatis autem laborum voluptates
                cupiditate nam est perferendis reiciendis aliquid! Accusamus laboriosam, sed sit repellat vel quia neque
                blanditiis atque assumenda nam sapiente, consectetur similique quo explicabo possimus hic. Laboriosam,
                numquam! Nobis accusantium veniam, magnam laboriosam omnis debitis. Nobis porro quaerat, optio illum
                distinctio aut nihil fugiat cumque at obcaecati autem velit possimus numquam, veritatis odio.
                Accusantium laboriosam commodi est eos, nisi illo animi possimus aperiam praesentium deserunt fugit,
                saepe repellendus dolorum eius. Earum iure minima cupiditate quibusdam accusamus voluptatum nihil
                necessitatibus tempora possimus, dignissimos esse soluta voluptate natus recusandae suscipit eius
                accusantium corrupti quos. Distinctio velit reiciendis assumenda aspernatur aut molestias ut sit quia
                autem saepe, deserunt sequi iusto numquam et? Nisi quaerat a cum pariatur unde omnis autem, dignissimos
                odit facilis, sunt placeat est beatae. Pariatur quasi dicta dignissimos labore officia necessitatibus
                nulla temporibus earum doloribus deleniti voluptatibus veritatis rerum ex eum culpa perferendis nesciunt
                vero magnam, dolor totam omnis. Qui quod itaque expedita cupiditate quis commodi molestiae illum nostrum
                harum natus dolorum fugit, eius, maiores ad! Fugit nesciunt ipsam quas voluptate vero quis nulla,
                aliquam inventore, quo hic amet beatae quisquam? Voluptatum provident illo reiciendis tempore sed
                maiores corporis eaque neque doloremque quisquam, accusantium necessitatibus inventore atque unde,
                ratione iste asperiores minus earum? Eaque laudantium at culpa assumenda aut illum asperiores sed.
                Possimus deserunt sunt nulla autem similique eos quis ducimus natus totam, hic odio. Praesentium, quia
                labore deleniti a recusandae laboriosam? Esse, blanditiis minima, velit voluptates nobis, a veritatis
                voluptas quia temporibus aliquam quos sequi consectetur nesciunt error impedit corporis rem illo placeat
                numquam unde? Accusantium enim optio deserunt est quidem quos voluptas laborum, cum eos. Molestiae eius
                dolores dicta ratione tempore, eos ducimus reiciendis sequi facilis atque modi alias consectetur quaerat
                porro cumque distinctio saepe. Inventore perferendis, deleniti exercitationem nesciunt et neque natus.
                Officia sunt reprehenderit tenetur. Perspiciatis veritatis omnis obcaecati? Non corrupti eaque in
                provident necessitatibus, sequi et maxime saepe ab odio sit ad laudantium harum molestiae! Quae commodi
                natus eveniet quibusdam soluta suscipit excepturi error culpa fuga aliquam, doloremque aperiam nam!
                Autem deserunt nam dolorum libero soluta animi eum, explicabo beatae, eligendi dolorem quis eaque
                molestiae corporis sed, nulla alias ipsam consectetur. Esse optio incidunt a laudantium cumque, animi
                iste explicabo rem at distinctio aperiam nulla molestias harum, qui aut et voluptatibus expedita! Quis
                ea, quas numquam aperiam earum non ut officia consectetur sequi quam inventore enim quisquam quidem
                illo. Fugiat illo eius maxime praesentium rerum consectetur, ipsum, obcaecati dolore sit architecto sunt
                recusandae voluptatibus quis alias doloremque mollitia animi dolores, laudantium ex fugit illum.
                Voluptas obcaecati illo esse praesentium eius perspiciatis delectus magnam aspernatur soluta sint
                possimus asperiores atque ea voluptatibus suscipit molestias veritatis corrupti et totam consequatur,
                expedita nemo autem porro aperiam. Amet doloremque sed labore libero magni repudiandae quidem,
                repellendus, temporibus vitae, beatae repellat dolores qui quos iure. Eveniet consectetur laborum sint
                tempora quia mollitia dolor id reiciendis in dignissimos vitae iusto voluptas nulla fugit unde tenetur
                repellendus libero porro officia nihil, asperiores corrupti laboriosam ex. Voluptas sunt enim quisquam
                dignissimos deserunt atque quo ipsa veritatis aliquam accusamus excepturi vitae sequi, illum a fugiat.
                Quod quasi pariatur possimus veritatis omnis nam eaque commodi rem reiciendis! Alias iusto quibusdam cum
                eum autem ullam quasi tempore nemo sequi et ducimus quod inventore, sapiente reiciendis repellat enim
                laborum accusamus corporis culpa consequatur eos! Sunt ex quo sapiente optio excepturi exercitationem,
                laudantium quibusdam unde fuga numquam provident facilis dicta quas harum. Commodi soluta quo neque aut,
                sequi placeat consectetur autem doloremque, animi odio debitis recusandae saepe quis perspiciatis
                deleniti eos natus? Nulla, eaque? Nulla iusto ea commodi dicta fugit, ipsa tempore saepe laboriosam,
                minima blanditiis neque suscipit eius? Corrupti, tempora quia asperiores dolore similique cupiditate
                reprehenderit provident distinctio autem mollitia magni? Fuga, hic quo optio id culpa enim ipsum
                corrupti aspernatur molestiae at excepturi vitae obcaecati iusto, odit laborum neque ratione dolorem!
            </div>
        </div>
    )
}
