import Image, { StaticImageData } from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialCard(props: { feedback: string, picture: StaticImageData, name: string }) {
    return (
        <>
            {/* <> Card </> */}
            <li className="p-4 relative bg-gray-800 w-10/12 md:w-1/2 lg:w-1/3 rounded-md shadow-md mx-auto even:-rotate-2 odd:rotate-2">
                <RiDoubleQuotesL className="absolute top-4 left-4 w-8 h-8"></RiDoubleQuotesL>
                <div className="py-4 px-9 min-h-full flex flex-col">
                    <p className="py-10 italic text-xl font-serif text-gray-200 leading-8">
                        {props.feedback}
                    </p>
                    <div className="flex flex-row justify-start items-center gap-4 mt-auto">
                        <Image src={props.picture}
                            className="rounded-full w-14 h-14" alt="Azaher" />
                        <div className="">
                            <h3 className="font-medium text-md">{props.name}</h3>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}