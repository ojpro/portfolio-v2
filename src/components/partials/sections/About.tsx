import Navbar from "@/components/partials/Navbar";
import Image from "next/image";
import MyPicture from "@/../public/images/my-picture.png";
import {FiChevronDown, FiExternalLink} from "react-icons/fi";
import {BsArrowRightShort} from "react-icons/bs";

export default function About() {
    return (
        <>
            {/* <> Navbar </> */}
            <Navbar></Navbar>
            <a href="#" id="about"></a>
            <section className="min-h-screen relative">
                <div className="m-20">
                    <h2 className="text-5xl font-bold text-center mb-20 pt-28">Who Am I?</h2>
                    <div
                        className="mx-auto p-4 flex flex-row flex-wrap justify-evenly items-center self-center">
                        <div className="max-w-3xl flex flex-col justify-between gap-4">
                            <h3 className="text-2xl font-medium">Hey,</h3>
                            <h4 className="text-4xl font-bold">I make the website that will achieve your <span className="relative inline-block before:block before:w-full before:h-2 before:bg-yellow-500 before:absolute before:-bottom-1 before:left-0 before:right-0 before:bg-opacity-90 before:-rotate-1 before:rounded-tr-md">business goal.</span></h4>
                            <p className="text-gray-200 text-lg">
                                I&apos;m Oussama, Full-Stack Developer. I work on building my clients&apos; ideas
                                as a
                                freelancer.
                                As a Developer, I am <span className="">very passionate</span> when it comes to solving problems, Planning, and
                                designing ideas.
                                Besides my job, I play chess, draw things, and listen to Spotify.
                            </p>
                            <div className="flex flex-row flex-nowrap gap-4 justify-start mt-4">
                                <a href="#contact"
                                   className="py-2.5 px-4 bg-[#4462f5] text-white rounded-md flex flex-row flex-nowrap justify-evenly items-center gap-2 hover:py-3 hover:px-5 group">
                                    Let&apos;s work
                                    <BsArrowRightShort className="w-6 h-auto group-hover:animate-ping"></BsArrowRightShort>
                                </a>
                                <a href="#"
                                   className="py-2.5 px-4 bg-gray-800 text-gray-300 rounded-md flex flex-row flex-nowrap justify-evenly items-center gap-2 border-2 border-transparent hover:border-2 hover:border-blue-600 hover:translate-x-0.5 group">
                                    Want My Resume ?
                                    <FiExternalLink className="group-hover:text-blue-400 hidden group-hover:inline-block"></FiExternalLink>
                                </a>
                            </div>
                        </div>
                        <div
                            className="relative bg-gray-800 backdrop-blur-md dark:bg-opacity-80 hover:dark:bg-opacity-80 rounded-xl p-1 hover:rotate-2 shadow-2xl m-16">
                            <Image src={MyPicture}
                                   className="w-80 h-fit rounded-2xl rotate-3 hover:-rotate-6 shadow-2xl backdrop-blur-md md:opacity-75 hover:opacity-100 hover:scale-105 contrast-125"
                                   alt="My Picture"/>
                        </div>
                    </div>
                </div>
                <a href="#work"
                   className="bg-gray-800 block w-fit mx-auto p-2 rounded-full shadow-2xl hover:bg-gray-800/50 hover:shadow-none hover:translate-y-0.5 hover:delay-200 hover:ease-linear animate-pulse hover:animate-none border border-gray-700">
                    <FiChevronDown className="w-8 h-8 text-gray-200"></FiChevronDown>
                </a>
            </section>
        </>
    );
}
