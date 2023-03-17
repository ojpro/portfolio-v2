export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-evenly border leading-8 py-2 sticky top-0 left-0 right-0">
        <a href="#">Logo</a>
        <ul className="flex flex-row justify-evenly gap-3">
          <li className="py-0.5 px-2">
            <a href="#">About</a>
          </li>
          <li className="py-0.5 px-2">
            <a href="#">Work</a>
          </li>
          <li className="py-0.5 px-2">
            <a href="#">Testimonials</a>
          </li>
          <li className="py-0.5 px-2">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
