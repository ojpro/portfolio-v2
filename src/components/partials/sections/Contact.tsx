import {BsInstagram,BsTwitter,BsLinkedin, BsGithub} from "react-icons/bs"

export default function Contact() {
    return (
        <section className="mt-12">
            <div className="flex flex-row flex-wrap justify-evenly items-center gap-4 w-9/12 mx-auto">
                {/* <> Content </> */}
                <div className="w-[500px] p-3 h-fit">
                    <h2 className="text-2xl font-bold">Want to work together?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos odit nesciunt
                        laudantium
                        nihil, vero ex temporibus amet veritatis possimus.</p>
                    <br/>
                    <ul className="flex flex-row flex-nowrap gap-2">
                        <li>
                            <a href="#">
                                <BsInstagram className="w-6 h-6"></BsInstagram>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsTwitter className="w-6 h-6"></BsTwitter>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsLinkedin className="w-6 h-6"></BsLinkedin>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <BsGithub className="w-6 h-6"></BsGithub>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* <> Form </> */}
                <div className="w-full md:w-8/12 lg:w-5/12 xl:w-1/3">
                    <form action="" className="flex flex-col justify-items-stretch gap-4 bg-blue-100 p-6 rounded w-full">
                        <label htmlFor="">
                            <span className="block">Name : </span>
                            <input type="text" className="py-2 px-2.5 rounded w-full shadow outline-2 outline-blue-500"/>
                        </label>
                        <label htmlFor="">
                            <span className="block">Email : </span>
                            <input type="email" className="py-2 px-2.5 rounded w-full shadow outline-blue-500"/>
                        </label>
                        <label htmlFor="">
                            <span className="block">Message : </span>
                            <textarea name="" id="" className="py-2 px-2.5 rounded w-full shadow outline-blue-500"></textarea>
                        </label>

                        <button className="bg-blue-500 px-2.5 py-3 rounded text-white shadow">Send</button>
                    </form>
                </div>
            </div>

        </section>
    );
}