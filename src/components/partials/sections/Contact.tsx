import {FiGithub, FiInstagram, FiLinkedin, FiSend, FiTwitter} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";
import {useState} from "react";
import Link from "next/link";

export default function Contact() {
    // initialize form field
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // form submitting function
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // TODO: validate the form

        // send email
        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                email: email,
                name: name,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        // catch errors
        const {error} = await res.json();
        // handle errors if exists
        if (error) {
            // TODO:  #52 issues
            console.log(error);
            return;
        }

        // TODO: show a success modal
        alert("Email Sent Successfully")
    };

    return (<>
        <a href="#" id="contact"></a>
        <section>
            <div
                className="flex flex-row flex-wrap justify-evenly gap-8 p-4 container mx-auto lg:my-36 pt-8 lg:pt-0">
                {/* <> Content </> */}
                <div className="max-w-xl flex flex-col justify-around gap-4 p-4 md:p-2 container">
                    <div>
                        <h3 className="text-3xl font-bold my-4">Let&apos;s make something great from your
                            ideas.</h3>
                        <p className="font-light text-gray-200">I&apos;m always open for any kind of help that i can
                            possibly provide to anyone who need it.</p>
                    </div>
                    {/* Social Media Links */}
                    <ul className="flex flex-row flex-nowrap justify-evenly gap-6 my-4">
                        <li>
                            <Link href="https://twitter.com/heyojpro" title="Follow my Twitter Account">
                                <FiTwitter className="w-6 h-6 hover:fill-white hover:text-black"></FiTwitter>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://linkedin.com/in/ojpro" title="My Account on Linkedin">
                                <FiLinkedin className="w-6 h-6 hover:fill-white hover:text-black"></FiLinkedin>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/heyojpro" title="My Instagram Account">
                                <FiInstagram className="w-6 h-6 hover:fill-white hover:text-black"></FiInstagram>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/ojpro" title="Visit My Github Profile">
                                <FiGithub className="w-6 h-6 hover:fill-white hover:text-black"></FiGithub>
                            </Link>
                        </li>
                        <li>
                            <Link href="mailto:work@ojpro.me" title="Send Me an Email">
                                <HiOutlineMail
                                    className="w-7 h-7 hover:fill-white hover:text-black"></HiOutlineMail>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* <> Form </> */}
                <div className="relative w-full max-w-lg p-4">
                    <form action="" onSubmit={handleSubmit}
                          className="flex flex-col flex-nowrap justify-start items-center gap-6">
                        <label htmlFor="name" className="flex flex-col gap-2 w-full">
                            <span>Full Name </span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                   className="px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 border-gray-700 focus:border-blue-600"
                                   id="name" required/>
                        </label>
                        <label htmlFor="email" className="flex flex-col gap-2 w-full">
                            <span>Email </span>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                   className="px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 border-gray-700 focus:border-blue-600"
                                   id="email" required/>
                        </label>
                        <label htmlFor="message" className="flex flex-col gap-2 w-full">
                            <span>Message </span>
                            <textarea name="" id="message" value={message} onChange={(e) => setMessage(e.target.value)}
                                      className="px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 border-gray-700 focus:border-blue-600"
                                      required></textarea>
                        </label>

                        <button
                            className="bg-blue-600 px-7 py-2 rounded self-start group hover:shadow hover:shadow-blue-600">
                            Send
                            <FiSend className="inline-block ml-2 group-hover:fill-white"></FiSend></button>
                    </form>
                </div>
            </div>

        </section>
    </>);
}