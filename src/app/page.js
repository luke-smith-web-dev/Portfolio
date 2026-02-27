"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <div className="mx-5 xl:mx-[30rem]">
        <div className="flex justify-between mt-15 mb-5 opacity-50">
          <h4 className="font-[500] mono text-sm text-center w-full">
            Currently building{" "}
            <a href="https://indefense.substack.com/">In Defense</a> · Head of
            Design at <a href="https://www.flowglanz.com/">Flowglanz</a>
          </h4>
        </div>
        <h1 className="text-center">
          I design things
          <br />
          that{" "}
          <span className="mono font-[600] text-[5.5rem] italic">ship</span>.
        </h1>
        <h3 className="font-[500] opacity-50 my-5 text-center">
          Product designer for startups that need speed, clarity, and real
          execution.
        </h3>
        <br />

        <div className="flex justify-center gap-5">
          <a
            href="https://cal.com/northpoint/30min"
            target="_blank"
            rel="noreferrer"
            className="no-underline"
          >
            <button className="pl-6 pr-2 h-full bg-[#ff4800] text-white rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-[#e03f00] transition duration-200">
              See My Work
              <div className="flex items-center justify-center w-[40px] h-[40px] text-[#ff4800] bg-white rounded-sm">
                <ArrowRight size={20} />
              </div>
            </button>
          </a>

          <a href="/work" className="no-underline">
            <button className="py-2 pl-2 pr-6 border-[1px] border-gray-200 text-black rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-gray-100 transition duration-200">
              <img
                src="/main-profile.jpg"
                className="w-[40px] h-auto rounded-sm border-1 border-gray-800"
              ></img>
              Book a Free Intro Call
            </button>
          </a>
        </div>

        <br />
        <br />
        <p className="text-sm font-[500] mono opacity-50 text-center">
          Product design shipped with teams at:
        </p>
        <br />
        <div className="marquee-container mb-10">
          <Marquee autoFill={true} gap={600} speed={35} direction="right">
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
              src="/logos/citydetect.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/writingroomlogo.png"
              alt=""
              style={{ width: "auto", height: "30px" }}
              className="mx-5"
            />
            <img
              src="/logos/wswlogo.png"
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
          src="/citydetectwebsite.png"
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
          src="/webshopwealthy.png"
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
