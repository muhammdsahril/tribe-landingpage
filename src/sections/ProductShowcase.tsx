import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <p className="tag-btn">Boost your productivity</p>
          </div>
          <h2 className="text-center text-4xl py-5 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E]">
            Celebrate the joy accomplish with an app designed to track your
            progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <Image src={PyramidImage} alt="Pyramid Image" className="absolute" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
