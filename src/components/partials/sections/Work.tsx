// Import components
import ProjectCard from "@/components/partials/cards/ProjectCard";

// import project screenshots
import executive from "@/../public/images/executive.png";
import steakhouse from "@/../public/images/steakhouse.png";
import coliving from "@/../public/images/coliving.png";
import survey from "@/../public/images/survey.png";

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

                        <ProjectCard title="Surveys" description="Surveys - Full System to manage your surveys"
                                     image={survey}
                                     isNew
                                     imageAlt="Surveys System" bgFrom="from-[#60a5fa]"
                                     bgTo="to-[#3b82f6]" previewLink="#"
                                     githubLink="https://github.com/ojpro/survey"/>

                        <ProjectCard title="SteakHouse" description="SteakHouse - Discovery and get the best steak."
                                     image={steakhouse}
                                     imageAlt="SteakHouse Project Screenshot" bgFrom="from-[#F3B194]"
                                     bgTo="to-[#F30103]" previewLink="https://ojpro-steakhouse.vercel.app/"
                                     githubLink="https://github.com/oussamaeljabbari/SteakHouse"/>

                        <ProjectCard title="Executive" description="Executive - We Help to Build Your Dream"
                                     image={executive}
                                     imageAlt="Executive Project Screenshot" bgFrom="from-[#A2A0FE]"
                                     bgTo="to-[#27187E]" previewLink="https://ojpro-executive.vercel.app/"
                                     githubLink="https://github.com/oussamaeljabbari/executive"/>

                        <ProjectCard title="Coliving"
                                     description="Coliving - Book affordable and hassle-free coliving spaces, all amenities included."
                                     image={coliving}
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
