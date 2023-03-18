export default function Work() {
  return (
    <>
      <a href="#" id="work"></a>
      <section className="container mx-auto py-28">
        <h2 className="text-2xl text-center">My Work</h2>
        {/* <> Filters </> */}
        <div>
          <ul className="flex flex-row flex-wrap justify-center items-center gap-2">
            <li><a href="#">All</a></li>
            <li><a href="#">Websites</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Scripts</a></li>
          </ul>
        </div>

        {/* <> Projects Card </> */}
        <div>
          <ul className="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
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
