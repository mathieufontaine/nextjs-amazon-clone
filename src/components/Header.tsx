import Image from "next/image";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      <div className="flex px-6 items-center justify-between bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            alt="amazon logo"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div className="hidden md:flex flex-1 rounded-lg  h-12 mx-4 flex-grow text-black bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className=" h-full w-full px-4 rounded-l-md focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-3 px-6 cursor-pointer" />
        </div>
        <div className="px-4 space-x-2 text-white flex items-center justify-center">
          <div className="link">
            <p>Hello Mathieu</p>
            <p className="font-extrabold ">Account & List</p>
          </div>
          <div className="link font font-extrabold ">
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className="link relative flex items-center space-x-2">
            <span className="absolute -top-2 -right-2 md:right-5 h-5 w-5 text-center rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">0</span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:block">Cart</p>
        </div>
      </div>
      </div>
      <div className="flex items-center bg-amazon_blue-light text-sm space-x-3 pl-6 py-2">
      <p className="link flex items-center"><Bars3Icon className="h-10 p-2 cursor-pointer md:hidden" />
        All</p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link">Today&apos;s Deals</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Amazon Music</p>
      <p className="link hidden xl:inline-flex">Health & Personal Care</p>
      <p className="link hidden 2xl:inline-flex">Amazon Advertising</p>


      </div>
    </header>
  );
}

export default Header;
