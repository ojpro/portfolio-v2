import {FiChevronDown} from "react-icons/fi"

export default function HeroSection() {
  return (
    <section className="min-h-[30vh] relative">
      <div className="mx-auto text-center max-w-3xl py-48">
        <h1 className="text-3xl font-bold leading-2 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          sapiente recusandae eaque, quis ab velit nostrum animi fuga sit atque
          voluptatem, in perferendis inventore cumque?
        </p>
        <div className="mt-6">
          <a href="#contact" className="py-2.5 px-4 bg-blue-500 text-white">let's Start Working</a>
        </div>
      </div>
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-800">
          <FiChevronDown className="text-3xl mx-auto cursor-pointer"></FiChevronDown>
      </div>
    </section>
  );
}
