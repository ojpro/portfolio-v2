import TestimonialCard from "../cards/TestimonialCard";

export default function Testimonials() {
    return (
        <>
            <a href="#" id="testimonials"></a>
            <section className="py-28">
                <h2 className="text-2xl text-center my-10">What People Says?</h2>
                {/* <> Cards </> */}
                <div>
                    <ul className="flex flex-nowrap justify-evenly scrollbar-hide h-48">
                        <TestimonialCard></TestimonialCard>
                        <TestimonialCard></TestimonialCard>
                        <TestimonialCard></TestimonialCard>
                        <TestimonialCard></TestimonialCard>
                        <TestimonialCard></TestimonialCard>
                    </ul>
                </div>
            </section>
        </>
    );
}
