import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

// import hero illustration image
import IllustrationImage from "@/../public/images/hero-section-illustration.svg";
import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            <section className="h-[80vh] relative flex items-center bg-black/40">
                <div className="flex flex-row flex-wrap justify-evenly items-center gap-8 w-full p-8 pt-0">
                    <div className="max-w-lg flex flex-col gap-2">
                        <h1 className="text-lg">Hey, I am Oussama 👨‍💻.</h1>
                        <h2 className="text-3xl font-medium">A Full-Stack Developer.</h2>
                        <h3 className="text-xl text-gray-200">I will help you bring your ideas to a professional
                            website.</h3>
                    </div>
                    <Image src={IllustrationImage} alt="Website Development Services"
                        className="w-full md:w-1/3 h-auto" loading="eager" />
                </div>
                <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74"
                    className="absolute -bottom-[74px] left-0 right-0 rotate-180 w-full fill-black/40">
                    <path
                        d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
                </svg>
            </section>
            <Link href="#about" title="About Section"
                className="bg-gray-800 block w-fit mx-auto p-2 rounded-full shadow-2xl hover:bg-gray-800/50 hover:shadow-none hover:translate-y-0.5 hover:delay-200 hover:ease-linear animate-pulse hover:animate-none border-2 border-gray-700/40">
                <FiChevronDown className="w-8 h-8 text-gray-200"></FiChevronDown>
            </Link>
        </>
    );
}
