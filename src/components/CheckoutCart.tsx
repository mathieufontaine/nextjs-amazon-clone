import { Product } from "@/typings";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

function CheckoutCart({ items }: { items: Product[] }) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="p-5 mx-4 bg-white">
      <h1 className="text-3xl text-black border-b pb-4">
        Subtotal ({items.length} items):{" "}
        <span className="font-bold">
          ${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </span>
      </h1>
      {items?.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-4 py-4 items-center text-black border-b"
        >
          <p className="col-span-3">{item.title}</p>
          <p className="text-right font-bold">${item.price}</p>
        </div>
      ))}
      <button
        onClick={() => (session ? router.push("/") : signIn())}
        className="button text-black mt-4 w-full"
      >
        {session ? "Proceed to checkout" : "Sign in to checkout"}
      </button>
    </div>
  );
}
export default CheckoutCart;
