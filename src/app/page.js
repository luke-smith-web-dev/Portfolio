"use client";

import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <div className="mx-5 sm:mx-[30rem]">
        <h1 className="text-3xl font-[500] my-15 sm:mr-30">
          <span className="opacity-50">Building</span> products{" "}
          <span className="opacity-50">and</span> identities{" "}
          <span className="opacity-50">that people love for </span> startups{" "}
          <span className="opacity-50">and</span> brands.
        </h1>

        <a
          href="https://cal.com/blacktaildesign/30min"
          target="_blank"
          rel="noreferrer"
          className="mb-15 no-underline"
        >
          <button className="py-2 pl-2 pr-6 bg-black text-white rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-gray-700 transition duration-200">
            <img
              src="https://creatorspace.imgix.net/users/cm9lqnyse00wsla01h03g4ybz/dmJ3K3zHsLeefwGK-sOGuMX_D_400x400.jpg?w=300&h=300"
              className="w-[40] h-auto rounded-sm"
            ></img>
            Book a Free Intro Call
          </button>
        </a>
        <video
          autoPlay
          loop
          muted
          className="border-none border-gray-100 mt-5 -ml-[3px]"
        >
          <source src="/showreel.mov" type="video/mov" />
          <source src="/showreel.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-20"></div>
      <Marquee autoFill={true} gap={0} speed={50}>
        <img
          src="/testimonial-cesar.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/testimonial-tom.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/testimonial-tadeas.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/testimonial-joschua.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
      </Marquee>
      <div className="mt-8"></div>
    </div>
  );
}
