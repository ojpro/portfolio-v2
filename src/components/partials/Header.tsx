import Navbar from "./Navbar";
import HeroSection from "./sections/Hero";

export default function Header() {
  return (
    <>
      <header>
        {/* <> Navbar </> */}
        <Navbar></Navbar>

        {/* <> Hero Section </> */}
        <HeroSection></HeroSection>
      </header>
    </>
  );
}
