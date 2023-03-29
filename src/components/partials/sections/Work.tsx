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
                <h2 className="text-5xl font-bold text-center mb-20 mt-16">My Work</h2>

                {/* <> Projects Card </> */}
                <div className="w-11/12 mx-auto">
                    <ul className="flex flex-col justify-between gap-16">
                        <ProjectCard title="SteakHouse" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={steakhouse} bgFrom="from-[#F3B194]"
                                     bgTo="to-[#F30103]"></ProjectCard>
                        <ProjectCard title="Executive" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={executive} bgFrom="from-[#A2A0FE]"
                                     bgTo="to-[#27187E]"></ProjectCard>
                        <ProjectCard title="Coliving" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore." image={coliving} bgFrom="from-[#EA4E2E]"
                                     bgTo="to-[#EA720C]"
                        ></ProjectCard>
                    </ul>
                </div>
            </section>
        </>
    )
        ;
}
