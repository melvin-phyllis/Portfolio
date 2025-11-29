import { DiFirebase } from "react-icons/di"
import { FaBootstrap, FaGitAlt, FaGithubSquare, FaHtml5, FaReact } from "react-icons/fa"
import { MdSupervisorAccount } from "react-icons/md"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb, SiN8N, SiNetlify, SiNextdotjs, SiSwr, SiVercel } from "react-icons/si"
import { TfiCss3 } from "react-icons/tfi"

const SkillsSection = () => {
    const itemSkills = [
        { icon: <SiNextdotjs size={40} />, text: "Next JS" },
        { icon: <FaReact size={40} />, text: "React Js" },
        { icon: <FaHtml5 size={40} />, text: "Html" },
        { icon: <FaGitAlt size={40} />, text: "Git" },
        { icon: <FaGithubSquare size={40} />, text: "Github" },
        { icon: <RiTailwindCssFill size={40} />, text: "TailwindCss" },
        { icon: <TfiCss3 size={40} />, text: "Css" },
        { icon: <FaBootstrap size={40} />, text: "Bootstrap" },
        { icon: <SiMongodb size={40} />, text: "Mongodb" },
        { icon: <DiFirebase size={40} />, text: "Firebase Realtime Database" },
        { icon: <MdSupervisorAccount size={40} />, text: "Firebase Auth" },
        { icon: <SiVercel size={40} />, text: "Vercel" },
        { icon: <SiNetlify size={40} />, text: "Netlify" },
        { icon: <SiSwr size={40} />, text: "Swr" },
        { icon: <SiN8N size={40} />, text: "N8N" },
        { img: "/Generated Image November 29, 2025 - 3_19AM.png", text: "zustand" },
    ]
    return (
        <>
            <div className="my-29">
                <h2 className="font-bold text-3xl text-center mt-20">Mes Competences</h2>
                <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-10 gap-5 font-mono">
                    {itemSkills.length > 0 && itemSkills.map((item, index) => (
                        <div key={index} className=" flex  items-center justify-center">
                            <div className="border flex gap-4 hover:bg-black hover:text-white cursor-pointer  hover:shadow-2xl flex-col justify-center text-center size-40 items-center rounded ">
                                {item.icon ? item?.icon : (
                                    <img src={item?.img} alt="" className="size-20" />
                                )}
                                <span>{item?.text}</span>
                            </div>
                        </div>))}
                </div>
            </div>

        </>
    )
}

export default SkillsSection
