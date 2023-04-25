import Image from "next/image";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header>
      <div className="flex px-4 items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2  flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            alt="amazon logo"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </div>
        <div className="flex-1 ml-4 p-2 flex-grow text-black">
          <input
            type="text"
            className="w-full p-2 h-10 rounded-md focus:outline-none"
          />

        </div>
        <MagnifyingGlassIcon className="h-14 p-4 pl-0 text-white cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
