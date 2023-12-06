import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Your Gateway to Exclusive Deals and Savings!
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Dive into the world of BuyItOut, where exclusive deals and savings
            await. Explore a variety of products through our affiliate links and
            discover incredible discounts on your favorite items.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
              <Image
                src="/instagram.png"
                width={100}
                height={100}
                alt="Instagram"
              />
            </div>
            <div class="flex-grow">
              <a
                href="https://www.instagram.com/buyit_out/"
                class="text-blue-900 text-lg title-font font-medium mb-3 hover:underline animate-bounce "
              >
                BuyItOut
              </a>
              <p class="leading-relaxed text-base first-letter:text-6xl">
                Embark on a journey at BuyItOut, where every product is a unique
                blend of style and innovation. From delectable vegan treats to
                retro-inspired collectibles, our offerings cater to your
                individual taste. Immerse yourself in the essence of creativity,
                with each item telling its own distinctive story. Explore the
                extraordinary and embrace a shopping experience that captures
                the spirit of individuality and discovery.
              </p>
              <a
                href="https://www.instagram.com/buyit_out/"
                class="mt-3 text-indigo-500 inline-flex items-center"
              >
                Visit
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-5 flex-shrink-0">
              <Image
                src="/youtube.png"
                width={100}
                height={100}
                alt="Youtube"
              />
            </div>
            <div class="flex-grow">
              <a
                href="#"
                class="text-blue-900 text-lg title-font font-medium mb-3  hover:underline"
              >
                BuyItOut
              </a>
              <p class="leading-relaxed text-base first-letter:text-6xl">
                Discover a blend of eclectic elements at BuyItOut — from
                artisanal vegan delights to unique collectibles. Immerse
                yourself in a world where each product tells a story. Our
                offerings include a fusion of flavors, innovative finds, and a
                touch of retro charm. Explore the extraordinary and embrace a
                shopping experience that transcends the ordinary.
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                Visit
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <a
          href="/ProductsSection"
          class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded flex justify-center lg:w-1/2 sm:w-2/3 md:w-1/2 lg:text-lg sm:text-xs"
        >
          Visit Products page
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
