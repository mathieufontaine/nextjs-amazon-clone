import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative block h-100">
      <div className="absolute w-full h-24 bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative h-full w-full ">
          <Image
            width={2000}
            height={800}
            src="https://links.papareact.com/gi1"
            alt="image"
            className="object-contain"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            width={2000}
            height={800}
            src="https://links.papareact.com/6ff"
            alt="image"
            className="object-contain"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            width={2000}
            height={800}
            src="https://links.papareact.com/7ma"
            alt="image"
            className="object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
