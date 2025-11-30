
const MyExpericenceSection = () => {

    const itemExperience =
        [
            {
                logo: "/Logotype-1.svg", title: "Software Development Bootcamp with AI skills", time: "August 2025 - December 2025",
                description: ` Durant ma formation intensive chez GoMyCode, j'ai acquis des competences solides en developpement web full-stack
                            et en integration de l'intelligence artificielle dans les workflows modernes. J'ai concu des applications web completes,
                            de l'interface utilisateur au backend, tout en appliquant les bonnes pratiques de developpement et les methodologies agiles (Scrum).
                            J'ai egalement realise un projet final complet incluant design, developpement, API, deploiement cloud et optimisation IA.
                        `
            }, {
                logo: "/logocampus(1)(1)(1).png", title: "Developpeur en Formation - Developpement d'Applications & E-Services", time: "janv 2023 - Present",
                description: `Durant mon parcours academique a l'UTUVCI en Licence de Developpement d'Applications et e-Services, j'ai acquis des competences solides en algorithmique, programmation, conception d'applications et outils numeriques modernes. J'ai travaille sur divers modules couvrant le developpement web, mobile, les API REST, les frameworks, le cloud computing ainsi que les bases fondamentales des systemes informatiques.
                            Cette formation polyvalente m'a permis de comprendre et de maitriser aussi bien les aspects techniques (architecture des ordinateurs, systemes d'exploitation, electronique numerique, programmation C, JavaScript, Android, Firebase) que les competences transversales essentielles telles que la gestion de projet, l'anglais technique, l'entrepreneuriat et le marketing digital.
                            Grace a une progression structuree du niveau L1 a L3, j'ai pu developper une vision complete du developpement logiciel, allant des bases theoriques et mathematiques jusqu'a la construction d'applications et services numeriques modernes.
                        `
            }
        ]

    return (
        <>
            <div className="bg-gray-950 text-white py-20">
                <h2 className="text-center text-4xl p-10 font-bold ">Mon Experience</h2>
                <div className=" mx-4 md:mx-20 space-y-5">
                    {itemExperience.length > 0 && itemExperience.map((item, index) => (
                        <div key={index || item?.logo} className="border-3 p-5 rounded border-gray-600">
                            <div className="flex md:flex-row flex-col justify-between mb-5 sapce-y-10 ">
                                <div className="space-x-5 flex items-center ">
                                    <img src={item?.logo} alt={`Logo ${item?.title}`} className="bg-amber-50 p-2 rounded w-35" />
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
