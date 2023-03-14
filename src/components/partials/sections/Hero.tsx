import {FiChevronDown} from "react-icons/fi"

export default function HeroSection() {
  return (
    <div className="min-h-[50vh] relative my-2">
      <section className="mx-auto mt-60 text-center">
        <h1 className="text-3xl font-bold leading-2 my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          sapiente recusandae eaque, quis ab velit nostrum animi fuga sit atque
          voluptatem, in perferendis inventore cumque?
        </p>
        <div className="mt-6">
          <a href="#" className="py-2.5 px-4 bg-blue-500 text-white">let's Start Working</a>
        </div>
      </section>
      <div className="absolute w-full h-1 bg-gray-200 bottom-0">
          <FiChevronDown className="text-3xl mx-auto cursor-pointer"></FiChevronDown>
      </div>
    </div>
  );
}
