import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import LogoSaaS from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center bg-black text-white py-2 gap-2">
        <p className="text-white/60 text-sm hidden md:block">
          Stream your workflow and boost your productivity
        </p>
        <div className="flex justify-center items-center gap-1">
          <p className="text-sm">Get Started</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image
              src={LogoSaaS}
              alt="Logo SaaS"
              height={40}
              width={40}
              className=""
            />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#">About</a>
              <a href="#">Feature</a>
              <a href="#">Customer</a>
              <a href="#">Help</a>
              <button className="bg-black text-white rounded-lg py-2 px-4 font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
