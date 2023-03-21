export default function Work() {
  return (
    <>
      <a href="#" id="work"></a>
      <section className="container mx-auto py-28">
        <h2 className="text-2xl text-center my-10">My Work</h2>
        {/* <> Filters </> */}
        <div className="my-4">
          <ul className="flex flex-row flex-wrap justify-center gap-4">
            <li><a href="#" className="py-1.5 px-3 rounded dark:bg-gray-600">All</a></li>
            <li><a href="#" className="py-1.5 px-3 rounded dark:bg-gray-800/30">Websites</a></li>
            <li><a href="#" className="py-1.5 px-3 rounded dark:bg-gray-800/30">Apps</a></li>
            <li><a href="#" className="py-1.5 px-3 rounded dark:bg-gray-800/30">Games</a></li>
            <li><a href="#" className="py-1.5 px-3 rounded dark:bg-gray-800/30">Scripts</a></li>
          </ul>
        </div>

        {/* <> Projects Card </> */}
        <div>
          <ul className="grid-cols-3 p-4 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <li className="col-span-2 row-span-2">
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/random" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/random/?man" alt="" />
            </li>
            <li>
              <img src="https://source.unsplash.com/random/?man" alt="" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
