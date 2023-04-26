import Product from "./Product";

export default function ProductFeed({ products }: any) {
  return (
      <div className="relative z-50 grid grid-flow-row-dense gap-4 md:grid-cols-2 
      md:-mt-52 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {products?.map((product: any) => (
        <Product key={product.id} product={product} />
      ))}
      </div>
  );
}
