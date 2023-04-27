import Image from "next/image";
import Product from "./Product";

export default function ProductFeed({ products }: { products: Product[] }) {
  return (
    <div
      className="relative z-50 grid grid-flow-row-dense gap-4 md:grid-cols-2 
      md:-mt-52 lg:grid-cols-3 xl:grid-cols-4 mx-auto"
    >
      {products?.slice(0, 3).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div className="relative md:col-span-full ">
        <Image
          src="https://links.papareact.com/dyz"
          width={1020}
          height={250}
          alt="ad banner"
          className="w-full"
        />
      </div>
      <div className="md:col-span-2">
        {products?.slice(3, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products?.slice(5).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
