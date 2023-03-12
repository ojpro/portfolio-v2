import BlankLayout from "@/components/layouts/BlankLayout";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import About from "@/components/partials/sections/About";
import Work from "@/components/partials/sections/Work";
import Testimonials from "@/components/partials/sections/Testimonials";
import Contact from "@/components/partials/sections/Contact";

export default function Home() {
  return (
    <>
      <BlankLayout>
        {/* <> Header </> */}
        <Header></Header>

        {/* <> About Section </> */}
        <About></About>

        {/* <> Work Section </> */}
        <Work></Work>

        {/* <> Testimonials </> */}
        <Testimonials></Testimonials>

        {/* <> Contact </> */}
        <Contact></Contact>

        {/* <> Footer </> */}
        <Footer></Footer>
      </BlankLayout>
    </>
  );
}
