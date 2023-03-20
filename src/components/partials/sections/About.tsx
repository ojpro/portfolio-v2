import Navbar from "@/components/partials/Navbar";

export default function About() {
    return (
        <section className="min-h-screen relative">
            {/* <> Navbar </> */}
            <Navbar></Navbar>
            <a href="#" id="about"></a>
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <h2 className="text-center text-2xl font-bold my-2">Who Am I?</h2>
                <div className="flex flex-row flex-wrap justify-evenly items-center">
                    <img src="https://source.unsplash.com/random/200x200/?person" className="rounded-full"
                         alt="My Picture"/>
                    <div>
                        <p>
                            Hey, I&apos;m Oussama, Full-Stack Developer. I work on building my clients&apos; ideas as a
                            freelancer.
                            As a Developer, I am very passionate when it comes to solving problems, Planning, and
                            designing ideas.
                            Besides my job, I play chess, draw things, and listen to Spotify.
                        </p>
                        <div className="flex flex-row flex-nowrap gap-2 justify-start mt-4">
                            <a href="#contact" className="py-2.5 px-4 bg-blue-500 text-white">Contact Me</a>
                            <a href="#" className="py-2.5 px-4 border border-blue-500 text-blue-500">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
