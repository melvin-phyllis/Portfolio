
const MyExpericenceSection = () => {

    const itemExperience =
        [
            {
                logo: "/Logotype-1.svg", title: "Software Development Bootcamp with AI skills", time: "August 2025 – December 2025",
                description: ` Durant ma formation intensive à GoMyCode, j’ai acquis des compétences solides en développement web full-stack
                            et en intégration de l’intelligence artificielle dans les workflows modernes. J’ai conçu des applications web complètes,
                            de l’interface utilisateur au backend, tout en appliquant les bonnes pratiques de développement et les méthodologies agiles (Scrum).
                            J’ai également réalisé un projet final complet incluant design, développement, API, déploiement cloud et optimisation IA.
                        `
            }, {
                logo: "/logocampus(1)(1)(1).png", title: "Développeur en Formation – Développement d’Applications & E-Services", time: "janv 2023 – Present",
                description: `Durant mon parcours académique à l’UVCI en Licence de Développement d’Applications et e-Services, j’ai acquis des compétences solides en algorithmique, programmation, conception d’applications et outils numériques modernes. J’ai travaillé sur divers modules couvrant le développement web, mobile, les API REST, les frameworks, le cloud computing ainsi que les bases fondamentales des systèmes informatiques.
                            Cette formation polyvalente m’a permis de comprendre et de maîtriser aussi bien les aspects techniques (architecture des ordinateurs, systèmes d’exploitation, électronique numérique, programmation C, JavaScript, Android, Firebase) que les compétences transversales essentielles telles que la gestion de projet, l’anglais technique, l’entrepreneuriat et le marketing digital.
                            Grâce à une progression structurée du niveau L1 à L3, j’ai pu développer une vision complète du développement logiciel, allant des bases théoriques et mathématiques jusqu’à la construction d’applications et services numériques modernes.
                        `
            }
        ]

    return (
        <>
            <div className="bg-gray-950 text-white py-20">
                <h1 className="text-center text-4xl p-10 font-bold ">Mon Experience</h1>
                <div className=" mx-4 md:mx-20 space-y-5">
                    {itemExperience.length > 0 && itemExperience.map((item, index) => (
                        <div key={index || item?.logo} className="border-3 p-5 rounded border-gray-600">
                            <div className="flex md:flex-row flex-col justify-between mb-5 sapce-y-10 ">
                                <div className="space-x-5 flex items-center ">
                                    <img src={item?.logo} alt="" className="bg-amber-50 p-2 rounded w-35" />
                                    <span >{item?.title} </span>
                                </div>
                                <div>
                                    <span className="mt-10">{item?.time}</span>
                                </div>
                            </div>
                            <span>
                                {item?.description} </span>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default MyExpericenceSection
