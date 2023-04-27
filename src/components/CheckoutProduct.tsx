import { removeFromBasket } from "@/slices/basketSlice";
import { Product } from "@/typings";
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
      className="sm:flex lg:flex-col justify-between lg:block items-center pb-3 space-y-2 border-b border-b-slate-200"
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
          <p className="text-lg text-gray-800">${item.price}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 items-center justify-center lg:w-full">
        <button
          onClick={removeItem}
          className="button text-black w-full sm:w-auto"
        >
          Remove from cart
        </button>
        <button className="button-secondary w-full sm:w-auto">
            Save for later
        </button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
