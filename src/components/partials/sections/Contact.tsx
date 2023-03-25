import {FiInstagram, FiTwitter, FiLinkedin, FiGithub,FiSend} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";

export default function Contact() {
    return (
        <>
            <a href="#" id="contact"></a>
            <section>
                <div className="flex flex-row flex-wrap justify-evenly gap-8 p-4 container mx-auto my-36">
                    {/* <> Content </> */}
                    <div className="max-w-xl flex flex-col justify-around gap-4 p-8 md:p-2 container">
                        <div>
                            <h3 className="text-3xl font-bold my-4">Let&apos;s make something great from your
                                ideas.</h3>
                            <p className="font-light text-gray-200">I&apos;m always open for any kind of help that i can
                                possibly provide to anyone who need it.</p>
                        </div>
                        <ul className="flex flex-row flex-nowrap justify-evenly gap-6 w-1/2">
                            <li>
                                <a href="https://twitter.com/heyojpro">
                                    <FiTwitter className="w-6 h-6 hover:fill-white hover:text-black"></FiTwitter>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/ojpro">
                                    <FiLinkedin className="w-6 h-6 hover:fill-white hover:text-black"></FiLinkedin>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FiInstagram className="w-6 h-6 hover:fill-white hover:text-black"></FiInstagram>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/ojpro">
                                    <FiGithub className="w-6 h-6 hover:fill-white hover:text-black"></FiGithub>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:work@ojpro.me">
                                    <HiOutlineMail className="w-7 h-7 hover:fill-white hover:text-black"></HiOutlineMail>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <> Form </> */}
                    <div>
                        <form action=""
                              className="flex flex-col flex-nowrap justify-start items-center gap-6 w-96">
                            <label htmlFor="name" className="flex flex-col gap-2 w-full">
                                <span>Name </span>
                                <input type="text"
                                       className="px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 border-gray-700 focus:border-blue-600"
                                       id="name" required/>
                            </label>
                            <label htmlFor="email" className="flex flex-col gap-2 w-full">
                                <span>Email </span>
                                <input type="email"
                                       className="px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 border-gray-700 focus:border-blue-600"
                                       id="email" required/>
                            </label>
                            <label htmlFor="message" className="flex flex-col gap-2 w-full">
                                <span>Message </span>
                                <textarea name="" id="message"
                                          className="px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 border-gray-700 focus:border-blue-600" required></textarea>
                            </label>

                            <button className="bg-blue-600 px-7 py-2 rounded self-start group hover:shadow hover:shadow-blue-600">Send <FiSend className="inline-block ml-2 group-hover:fill-white"></FiSend></button>
                        </form>
                    </div>
                </div>

            </section>
        </>
    );
}