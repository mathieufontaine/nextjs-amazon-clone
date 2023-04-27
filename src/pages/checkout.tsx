import CheckoutProduct from "@/components/CheckoutProduct";
import Header from "@/components/Header";
import { selectItems } from "@/slices/basketSlice";
import { Product } from "@/typings";
import Image from "next/image";
import { useSelector } from "react-redux";

function Checkout() {
  const items: Product[] = useSelector(selectItems);
  
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-screen-2xl mx-auto lg:flex">
        <div className="relative w-full lg:w-2/3 h-52 flex justify-center">
          <Image
            src="https://links.papareact.com/ikj"
            width={1000}
            height={450}
            alt="banner"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col p-5 space-y-10 bg-white lg:w-1/3">
          <h1 className="text-3xl text-black border-b pb-4">
            Your Shopping cart
          </h1>
          {items?.length === 0 ? (
            <div className="flex flex-col space-y-10">
              <div className="flex items-center justify-center">
                <Image
                  src="https://links.papareact.com/gi1"
                  width={300}
                  height={300}
                  alt="empty cart"
                />
              </div>
              <h1 className="text-2xl text-black">Your cart is empty</h1>
            </div>
          ) : (
            <div className="flex flex-col space-y-6">
              {items?.map((item, i) => (
                <CheckoutProduct key={i} item={item} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
export default Checkout;
