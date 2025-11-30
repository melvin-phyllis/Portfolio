import { FaRegShareSquare } from "react-icons/fa";
import { IoGitBranchOutline } from "react-icons/io5";

const MyProjectsSection = () => {
    const itemProjet = [
        {
            img: "/projects/Macbook-Air-u-stream.netlify.app.png",
            title: "Ustream Movies",
            description: `
            Ustream Movies est une mini-plateforme de streaming permettant de consulter,
            publier et administrer ses films favoris. Le projet utilise React 19, Firebase
            (Auth + Realtime Database), Zustand pour la gestion d'état et SWR pour la
            synchronisation en temps réel.

            L'utilisateur peut se connecter (email ou Google), ajouter des films, les modifier,
            les supprimer, gérer leur statut public/privé et consulter leurs détails via un
            modal animé. L'interface repose sur Tailwind CSS 4, DaisyUI et Swiper, offrant
            une expérience moderne, fluide et responsive.

            C'est un projet full-stack front qui illustre la maîtrise des hooks React, des
            stores légers, de l'authentification Firebase et des interactions CRUD complètes.
        `,
            technologies: ["React 19", "Firebase", "Zustand", "SWR", "Tailwind CSS 4", "DaisyUI", "Swiper"],
            features: [
                "Authentification Firebase (Email + Google OAuth)",
                "CRUD complet sur les films",
                "Synchronisation en temps réel avec SWR",
                "Gestion du statut public/privé",
                "Modal détaillé avec animations",
                "Interface moderne et responsive"
            ],
            liveUrl: "https://u-stream.netlify.app",
            githubUrl: "https://github.com/melvin-phyllis/Ustream"
        }, {
            img: "/projects/Macbook-Air-u-stream.netlify.app.png",
            title: "Ustream Movies",
            description: `
            Ustream Movies est une mini-plateforme de streaming permettant de consulter,
            publier et administrer ses films favoris. Le projet utilise React 19, Firebase
            (Auth + Realtime Database), Zustand pour la gestion d'état et SWR pour la
            synchronisation en temps réel.

            L'utilisateur peut se connecter (email ou Google), ajouter des films, les modifier,
            les supprimer, gérer leur statut public/privé et consulter leurs détails via un
            modal animé. L'interface repose sur Tailwind CSS 4, DaisyUI et Swiper, offrant
            une expérience moderne, fluide et responsive.

            C'est un projet full-stack front qui illustre la maîtrise des hooks React, des
            stores légers, de l'authentification Firebase et des interactions CRUD complètes.
        `,
            technologies: ["React 19", "Firebase", "Zustand", "SWR", "Tailwind CSS 4", "DaisyUI", "Swiper"],
            features: [
                "Authentification Firebase (Email + Google OAuth)",
                "CRUD complet sur les films",
                "Synchronisation en temps réel avec SWR",
                "Gestion du statut public/privé",
                "Modal détaillé avec animations",
                "Interface moderne et responsive"
            ],
            liveUrl: "https://u-stream.netlify.app",
            githubUrl: "https://github.com/melvin-phyllis/Ustream"
        },
        {
            img: "/projects/Macbook-Air-calculatrice-melvin-phyllis.netlify.app.png",
            title: "Calculatrice Moderne",
            description: `
            Application de calculatrice moderne développée en JavaScript vanilla avec une interface
            élégante et intuitive. Le projet met l'accent sur la logique de calcul précise, la gestion
            des opérations complexes et une expérience utilisateur fluide.

            La calculatrice supporte les opérations de base (addition, soustraction, multiplication,
            division), les opérations avancées (pourcentage, racine carrée, puissance), et inclut un
            historique des calculs. L'interface responsive s'adapte parfaitement aux mobiles et tablettes.

            Ce projet démontre une maîtrise solide du JavaScript ES6+, de la manipulation du DOM,
            de la gestion d'événements et du design CSS moderne avec animations et transitions fluides.
        `,
            technologies: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage"],
            features: [
                "Opérations mathématiques de base et avancées",
                "Historique des calculs persistant",
                "Interface responsive et moderne",
                "Animations et transitions fluides",
                "Gestion des erreurs et cas limites",
                "Design minimaliste et intuitif"
            ],
            liveUrl: "https://calculatrice-melvin-phyllis.netlify.app",
            githubUrl: "https://github.com/melvin-phyllis/calculatrice"
        },
        {
            img: "/projects/Macbook-Air-melvin-phyllis.github.io.png",
            title: "CineVault",
            description: `
            CineVault est une application web moderne de découverte de films
            développée en HTML5, CSS3 et JavaScript (ES6+). L'interface propose
            un design sombre élégant inspiré de Netflix, avec animations fluides,
            effets 3D au survol, statistiques dynamiques et un système de mode
            clair/sombre.

            L'application consomme l'API TMDB pour afficher en temps réel les films
            populaires, mieux notés, à venir ou actuellement au cinéma. CineVault
            inclut une recherche intelligente, un modal détaillé avec synopsis,
            note, durée et genres, ainsi qu'un fallback complet en cas d'échec API.

            Entièrement responsive, rapide et optimisée, CineVault démontre une
            parfaite maîtrise du JavaScript vanilla, de l'intégration API, de l'UX
            moderne et du responsive design.
        `,
            technologies: ["HTML5", "CSS3", "JavaScript ES6+", "API TMDB", "LocalStorage"],
            features: [
                "Intégration API TMDB en temps réel",
                "Recherche intelligente de films",
                "Modal détaillé avec informations complètes",
                "Mode clair/sombre",
                "Animations fluides et effets 3D",
                "Design inspiré de Netflix",
                "100% responsive"
            ],
            liveUrl: "https://melvin-phyllis.github.io",
            githubUrl: "https://github.com/melvin-phyllis/CineVault"
        },
        {
            img: "/projects/Macbook-Air-realtime-taskflow.vercel.app.png",
            title: "Realtime Taskflow",
            description: `
            Realtime Taskflow est une application moderne de gestion de tâches en temps réel,
            développée avec Next.js 16, React 19 et TypeScript. Elle permet aux utilisateurs
            de s'inscrire, se connecter et gérer leurs tâches quotidiennes grâce à une
            synchronisation instantanée avec Firebase Realtime Database.

            L'interface, conçue avec Tailwind CSS 4 et DaisyUI, propose une expérience fluide
            et moderne : modale d'édition, tableau en temps réel, transitions soignées et
            notifications contextualisées via React Toastify. L'état global est géré avec Zustand,
            assurant une mise à jour locale immédiate et une excellente réactivité.

            Ce projet met en avant la maîtrise du workflow Next.js App Router, des routes API
            personnalisées, de l'authentification sécurisée avec Firebase et d'un design UI/UX
            professionnel pensé pour la productivité.
        `,
            technologies: ["Next.js 16", "React 19", "TypeScript", "Firebase", "Tailwind CSS 4", "DaisyUI", "Zustand", "React Toastify"],
            features: [
                "Synchronisation en temps réel",
                "Authentification Firebase sécurisée",
                "Gestion d'état avec Zustand",
                "Modal d'édition dynamique",
                "Notifications contextuelles",
                "Interface moderne et intuitive",
                "Routes API Next.js personnalisées"
            ],
            liveUrl: "https://realtime-taskflow.vercel.app",
            githubUrl: "https://github.com/melvin-phyllis/Realtime-Taskflow"
        },
        {
            img: "/projects/Macbook-Air-boutique-en-ligne-chi.vercel.app.png",
            title: "Boutique en ligne - Clone Autorapid",
            description: `
            Application e-commerce complète développée avec Next.js 16 et Firebase, offrant une
            expérience d'achat moderne et sécurisée. Le projet inclut un système d'authentification
            Firebase (email/password et Google OAuth), une gestion en temps réel des produits via
            Firebase Realtime Database, et un backoffice administrateur complet avec upload d'images
            via ImageKit (compression WebP automatique).

            Fonctionnalités principales : landing page dynamique avec carrousels, boutique avec système
            de filtres, gestion des comptes utilisateurs (wishlist, historique de commandes), et un
            panel admin sécurisé pour l'ajout et la gestion des produits. Le design responsive utilise
            Tailwind CSS 4 et DaisyUI, avec des animations personnalisées et une architecture optimisée
            utilisant Zustand pour la gestion d'état.

            Ce projet démontre une expertise complète en développement d'applications e-commerce
            modernes avec Next.js, incluant l'authentification, la gestion de base de données en temps
            réel, l'upload d'images optimisé et un backoffice administrateur professionnel.
        `,
            technologies: ["Next.js 16", "TypeScript", "Firebase", "Tailwind CSS 4", "DaisyUI", "ImageKit", "Zustand", "Axios"],
            features: [
                "Authentification Firebase (Email/Password + Google OAuth)",
                "Backoffice administrateur sécurisé",
                "Upload et compression d'images automatique (WebP)",
                "Gestion en temps réel des produits",
                "Système de wishlist et compte utilisateur",
                "Landing page dynamique avec carrousels",
                "Système de filtres avancé",
                "Design responsive et animations personnalisées"
            ],
            liveUrl: "https://boutique-en-ligne-chi.vercel.app/",
            githubUrl: "https://github.com/melvin-phyllis/BoutiqueEnLigne"
        }
    ];
    return (
        <>
            <div className="bg-gray-950 font-mono text-white py-20 px-4 md:px-20">

                <h2 className="text-center text-4xl p-10 font-bold ">Mes Projets</h2>


                <div className="grid grid-cols-1 md:grid-col-2 gap-20">
                    {itemProjet.length > 0 && itemProjet.map((item, index) => (
                        <div key={index} className={`flex items-center ${(index + 1) % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-col md:gap-20 `}>
                            <div key={index} className="md:w-1/2 h-120">
                                <img src={item?.img} alt={`Capture du projet ${item?.title}`} className="w-full h-full object-cover rounded border-4" />
                            </div>
                            <div className=" md:w-1/2 flex flex-col space-y-5">
                                <span className="font-bold  text-3xl">0{index + 1}</span>
                                <span className="font-bold  text-3xl">{item?.title}</span>
                                <span className="tex-sm text-gray-400">
                                    {item?.description}
                                </span>

                                <div className="flex items-center gap-6">
                                    <a href={item?.liveUrl} target="_blank">
                                        <FaRegShareSquare size={30} className="hover:text-red-500" />
                                    </a>
                                    <a href={item?.githubUrl} target="_blank">
                                        <IoGitBranchOutline size={30} className="hover:text-red-500" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyProjectsSection
