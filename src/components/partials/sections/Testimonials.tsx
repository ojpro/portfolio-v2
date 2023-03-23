import TestimonialCard from "../cards/TestimonialCard";

export default function Testimonials() {
    return (
        <>
            <a href="#" id="testimonials"></a>
            <section className="py-28">
                <h2 className="text-5xl font-bold text-center mb-20 mt-10">What People Says?</h2>
                {/* <> Cards </> */}
                <div>
                    <ul className="p-2 flex flex-row flex-wrap gap-24">
                        <TestimonialCard></TestimonialCard>
                        <TestimonialCard></TestimonialCard>
                        <TestimonialCard></TestimonialCard>
                    </ul>
                </div>
            </section>
        </>
    );
}
