import {RiDoubleQuotesL} from "react-icons/ri";

export default function TestimonialCard() {
    return (
        <>
            {/* <> Card </> */}
            <li className="p-4 relative bg-gray-800 w-10/12 md:w-1/2 lg:w-1/3 rounded-md shadow-md mx-auto even:-rotate-2 odd:rotate-2">
                <RiDoubleQuotesL className="absolute top-4 left-4 w-8 h-8"></RiDoubleQuotesL>
                <div className="py-4 px-9">
                    <p className="py-10 italic text-xl font-serif text-gray-200 leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis doloremque expedita, quia rerum. Blanditiis delectus dicta eaque esse fugit ipsa, nulla quisquam.</p>
                    <div className="flex flex-row justify-start items-center gap-4 mt-2">
                        <img src="https://source.unsplash.com/random/200x200/?person"
                             className="rounded-full w-14 h-14" alt=""/>
                        <div className="">
                            <h3 className="font-medium text-md">Client Name</h3>
                            <span className="font-normal text-sm text-gray-400">Company Name - CTO </span>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
}