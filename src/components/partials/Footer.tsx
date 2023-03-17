export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 pt-6 pb-2  mt-6">
                {/* <> Links </> */}
                <div className="w-full lg:w-4/6 mx-auto flex flex-row flex-wrap justify-start gap-4">
                    <ul>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Project</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Sitemap</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Report</a>
                        </li>
                    </ul>
                </div>

                {/* <> Right </> */}
                <p className="text-center text-white"> Copy Rights @ 2023 </p>
            </footer>
        </>
    );
}
