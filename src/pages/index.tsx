import BlankLayout from "@/components/layouts/BlankLayout";
import Footer from "@/components/partials/Footer";
import About from "@/components/partials/sections/About";
import Work from "@/components/partials/sections/Work";
import Testimonials from "@/components/partials/sections/Testimonials";
import Contact from "@/components/partials/sections/Contact";
import HeroSection from "@/components/partials/sections/Hero";
import Navbar from "@/components/partials/Navbar";

import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>My Portfolio 💻 - ojpro </title>
            </Head>

            <BlankLayout>
                {/* <> Navbar </> */}
                <Navbar></Navbar>

                {/* <> Header </> */}
                <header>
                    {/* <> Hero Section </> */}
                    <HeroSection></HeroSection>
                </header>


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
