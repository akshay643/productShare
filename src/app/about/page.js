import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
          </h1>
          <p class="mb-8 leading-relaxed">
            At <span className="Introtext">BuyItOut</span>, we are passionate
            about delivering valuable information and product recommendations to
            our users. Our mission is to provide a curated selection of products
            and services, making it easier for you to discover and explore items
            that align with your interests and needs.
          </p>
          <div class="flex gap-2 justify-center">
            <a
              href="/ProductsSection"
              class="inline-flex text-white shadow-2xl bg-green-600 border-0 p-3 focus:outline-none hover:bg-green-500 rounded-3xl text-sm"
            >
              View Products
            </a>
            <button class="inline-flex text-black shadow-2xl bg-white border-2 p-3 focus:outline-none hover:bg-black hover:text-white rounded-3xl text-sm">
              Contact Us
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            width={500}
            height={500}
            class="object-cover object-center rounded"
            alt="hero"
            src="/BuyitOut.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
