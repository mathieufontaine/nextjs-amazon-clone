import { Product } from "@/typings";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";


function Product({ product }: { product: Product }) {
  const [hasPrime, setHasPrime] = useState(true)

  return (
    <div className="cursor-pointer p-3 bg-white text-black flex flex-col justify-between">
      
      <p className="text-xs my-2 text-right text-gray-500 italic">{product.category}</p>
      <div className="relative h-32 w-32 mx-auto my-2">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.title}
          className="w-full h-full"
        />
      </div>
      <h4 className="text-lg font-bold">{product.title}</h4>
      <div className="flex mt-2">
        {Array(Math.floor(product.rating.rate))
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs mt-2">{product.description}</p>

      <CurrencyFormat
        value={product.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        className="mt-2 font-bold"
        // renderText={(value: number) => <div>{value}</div>}
      />
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="https://links.papareact.com/fdw"
            alt="prime"
            width={50}
            height={50}
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
