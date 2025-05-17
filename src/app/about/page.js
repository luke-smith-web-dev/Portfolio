"use client";

import Marquee from "react-fast-marquee";
import { Gps, LinkedinLogo, XLogo } from "@phosphor-icons/react";

export default function About() {
  return (
    <div>
      <div className="mx-5 xl:mx-[30rem]">
        <div className="flex justify-between mt-5 flex-col relative">
          <div className="relative">
            <img
              src="https://pbs.twimg.com/profile_banners/1879238413586468865/1746283850/1500x500"
              className="rounded-lg"
            />
            <div className="flex absolute justify-between top-5 right-5 gap-5">
              <a
                href="https://x.com/lukesmithdesign"
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
              src="https://creatorspace.imgix.net/users/cm9lqnyse00wsla01h03g4ybz/dmJ3K3zHsLeefwGK-sOGuMX_D_400x400.jpg?w=300&h=300"
              className="w-[100] h-auto rounded-lg"
            ></img>
          </div>
        </div>

        <div className="flex justify-between mt-15 mb-4">
          <h1 className="text-2xl font-[600] w-[100%]">
            Web/Industrial Designer
          </h1>
          <div className="flex gap-2 items-center w-[100%] justify-end">
            <Gps size={25} />
            <span className="font-[500] text-md">Missoula, MT</span>
          </div>
        </div>
        <p className="text-lg font-[500] mb-10">
          Building products and identities that people love for startups and
          brands. Running <a href="https://x.com/blacktaildesign">Blacktail</a>,
          a design studio based in Missoula, Montana.
        </p>

        <a
          href="https://cal.com/blacktaildesign/30min"
          target="_blank"
          rel="noreferrer"
          className="mb-15 no-underline"
        >
          <button className="py-2 px-4 bg-black text-white rounded-md font-[600] flex gap-4 items-center cursor-pointer hover:bg-gray-700 transition duration-200">
            Book an Intro Call
          </button>
        </a>
      </div>
      <div className="mt-20"></div>
      <Marquee autoFill={true} gap={0} speed={50}>
        <img
          src="/alaska.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/blacktail.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/alogo.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/launch.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/pac2.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/designdevelop.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/nexity.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/portfoliotemplate.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
      </Marquee>
      <Marquee
        autoFill={true}
        gap={0}
        speed={50}
        direction="right"
        className="mt-4"
      >
        <img
          src="/blackform.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/darkmatter.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/bluelight.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/lksmth.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/technovora.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/symbolsource.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
        <img
          src="/pac1.png"
          alt=""
          style={{ width: "auto" }}
          className="rounded-lg mx-2 h-[150px] xl:h-[300px]"
        />
      </Marquee>
      <div className="mt-4"></div>
    </div>
  );
}
