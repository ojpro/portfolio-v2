import Navbar from "@/components/partials/Navbar";
import Image from "next/image";
import MyPicture from "@/../public/images/my-picture.png";

export default function About() {
    return (
        <>
            {/* <> Navbar </> */}
            <Navbar></Navbar>

            <section className="min-h-screen relative">
                <a href="#" id="about"></a>
                <div className="m-20">
                    <h2 className="text-5xl font-bold text-center mb-20 mt-10">Who Am I?</h2>
                    <div
                        className="container mx-auto p-4 flex flex-row flex-wrap justify-evenly items-center min-h-full">
                        <div className="max-w-2xl flex flex-col justify-between gap-4">
                            <h3 className="text-3xl font-medium">Hey,</h3>
                            <p className="">
                                I&apos;m Oussama, Full-Stack Developer. I work on building my clients&apos; ideas
                                as a
                                freelancer.
                                As a Developer, I am very passionate when it comes to solving problems, Planning, and
                                designing ideas.
                                Besides my job, I play chess, draw things, and listen to Spotify.
                            </p>
                            <div className="flex flex-row flex-nowrap gap-4 justify-start mt-4">
                                <a href="#contact"
                                   className="py-2.5 px-4 bg-[#4462f5] text-white rounded-full">Let&apos;s work</a>
                                <a href="#" className="py-2.5 px-4 border border-[#4462f5] text-[#4462f5] rounded-full">Want
                                    My
                                    Resume ?</a>
                            </div>
                        </div>
                        <div
                            className="relative bg-gray-800 backdrop-blur-md dark:bg-opacity-60 hover:dark:bg-opacity-80 rounded-xl p-1 hover:rotate-2 shadow-2xl m-10">
                            <Image src={MyPicture}
                                   className="w-80 h-fit rounded-2xl rotate-3 hover:-rotate-6 shadow-2xl backdrop-blur-md md:opacity-75 hover:opacity-100 hover:scale-105"
                                   alt="My Picture"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
