
const AboutSection = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row md:m-20 md:h-150 gap-20  font-mono px-4 md:px-20">
                <div className="h-full  flex border justify-center">
                    <img src="/24070816_bwink_edu_02_single_02-min.jpg" alt="Illustration etudiant concentrant" className="object-cover h-full w-full md:w-auto " />
                </div>
                <div className="md:text-xl md:w-1/2 flex flex-col justify-between">
                    <h2 className="text-center text-4xl p-10 font-bold ">A propos de Moi</h2>
                    <div className="w-full flex flex-col gap-4 ">
                        <span className="w-full">
                            Passionne par le developpement d'applications et les technologies numeriques, je suis
                            actuellement en Licence de Developpement d'Applications et E-Services a l'UTUVCI. Mon parcours
                            m'a permis d'acquerir de solides bases en algorithmique, systemes informatiques, programmation
                            et conception d'applications web et mobiles.
                        </span>

                        <span>
                            Grace a mes cours, projets et a une formation intensive suivie a GoMyCode, j'ai developpe des
                            competences en JavaScript, Android, creation d'API REST, frameworks modernes, ainsi que
                            technologies cloud telles que Firebase. J'accorde une grande importance a la qualite du code,
                            a la logique derriere chaque fonctionnalite et a la creation de solutions adaptees aux besoins
                            reels.
                        </span>

                        <span>
                            Curieux, motive et oriente apprentissage continu, je m'investis dans le developpement logiciel
                            avec la volonte de creer des services innovants et performants. Je progresse chaque jour dans
                            l'univers du web, du mobile et des e-services, avec l'ambition de devenir un developpeur
                            complet capable de concevoir, optimiser et deployer des applications modernes.
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
