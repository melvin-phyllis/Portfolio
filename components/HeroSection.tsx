import { FaGithub, FaLinkedin } from "react-icons/fa"

const HeroSection = () => {
    const linkprofil = [
        { icon: <FaLinkedin className="text-black  group-hover:text-white" />, href: "https://www.linkedin.com/in/melvin-akou/" },
        { icon: <FaGithub className="text-black  group-hover:text-white" />, href: "https://github.com/melvin-phyllis" }
    ]
    return (
        <>
            <div className="flex font-mono md:h-150 gap-5 flex-col-reverse md:flex-row relative">
                <div className=" flex gap-10 md:absolute md:bottom-[-20]">

                    {linkprofil.length > 0 && linkprofil.map((item, index) => (
                        <div key={index} className="border flex items-center group hover:bg-black rounded cursor-pointer  justify-center size-10">
                            <a href={item?.href} >{item?.icon}</a>
                        </div>
                    ))}


                </div>
                <div className=" flex flex-col justify-center mt- md:w-1/2">
                    <h1 className="md:text-3xl mb-6 ">
                        Bonjour, je suis <b className="font-bold">Akou Melvin.</b>
                        <br />
                        Développeur <b className="font-">Full-Stack JS</b><br />
                        Basé en <b>Cote d'Ivoire</b>
                    </h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro quis modi atque tenetur at veritatis commodi quos vel eligendi!
                    </span>

                </div>

                <div className=" md:w-5/7 flex  justify-center">
                    <div className="w-full  relative  flex">
                        <img src="/depositphotos_660531646-stock-illustration-studying-business-statistics-monochrome-concept.jpg" alt="" className="object-cover w-full md:w-auto " />
                    </div>
                    <div className="w-120 absolute hidden md:flex bottom-0 bg-black h-1 rounded "><span className="hidden">a</span></div>

                </div>

            </div>
        </>
    )
}

export default HeroSection
