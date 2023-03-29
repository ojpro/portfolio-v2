import TestimonialCard from "../cards/TestimonialCard";
import AzaherPicture from "@/../public/images/clients/azaher.jpg";
import NotFound from "@/../public/images/clients/404.jpg";

export default function Testimonials() {
    return (
        <>
            <a href="#" id="testimonials"></a>
            <section className="py-28">
                <h2 className="text-5xl font-bold text-center mb-20 mt-10 max-h-fit">What People Says?</h2>
                {/* <> Cards </> */}
                <div>
                    <ul className="p-2 flex flex-row flex-wrap gap-24">
                        
                        <TestimonialCard
                            feedback="Honestly, Oussama is a hardworking, creative, and patient individual. His service is excellent and I highly recommend working with him."
                            name="Azaher" picture={AzaherPicture}></TestimonialCard>

                        <TestimonialCard
                            feedback="I have had the pleasure of working with Brother Oussama and have found him to be highly precise, quick, patient, and capable of meeting expectations. I look forward to continuing our professional relationship in the future."
                            name="Ali Thamer" picture={NotFound}></TestimonialCard>

                        <TestimonialCard
                            feedback="With utmost respect, we feel immense pride in possessing an outstanding and distinguished hero, and all praise is due to Allah for His great success."
                            name="Fahad Ghazi" picture={NotFound}></TestimonialCard>

                    </ul>
                </div>
            </section>
        </>
    );
}
