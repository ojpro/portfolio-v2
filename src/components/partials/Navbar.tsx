export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-evenly items-center shadow-sm leading-8 py-3 sticky top-0 left-0 right-0 bg-white/90 dark:bg-gray-800/95 dark:text-gray-200 z-50">
        <a href="#" className="text-lg font-bold">Logo</a>
        <ul className="flex flex-row justify-evenly gap-3">
          <li>
            <a href="#" className="inline-block py-0.5 px-2.5 rounded hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className="inline-block py-0.5 px-2.5 rounded hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">Work</a>
          </li>
          <li>
            <a href="#" className="inline-block py-0.5 px-2.5 rounded hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">Testimonials</a>
          </li>
          <li>
            <a href="#" className="inline-block py-0.5 px-2.5 rounded hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
