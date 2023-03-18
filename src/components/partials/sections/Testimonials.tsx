export default function Testimonials() {
    return (
        <>
            <a href="#" id="testimonials"></a>
            <section className="py-28">
                <h2 className="text-2xl text-center font-bold">What People Says?</h2>
                {/* <> Cards </> */}
                <div>
                    <ul className="flex flex-row flex-wrap justify-evenly items-center p-2">
                        {/* <> Card </> */}
                        <li className="bg-gray-100 p-4 m-4 rounded w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shadow">
                            <div>
                                <span>&quot;</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                                <img src="https://source.unsplash.com/random/200x200/?person"
                                     className="w-16 h-16 rounded-full" alt=""/>
                                <div className="flex flex-col">
                                    <h3>Client Name</h3>
                                    <span className="text-xs text-gray-500">Company Name - CTO </span>
                                </div>
                            </div>
                        </li>
                        {/* <> Card </> */}
                        <li className="bg-gray-100 p-4 m-4 rounded w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shadow">
                            <div>
                                <span>&quot;</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                                <img src="https://source.unsplash.com/random/200x200/?person"
                                     className="w-16 h-16 rounded-full" alt=""/>
                                <div className="flex flex-col">
                                    <h3>Client Name</h3>
                                    <span className="text-xs text-gray-500">Company Name - CTO </span>
                                </div>
                            </div>
                        </li>
                        {/* <> Card </> */}
                        <li className="bg-gray-100 p-4 m-4 rounded w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shadow">
                            <div>
                                <span>&quot;</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                                <img src="https://source.unsplash.com/random/200x200/?person"
                                     className="w-16 h-16 rounded-full" alt=""/>
                                <div className="flex flex-col">
                                    <h3>Client Name</h3>
                                    <span className="text-xs text-gray-500">Company Name - CTO </span>
                                </div>
                            </div>
                        </li>
                        {/* <> Card </> */}
                        <li className="bg-gray-100 p-4 m-4 rounded w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 shadow">
                            <div>
                                <span>&quot;</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                                <img src="https://source.unsplash.com/random/200x200/?person"
                                     className="w-16 h-16 rounded-full" alt=""/>
                                <div className="flex flex-col">
                                    <h3>Client Name</h3>
                                    <span className="text-xs text-gray-500">Company Name - CTO </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
