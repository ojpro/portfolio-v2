import {FaHeart} from "react-icons/fa";
import {RiCreativeCommonsFill} from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <footer className="p-4 bg-black/20">
                {/* <> Copy Rights </> */}
                <p className="text-center text-white"> Make with <FaHeart className="inline-block mx-2 text-red-500 hover:animate-ping"></FaHeart> | <RiCreativeCommonsFill className="inline-block mx-2 text-xl" title="Creative Common Attribution - (Your are free to use this website + attribution)"></RiCreativeCommonsFill> rights </p>
            </footer>
        </>
    );
}
