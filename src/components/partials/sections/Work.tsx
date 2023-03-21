import Image from "next/image";
// import project screenshots
import executive from "@/../public/images/executive.png";
import steakhouse from "@/../public/images/steakhouse.png";
import coliving from "@/../public/images/coliving.png";

export default function Work() {
    return (
        <>
            <a href="#" id="work"></a>
            <section className="container mx-auto py-28 px-8">
                <h2 className="text-2xl text-center my-10">My Work</h2>

                {/* <> Projects Card </> */}
                <div className="w-11/12 mx-auto">
                    <ul className="flex flex-col justify-between gap-16">
                        <li className="grid lg:grid-cols-2 p-1 overflow-hidden rounded-xl bg-gradient-to-bl from-[#F3B194] to-[#F30103]">
                            <div className="self-center container w-10/12 mx-auto">
                                <h3 className="text-3xl font-bold my-4">Project Name</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore.</p>
                                <a href="#"
                                   className="my-4 inline-block border px-6 py-2 rounded-full text-black bg-white font-medium">More
                                    Details </a>
                            </div>
                            <Image src={steakhouse} alt="" className="ml-28"/>
                        </li>
                        <li className="grid lg:grid-cols-2 p-1 overflow-hidden rounded-xl bg-gradient-to-bl from-[#A2A0FE] to-[#27187E]">
                            <div className="self-center container w-10/12 mx-auto order-2">
                                <h3 className="text-3xl font-bold my-4">Project Name</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore.</p>
                                <a href="#"
                                   className="my-4 inline-block border px-6 py-2 rounded-full text-black bg-white font-medium">More
                                    Details </a>
                            </div>
                            <Image src={executive} alt="" className="-ml-28"/>
                        </li>
                        <li className="grid lg:grid-cols-2 p-1 overflow-hidden rounded-xl bg-gradient-to-bl from-[#EA4E2E] to-[#EA720C]">
                            <div className="self-center container w-10/12 mx-auto">
                                <h3 className="text-3xl font-bold my-4">Project Name</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut cum earum et
                                    eum neque nulla quis saepe tempore.</p>
                                <a href="#"
                                   className="my-4 inline-block border px-6 py-2 rounded-full text-black bg-white font-medium">More
                                    Details </a>
                            </div>
                            <Image src={coliving} alt="" className="p-4"/>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
