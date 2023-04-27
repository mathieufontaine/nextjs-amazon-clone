import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import { GetServerSideProps } from "next";
import { Product } from "@/typings";

const inter = Inter({ subsets: ["latin"] });


export default function Home({ products} : {products: Product[]}) {

  console.log(products)
  return (
    <>
      <Header />
      <main
        className={`min-h-screen max-w-screen-2xl mx-auto ${inter.className}`}
      >
        <Banner />
        <ProductFeed products={products} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch("https://fakestoreapi.com/products")
    const products = await data.json();

  return {
    props: {
      products,
    },
  };
}