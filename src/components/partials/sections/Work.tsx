// Import components
import ProjectCard from "@/components/partials/cards/ProjectCard";

// import project screenshots
import executive from "@/../public/images/executive.png";
import steakhouse from "@/../public/images/steakhouse.png";
import coliving from "@/../public/images/coliving.png";

export default function Work() {
    return (
        <>
            <a href="#" id="work" aria-label="My Latest Projects"></a>
            <section className="container mx-auto px-8">
                <h2 className="h2">My Work</h2>

                {/* TODO: make the list of the project dynamic */}
                {/* <> Projects Card </> */}
                <div className="w-11/12 mx-auto">
                    <ul className="flex flex-col justify-between gap-16">
                        <ProjectCard title="SteakHouse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={steakhouse}
                                     imageAlt="SteakHouse Project Screenshot" bgFrom="from-[#F3B194]"
                                     bgTo="to-[#F30103]" previewLink="https://ojpro-steakhouse.vercel.app/"
                                     githubLink="https://github.com/oussamaeljabbari/SteakHouse"/>

                        <ProjectCard title="Executive" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={executive}
                                     imageAlt="Executive Project Screenshot" bgFrom="from-[#A2A0FE]"
                                     bgTo="to-[#27187E]" previewLink="https://ojpro-executive.vercel.app/"
                                     githubLink="https://github.com/oussamaeljabbari/executive"/>

                        <ProjectCard title="Coliving" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={coliving}
                                     imageAlt="Coliving Project Screenshot" bgFrom="from-[#EA4E2E]"
                                     bgTo="to-[#EA720C]" previewLink="https://ojpro-coliving.vercel.app/"
                                     githubLink="https://github.com/oussamaeljabbari/coliving"/>
                    </ul>
                </div>
            </section>
        </>
    )
        ;
}
