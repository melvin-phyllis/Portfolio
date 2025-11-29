import { FiAlignJustify } from "react-icons/fi"

const Navbar = () => {

    const navitem =
        [
            { item: "À propos de moi" },
            { item: "Compétences" },
            { item: "Projets" },
            { item: "Contact" },
        ]

    return (
        <>
            <nav className="w-full ">
                <div className="flex px-4 md:px-20 bg-white border z-1 fixed top-0 w-full justify-between font-mono font-semibold p-5">
                    <div>
                        <span className="text-xl">Melvin-dev</span>
                    </div>
                     <div className="md:hidden flex justify-center items-center flex-col">
                        <label htmlFor="burger">
                            <FiAlignJustify size={30} />
                        </label>
                        <input type={"checkbox"} id="burger" className="peer hidden" />
                        <div className="flex flex-col overflow-hidden max-h-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out -translate-y-2 peer-checked:max-h-96 peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:translate-y-0">
                            <ul className="flex flex-col gap-5 text-end">
                                {navitem && navitem.length > 0 ? navitem.map((item, index) => (
                                    <li key={index}>{item?.item} </li>
                                )) : ""}
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex hidden">
                        <ul className="flex gap-10">
                            {navitem && navitem.length > 0 ? navitem.map((item, index) => (
                                <li key={index}>{item?.item} </li>
                            )) : ""}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
