import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialCard() {
    return (
        <>
            {/* <> Card </> */}
            <li className="flex-shrink-0 bg-gray-50 dark:bg-gray-700 ml-2 rounded shadow w-5/12 max-w-md flex flex-col justify-between relative p-4 pl-6">
                <div>
                    <RiDoubleQuotesL className="absolute left-4 top-4"></RiDoubleQuotesL>
                    <p className="p-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="flex flex-row flex-nowrap justify-start items-center gap-2 pl-6">
                    <img src="https://source.unsplash.com/random/200x200/?person"
                        className="w-12 h-12 rounded-full" alt="" />
                    <div className="flex flex-col">
                        <h3>Client Name</h3>
                        <span className="text-xs text-gray-500">Company Name - CTO </span>
                    </div>
                </div>
            </li>
        </>
    );
}