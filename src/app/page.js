"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <div className="mx-5 xl:mx-[30rem]">
        <div className="flex justify-between mt-15 mb-5 opacity-50">
          <h4 className="font-[500]">
            Trusted by 20+ brands and agencies. Are you next?
          </h4>
        </div>
        <h1 className="text-3xl font-[500] mb-15 xl:mr-30">
          <span className="opacity-50">Building</span> products{" "}
          <span className="opacity-50">and</span> identities{" "}
          <span className="opacity-50">that people love for </span> startups{" "}
          <span className="opacity-50">and</span> brands.
        </h1>

        <div className="flex justify-start gap-5">
          <a
            href="https://cal.com/blacktaildesign/30min"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <button className="py-2 pl-2 pr-6 bg-black text-white rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-gray-700 transition duration-200">
              <img
                src="https://creatorspace.imgix.net/users/cm9lqnyse00wsla01h03g4ybz/dmJ3K3zHsLeefwGK-sOGuMX_D_400x400.jpg?w=300&h=300"
                className="w-[40px] h-auto rounded-sm"
              ></img>
              Book a Free Intro Call
            </button>
          </a>

          <a href="/work" className="no-underline">
            <button className="pl-6 pr-2 h-full border-[1px] border-gray-200 text-black rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-gray-100 transition duration-200">
              See My Work
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-black text-white rounded-sm">
                <ArrowRight size={20} />
              </div>
            </button>
          </a>
        </div>

        <div className="marquee-container my-10">
          <Marquee autoFill={true} gap={600} speed={35} direction="right">
            <img
              src="/logos/isaiah-brees.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/Blacktail.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/nexus.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/postel.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/pulse-ai.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/underdog-labs.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/flowglanz.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/inquizo.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
          </Marquee>
        </div>

        {/* <video
          autoPlay
          loop
          muted
          className="border-none border-gray-100 mt-5 -ml-[3px]"
        >
          <source src="/showreel.mov" type="video/mov" />
          <source src="/showreel.mp4" type="video/mp4" />
        </video> */}
      </div>
      <div className="mt-20"></div>
      <Marquee autoFill={true} gap={0} speed={50}>
        <img
          src="/cal-ai.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/secondsight.jpg"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/spotline.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/secondsight-2.jpg"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/swiftset.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/inquizo.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/nimbus.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
      </Marquee>
      <div className="mt-8"></div>
      <Marquee autoFill={true} gap={0} speed={50} direction="right">
        <img
          src="/launch.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/pacweb.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/symbolsource.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/blackform.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/alexzhao.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/breesvisibility1.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
        <img
          src="/grain.png"
          alt=""
          style={{ width: "auto", height: "300px" }}
          className="rounded-lg mx-4 border-1 border-gray-200"
        />
      </Marquee>
      <div className="mt-8"></div>
    </div>
  );
}
