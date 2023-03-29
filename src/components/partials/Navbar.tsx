export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-evenly items-center shadow backdrop-blur-lg dark:bg-opacity-50 leading-8 py-3 sticky top-0 left-0 right-0 dark:bg-black/40 z-50">
        <a href="#" className="text-lg font-bold">ojpro.</a>
        <ul className="flex flex-row justify-evenly gap-3 group">
          <li>
            <a href="#about" className="inline-block py-0.5 px-2.5 group-hover:text-gray-400 dark:hover:text-white delay-100 ease-in-out">About</a>
          </li>
          <li>
            <a href="#work" className="inline-block py-0.5 px-2.5 group-hover:text-gray-400 dark:hover:text-white delay-100 ease-in-out">Work</a>
          </li>
          <li>
            <a href="#testimonials" className="inline-block py-0.5 group-hover:text-gray-400 px-2.5 dark:hover:text-white delay-100 ease-in-out">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="inline-block py-0.5 px-2.5 group-hover:text-gray-400 dark:hover:text-white delay-100 ease-in-out">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
