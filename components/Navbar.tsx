import Link from "next/link"
import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {

    const navitem =
        [
            { item: "Accueil", href: "/" },
            { item: "A propos", href: "/About" },
            { item: "Competences", href: "/Skills" },
            { item: "Experience", href: "/MyExpericence" },
            { item: "Projets", href: "/MyProjects" },
        ]

    return (
        <>
            <nav className="w-full ">
                <div className="flex px-4  md:px-20 bg-white border z-1 fixed top-0 w-full justify-between font-mono font-semibold p-2 items-start md:items-center">
                     <Link  href={"/"} className="flex  items-center gap-4">
                        
                        <img src="/Generated Image November 29, 2025 - 12_10PM.png" alt="Logo Melvin" className="w-13 rounded-full" />
                        <span className="text-xl">Melvin-dev</span>
                    </Link>
                    <div className="md:hidden flex justify-center items-center flex-col">
                        <label htmlFor="burger" className="mt-3">
                            <FiAlignJustify size={30} />
                        </label>
                        <input type={"checkbox"} id="burger" className="peer hidden" />
                        <div className="flex flex-col overflow-hidden max-h-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out -translate-y-2 peer-checked:max-h-96 peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:translate-y-0">
                            <ul className="flex flex-col gap-5 text-end">
                                {navitem && navitem.length > 0 ? navitem.map((item, index) => (
                                    <li key={index}><Link href={item?.href}>{item?.item}</Link> </li>
                                )) : ""}
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex hidden">
                        <ul className="flex gap-10">
                            {navitem && navitem.length > 0 ? navitem.map((item, index) => (
                                <li key={index}><a href={item?.href}>{item?.item}</a> </li>
                            )) : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
