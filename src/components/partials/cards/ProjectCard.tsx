import Image, {StaticImageData} from "next/image";
import {RxExternalLink} from "react-icons/rx";
import {HiOutlineCodeBracket} from "react-icons/hi2";
import {BiChevronRight} from "react-icons/bi";
import Link from "next/link";

export default function ProjectCard(props: { title: string, description: string, image: StaticImageData, imageAlt: string, bgFrom: string, bgTo: string }) {
    return (
        <li className={"grid lg:grid-cols-2 p-1 group overflow-hidden rounded-xl bg-gradient-to-bl " + props.bgFrom + " " + props.bgTo}>
            <div className="self-center container w-10/12 mx-auto lg:group-even:order-2">
                <h3 className="text-3xl font-bold my-4">{props.title}</h3>
                <p>{props.description}</p>
                <a href="#"
                   className="my-4 inline-block border px-6 py-2 rounded-full text-black bg-white font-medium shadow">
                    <span>More Details </span>
                    <BiChevronRight className="inline-block"></BiChevronRight>
                </a>
            </div>
            <div className="relative group">
                <Image src={props.image} alt={props.imageAlt} className=""/>
                <ul className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:invisible lg:p-16 p-8 rounded min-w-max group-hover:visible delay-300 ease-in-out flex md:flex-row flex-wrap gap-4 justify-between items-start">
                    <li className="bg-gradient-to-bl from-gray-600 to-gray-800/50 hover:to-gray-900 border border-transparent hover:border-gray-700 hover:delay-300 ease-linear rounded-full mr-4">
                        <Link href="#" aria-label="Preview Live"
                              className="flex flex-row justify-evenly items-center gap-2 px-3.5 py-2">
                            <span>Preview</span>
                            <RxExternalLink className="text-2xl font-bold"></RxExternalLink>
                        </Link>
                    </li>
                    <li className="bg-gradient-to-bl from-gray-600 to-gray-800/50 hover:to-gray-900 border border-transparent hover:border-gray-700 hover:delay-300 ease-linear rounded-full">

                        <Link href="#" aria-label="Github Repo"
                              className="flex flex-row justify-evenly items-center gap-2 px-3.5 py-2">
                            <span>Code</span>
                            <HiOutlineCodeBracket className="text-2xl font-bold"></HiOutlineCodeBracket>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    );
}