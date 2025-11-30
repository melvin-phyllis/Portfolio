import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/melvin-akou/" },
    { icon: <FaGithub />, href: "https://github.com/melvin-phyllis" },
    { icon: <FaEnvelope />, href: "mailto:akoumelvinpro@gmail.com" },
  ];

  return (
    <footer className="bg-gray-950  border-gray-800 border-t text-white font-mono px-4 md:px-20 py-12">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
        <div className="space-y-3 md:w-1/3">
          <h2 className="text-2xl font-bold">Melvin.dev</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Developpeur Full-Stack JS , passionne par
            les apps web modernes, les stacks React/Next et l&apos;integration de
            services cloud.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contact</h3>
          <div className="text-gray-300 space-y-1 text-sm md:text-base">
            <p>
              Email:{" "}
              <a
                className="hover:text-red-400"
                href="mailto:akoumelvinpro@gmail.com"
              >
                akoumelvinpro@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="hover:text-red-400 transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Sections</h3>
          <ul className="text-gray-300 space-y-2 text-sm md:text-base">
            <li>Hero & profil</li>
            <li>Competences</li>
            <li>Projets</li>
            <li>Experience</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm text-center">
        (c) {new Date().getFullYear()} Melvin.dev
      </div>
    </footer>
  );
};

export default Footer;
