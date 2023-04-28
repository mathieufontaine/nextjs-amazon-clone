import { removeFromBasket } from "@/slices/basketSlice";
import { Product } from "@/typings";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";

function CheckoutProduct({ item, key }: { item: Product; key: number }) {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromBasket(item));
  };

  return (
    <div
      key={key}
      className="md:flex justify-between items-center pb-3 space-y-2 border-b border-b-slate-200 px-6"
    >
      <div className="flex space-x-6 ">
        <div className="relative flex-shrink-0 ">
          <Image
            src={item.image}
            width={100}
            height={100}
            className="object-contain"
            alt="product"
          />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <p className="text-xl text-black">{item.title}</p>
          <div className="flex mt-2">
            {Array(Math.floor(item.rating.rate))
              .fill(0)
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="text-lg text-gray-800">${item.price}</p>
          <div className="flex items-center space-x-2 mt-2">
            <Image
              src="https://links.papareact.com/fdw"
              alt="prime"
              width={50}
              height={50}
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 items-center justify-center md:flex md:flex-col lg:w-32">
        <button onClick={removeItem} className="button text-black w-full">
          Remove from cart
        </button>
        <button className="button-secondary w-full">Save for later</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
