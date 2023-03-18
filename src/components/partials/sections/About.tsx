export default function About() {
  return (
    <>
      <a href="#" id="about"></a>
      <section className="container mx-auto py-28">
        <h2 className="text-center text-2xl font-bold my-2">Who Am I?</h2>
        <div className="flex flex-row flex-wrap justify-evenly items-center">
          <img src="https://source.unsplash.com/random/200x200/?person" className="rounded-full" alt="My Picture" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ducimus eius nostrum<br/> aspernatur delectus nam, ratione tempora
              dolor.
            </p>
            <div className="flex flex-row flex-nowrap gap-2 justify-start mt-4">
              <a href="#contact" className="py-2.5 px-4 bg-blue-500 text-white">Contact Me</a>
              <a href="#" className="py-2.5 px-4 border border-blue-500 text-blue-500">My Resume</a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 dark:bg-gray-800 h-1 w-full my-2"></div>
    </>
  );
}
