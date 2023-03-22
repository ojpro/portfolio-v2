import Image, {StaticImageData} from "next/image";
import {RxExternalLink} from "react-icons/rx";
import {HiOutlineCodeBracket} from "react-icons/hi2";
import {BiChevronRight} from "react-icons/bi";

export default function ProjectCard(props: { title: string, description: string, image: StaticImageData, bgFrom: string, bgTo: string }) {
    return (
        <li className={"grid lg:grid-cols-2 p-1 group overflow-hidden rounded-xl bg-gradient-to-bl from-[" + props.bgFrom + "] to-[" + props.bgTo + "]"}>
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
                <Image src={props.image} alt="" className=""/>
                <ul className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-16 rounded p-16 min-w-max invisible group-hover:visible delay-300 ease-in-out">
                    <li className="inline-block bg-gray-900/90 hover:bg-gray-800 border border-transparent hover:border-gray-600 rounded-md mr-4">
                        <a href="#"
                           className="flex flex-row justify-evenly items-center gap-2 px-3.5 py-2">
                            <span>Preview</span>
                            <RxExternalLink className="text-2xl font-bold"></RxExternalLink>
                        </a>
                    </li>
                    <li className="inline-block bg-gray-900/90 hover:bg-gray-800 border border-transparent hover:border-gray-600 rounded-md">
                        <a href="#"
                           className="flex flex-row justify-evenly items-center gap-2 px-3.5 py-2">
                            <span>Code</span>
                            <HiOutlineCodeBracket className="text-2xl font-bold"></HiOutlineCodeBracket>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
}