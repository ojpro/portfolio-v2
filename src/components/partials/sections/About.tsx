import Image from "next/image";
import Link from "next/link";
// import icons
import {FiExternalLink} from "react-icons/fi";
import {BsArrowRightShort} from "react-icons/bs";
// import resources
import MyPicture from "@/../public/images/my-picture.jpeg";


export default function About() {
    return (
        <>
            <a href="#" id="about" aria-label="About Section"></a>
            <section className="min-h-screen relative flex flex-col justify-evenly items-center">
                <div className="m-4">
                    <h2 className="h2">Who Am I?</h2>
                    <div
                        className="mx-auto p-4 flex flex-row flex-wrap justify-evenly items-center self-center gap-8">
                        <div
                            className="relative bg-gray-800 backdrop-blur-md dark:bg-opacity-80 hover:dark:bg-opacity-80 rounded-xl p-1 hover:rotate-2 shadow-2xl m-16 min-w-[300px] xl:order-2">
                            <Image src={MyPicture} aria-label="My Picture"
                                   className="w-80 h-fit rounded-2xl rotate-3 hover:-rotate-6 shadow-2xl backdrop-blur-md md:opacity-80 hover:opacity-100 hover:scale-105 contrast-125"
                                   alt="My Picture"/>

                        </div>
                        <div className="max-w-3xl flex flex-col justify-between gap-4">
                            <div className="group flex flex-col flex-nowrap justify-between gap-5">
                                <h3 className="text-2xl font-medium">Hey <span
                                    className="group-hover:animate-bounce inline-block">👋</span>,</h3>
                                <h4 className="text-4xl font-bold">I make the website that will achieve your <span
                                    className="relative inline-block after:absolute after:pointer-events-none after:w-full after:h-2 after:-bottom-1 after:left-0 after:bg-yellow-400  after:bg-opacity-90 after:-z-10 z-10 after:rounded-sm after:-rotate-1">business goal.</span>
                                </h4>
                                <p className="text-gray-200 text-lg">
                                    I&apos;m Oussama, a Full-Stack Developer. I work as a freelancer, using my skills to
                                    build my clients&apos; ideas. As a Developer, I am passionate about problem-solving,
                                    planning, and designing. In my spare time, I enjoy playing chess, drawing, and
                                    listening to Spotify.
                                </p>
                            </div>
                            <div className="flex flex-row flex-wrap gap-4 justify-start mt-4">
                                <Link href="#contact" title="Let's make business!" aria-label="Contact Me"
                                   className="py-2.5 px-4 bg-[#4462f5] text-white rounded-md flex flex-row flex-nowrap justify-evenly items-center gap-2 hover:py-3 hover:px-5 group">
                                    Let&apos;s work
                                    <BsArrowRightShort
                                        className="w-6 h-auto group-hover:animate-ping"></BsArrowRightShort>
                                </Link>
                                <Link href="/documents/cv.pdf" target="_blank" title="My Resume" aria-label="Open My Resume"
                                      className="py-2.5 px-4 bg-gray-800 text-gray-300 rounded-md flex flex-row flex-nowrap justify-evenly items-center gap-2 border-2 border-transparent hover:border-blue-600 hover:translate-x-0.5 group">
                                    Want My Resume ?
                                    <FiExternalLink
                                        className="group-hover:text-blue-400 invisible group-hover:visible"></FiExternalLink>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}