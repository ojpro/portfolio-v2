import {FaHeart} from "react-icons/fa";
import {RiCreativeCommonsFill} from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <footer className="p-4 relative z-10">
                {/* SVG Wave */}
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none" className="absolute left-0 right-0 bottom-0 w-full h-16 opacity-25 -z-10">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
                {/* <> Copy Rights </> */}
                <p className="text-center text-white"> Make with <FaHeart
                    className="inline-block mx-2 text-red-500 hover:animate-ping"></FaHeart>
                    by
                    <a href="https://ojpro.me/" className="text-md font-medium text-blue-200"> ojpro </a>
                    | <RiCreativeCommonsFill
                    className="inline-block mx-2 text-xl"
                    title="Creative Common Attribution - (Your are free to use this website + attribution)"></RiCreativeCommonsFill> rights
                </p>
            </footer>
        </>
    );
}
