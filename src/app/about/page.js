"use client";

import Marquee from "react-fast-marquee";
import { Gps, LinkedinLogo, XLogo } from "@phosphor-icons/react";

export default function About() {
  return (
    <div>
      <div className="mx-5 xl:mx-[30rem]">
        <div className="flex justify-between mt-5 flex-col relative">
          <div className="relative">
            <img src="banner.png" className="rounded-lg" />
            <div className="flex absolute justify-between top-5 right-5 gap-5">
              <a
                href="https://x.com/thelukesmith_"
                target="_blank"
                rel="noreferrer"
                className="opacity-75 hover:opacity-100 transition duration-200 no-underline text-white"
              >
                <XLogo size={20} />
              </a>

              <a
                href="https://linkedin.com/in/luke0smith0design"
                target="_blank"
                rel="noreferrer"
                className="opacity-75 hover:opacity-100 transition duration-200 no-underline text-white"
              >
                <LinkedinLogo size={20} />
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-1 transform absolute bottom-[-50px] left-[25px] flex items-center justify-center">
            <img
              src="/main-profile.jpg"
              className="w-[100] h-auto rounded-lg"
            ></img>
          </div>
        </div>

        <div className="flex justify-between mt-15 mb-4 align-bottom">
          <h1 className="text-2xl font-[600] w-[100%]">
            Web/Industrial Designer
          </h1>
        </div>
        <p className="text-lg font-[500] mb-10">
          Designing products and experiences that people love for startups and
          brands. Running{" "}
          <a href="https://northpoint.design" target="_blank" rel="noreferrer">
            Northpoint Design
          </a>
          , an industrial design studio based in Missoula, Montana.
        </p>

        <div className="mb-15 flex gap-5">
          <a
            href="https://cal.com/northpoint/30min"
            target="_blank"
            rel="noreferrer"
            className="no-underline w-fit"
          >
            <button className="py-2 px-4 bg-black text-white rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-gray-700 transition duration-200">
              Book an Intro Call
            </button>
          </a>
          <div className="flex gap-2 items-center">
            <Gps size={20} />
            <span className="font-[500] text-sm">Missoula, MT</span>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
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
        <img
          src="/testimonial-isaiah.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
      </Marquee>
      <div className="mt-8"></div>
    </div>
  );
}
