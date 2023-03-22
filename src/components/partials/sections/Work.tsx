import Image from "next/image";
// Import components
import ProjectCard from "@/components/partials/cards/ProjectCard";

// import project screenshots
import executive from "@/../public/images/executive.png";
import steakhouse from "@/../public/images/steakhouse.png";
import coliving from "@/../public/images/coliving.png";

export default function Work() {
    return (
        <>
            <a href="#" id="work"></a>
            <section className="container mx-auto px-8">
                <h2 className="text-5xl font-bold text-center mb-20 mt-10">My Work</h2>

                {/* <> Projects Card </> */}
                <div className="w-11/12 mx-auto">
                    <ul className="flex flex-col justify-between gap-24">
                        <ProjectCard title="Project Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={steakhouse} bgFrom="#F3B194"
                                     bgTo="#F30103"></ProjectCard>
                        <ProjectCard title="Project Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={executive} bgFrom="#A2A0FE"
                                     bgTo="#27187E"></ProjectCard>
                        <ProjectCard title="Project Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={coliving} bgFrom="#EA4E2E"
                                     bgTo="#EA720C"
                        ></ProjectCard>
                    </ul>
                </div>
            </section>
        </>
    )
        ;
}
