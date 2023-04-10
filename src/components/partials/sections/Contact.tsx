import { FiGithub, FiInstagram, FiLinkedin, FiSend, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { ChangeEventHandler, useState } from "react";
import Link from "next/link";

// Import SweetAlert
import Swal from 'sweetalert2'

export default function Contact() {
    // initialize form field
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [canSubmit, setCanSubmit] = useState(true);

    // validation states
    const [validName, setValidName] = useState<any>(true);
    const [validEmail, setValidEmail] = useState<any>(true);
    const [validMessage, setValidMessage] = useState<any>(true);

    // client name validation
    const validateName = (e: any) => {
        // store the given name
        let name = e.target.value;

        // update the state
        setName(name);

        // check if empty
        if (name == '') {
            // display error message
            setValidName("Your name is important");

            // disable form submit
            setCanSubmit(false);
        }
        // check if less than 3 chars
        else if (name.length < 3) {
            // show error message
            setValidName("The provided name is too short");

            // disable form submit
            setCanSubmit(false);
        }
        else {
            // otherwise back to default
            setValidName(true);
            
            // enable form
            setCanSubmit(true);
        }
    }

    // client email validation
    const validateEmail = (e: any) => {
        // valid email RegExp
        const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        // store the given email
        let email = e.target.value;

        // update the state
        setEmail(email);

        if (!regexp.test(email)) {
            // error message
            setValidEmail("The provided email is not valid yet!");

            // disable form submit
            setCanSubmit(false);
        }
        else {
            // otherwise back to defaul
            setValidEmail(true);

            // enable form
            setCanSubmit(true);
        }
    }

    // client message validation
    const validateMessage = (e: any) => {

        // store the given email
        let message = e.target.value;

        // update the state
        setMessage(message);

        if (message.length < 25) {
            // show error message
            setValidMessage("Can you give me more details ?");

            // disable form submit
            setCanSubmit(false);
        }
        else {
            // otherwise back to defaul
            setValidMessage(true);

            // enable form
            setCanSubmit(true);
        }
    }

    // form submitting function
    const handleSubmit = async (e: any) => {
        // prevent submitting action
        e.preventDefault();

        // disable submit button with a little effects
        setCanSubmit(false);

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
        }).then(() => {
            // show a success modal
            Swal.fire(
                'Email sent to me',
                'I will get in touch with you as soon as possible.',
                'success'
            )

            // after the modal dimiss return the button to it state
            setCanSubmit(true);

            // clear all the inputs
            setName('');
            setEmail('');
            setMessage('');

        }).catch(error => {

            // handle errors if exists
            if (error) {
                // TODO:  #52 issues
                console.log(error);
                return;
            }
        })

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
                            <input type="text" value={name} onChange={validateName}
                                className={`px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 focus:border-blue-600  ${validName == true ? 'border-gray-700' : 'border-red-400'}`}
                                id="name" required />
                            <span className="text-sm text-red-400 font-medium">{validName}</span>
                        </label>
                        <label htmlFor="email" className="flex flex-col gap-2 w-full">
                            <span>Email </span>
                            <input type="email" value={email} onChange={validateEmail}
                                className={`px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 focus:border-blue-600  ${validEmail == true ? 'border-gray-700' : 'border-red-400'}`}
                                id="email" required />
                            <span className="text-sm text-red-400 font-medium">{validEmail}</span>
                        </label>
                        <label htmlFor="message" className="flex flex-col gap-2 w-full">
                            <span>Message </span>
                            <textarea name="" id="message" value={message} onChange={validateMessage}
                                className={`px-3 py-2.5 rounded-md bg-gray-800 outline-none border-2 ${validMessage == true ? 'border-gray-700' : 'border-red-400'} focus:border-blue-600 h-24`}
                                required></textarea>
                            <span className="text-sm text-red-400 font-medium">{validMessage}</span>
                        </label>

                        <button
                            className={`px-7 py-2 rounded self-start group hover:shadow hover:shadow-blue-600 ${canSubmit ? 'bg-blue-600' : 'bg-blue-400 cursor-not-allowed'}`}>
                            Send
                            <FiSend className={`inline-block ml-2 group-hover:fill-white ${!canSubmit ? 'animate-pulse' : ''}`}></FiSend></button>
                    </form>
                </div>
            </div>

        </section>
    </>);
}