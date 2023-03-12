import Navbar from "@/components/partials/Navbar";
import Footer from "@/components/partials/Footer";

export default function BasicLayout({ children }: {children:React.ReactNode}) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}
