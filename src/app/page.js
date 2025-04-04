"use client";

import React, { useRef, useState, useEffect } from "react";
import HTwoAnimateIn from "./HTwoAnimateIn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import Image from "next/image";
import "aos/dist/aos.css";

import artDirection from "../../public/project-images/art-direction.png";
import blackformHero from "../../public/project-images/blackform-hero.png";
import creativeDirection from "../../public/project-images/creative-direction.png";
import emailmarketinghub from "../../public/project-images/emailmarketinghub.webp";
import feectory from "../../public/project-images/feectory.png";
import graphicPoster from "../../public/project-images/graphic-poster.png";
import idLamp from "../../public/project-images/id-lamp.png";
import ignityLabs from "../../public/project-images/ignity-labs.png";
import illustrationAirpods from "../../public/project-images/illustration-airpods.png";
import launchHero from "../../public/project-images/launch-hero.png";
import logoNike from "../../public/project-images/logo-nike.png";
import logo from "../../public/project-images/logo.png";
import lsmdBranding from "../../public/project-images/lsmd-branding.png";
import lsmdBranding2 from "../../public/project-images/lsmd-branding-2.png";
import lsmdBranding3 from "../../public/project-images/lsmd-branding-3.png";
import lsmdBranding4 from "../../public/project-images/lsmd-branding-4.png";
import lsmdBranding5 from "../../public/project-images/lsmd-branding-5.png";
import mobileDevelopment from "../../public/project-images/mobile-development.png";
import motionHero from "../../public/project-images/motion-hero.png";
import noteApp from "../../public/project-images/note-app.png";
import portfolio from "../../public/project-images/portfolio.png";
import productPhone from "../../public/project-images/product-phone.png";
import pulseAiBranding from "../../public/project-images/pulse-ai-branding.png";
import pulseAiBranding2 from "../../public/project-images/pulse-ai-branding-2.png";
import pulseAiLogoBreakdown from "../../public/project-images/pulse-ai-logo-breakdown.png";
import strategy from "../../public/project-images/strategy.png";
import titan from "../../public/project-images/titan.png";
import uiUxHero from "../../public/project-images/ui-ux-hero.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  let container = useRef(null);
  let tlx;
  let tly;
  let maxDistanceX;
  let maxDistanceY;

  const [expertiseImage, setExpertiseImage] = useState(pulseAiBranding2);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1000;

  // Add this function at the top of your file or in a separate utility file
  function scrambleText(element, textContent, duration = 500) {
    const originalText = textContent;
    const intervalTime = 100; // Time between each character change
    const totalSteps = Math.ceil(duration / intervalTime); // Total steps for the animation
    let currentStep = 0;

    const scrambleInterval = setInterval(() => {
      const progress = currentStep / totalSteps;

      if (progress >= 1) {
        clearInterval(scrambleInterval);
        element.textContent = originalText; // Restore the original text at the end
        return;
      }

      const scrambledText = originalText
        .split("")
        .map((char, index) => {
          if (index < Math.floor(progress * originalText.length)) {
            return originalText[index]; // Restore characters progressively
          }
          return String.fromCharCode(33 + Math.random() * 94); // Random ASCII characters
        })
        .join("");

      element.textContent = scrambledText;
      currentStep++;
    }, intervalTime);
  }

  // Attach the effect to all links, h2, and h1 tags
  useEffect(() => {
    const elements = document.querySelectorAll("a:not(.logo)");
    elements.forEach((element) => {
      let originalText = element.textContent;
      element.addEventListener("mouseenter", () =>
        scrambleText(element, originalText)
      );
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", () => scrambleText(element));
      });
    };
  }, []);

  useEffect(() => {
    AOS.init();
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;

    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];

      selfLink.addEventListener("mouseover", function () {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function () {
        cursor.classList.remove("custom-cursor--link");
      });
    }

    maxDistanceX = innerWidth / 10;
    maxDistanceY = innerHeight / 10;
    let tlx;
    let tly;
    let updateX;
    let updateY;

    if (!isMobile) {
      tlx = gsap
        .timeline({ paused: true, ease: "power1.out" })
        .from(".test", { x: `-=${maxDistanceX} / 2`, ease: "none" })
        .to(".test", { x: `+=${maxDistanceX} / 2`, ease: "none" });

      tly = gsap
        .timeline({ paused: true, ease: "power1.out" })
        .from(".test", { y: `-=${maxDistanceY} / 2`, ease: "none" })
        .to(".test", { y: `+=${maxDistanceY} / 2`, ease: "none" });

      // Use gsap.quickTo for smoother updates
      updateX = gsap.quickTo(tlx, "progress", { ease: "power4.out" });
      updateY = gsap.quickTo(tly, "progress", { ease: "power4.out" });
    }
    window.onmousemove = function (e) {
      if (!isMobile) {
        const distanceX = e.pageX / 10;
        const distanceY = e.pageY / 10;

        // Smoothly update the timeline progress
        updateX(distanceX / maxDistanceX);
        updateY(distanceY / maxDistanceY);

        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
          // cursor.style.opacity = 1;
          gsap.to(cursor, { duration: 0.3, opacity: 1 });
          initCursor = true;
        }

        gsap.to(cursor, {
          duration: 0.3,
          top: mouseY + "px",
          left: mouseX + "px",
        });
      }
    };

    window.onmouseout = function (e) {
      gsap.to(cursor, { duration: 0.3, opacity: 0 });

      initCursor = false;
    };
  }, []);

  useEffect(() => {
    const rows = document.querySelectorAll(".image-row");

    rows.forEach((row, index) => {
      const direction = index % 2 === 0 ? "+=200" : "-=200"; // Alternate directions

      gsap.to(row, {
        x: direction,
        scrollTrigger: {
          trigger: row,
          start: "top bottom", // Start when the row enters the viewport
          end: "bottom top", // End when the row leaves the viewport
          scrub: true, // Smooth scrolling effect
        },
      });
    });
  }, []);

  return (
    <div ref={(el) => (container = el)} style={{ overflowX: "hidden" }}>
      <nav
        className="fixed top-0 left-0 right-0 flex sm:flex-row flex-col gap-5 items-center justify-between p-5 sm:px-[200px] bg-white px-[20px] border-b-[1px] border-black/10"
        data-aos="fade"
        data-aos-duration="2000"
        style={{ zIndex: 100 }}
      >
        <a href="#top" className="black-link logo">
          <svg
            width="100"
            height="auto"
            viewBox="0 0 1440 278"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M53.9923 14.8182V274.2H0V14.8182H53.9923Z" fill="black" />
            <path
              d="M186.394 191.37V79.6638H240.386V274.2H188.549V238.865H186.521C182.127 250.263 174.818 259.424 164.594 266.348C154.455 273.272 142.076 276.734 127.459 276.734C114.446 276.734 102.997 273.778 93.1114 267.868C83.2255 261.957 75.4942 253.556 69.9175 242.664C64.4253 231.772 61.637 218.727 61.5525 203.529V79.6638H115.545V193.903C115.629 205.386 118.713 214.463 124.797 221.133C130.881 227.804 139.034 231.139 149.258 231.139C155.764 231.139 161.848 229.661 167.509 226.706C173.17 223.667 177.733 219.192 181.197 213.281C184.746 207.371 186.478 200.067 186.394 191.37Z"
              fill="black"
            />
            <path
              d="M296.806 218.221L296.932 153.502H304.79L367.148 79.6638H429.125L345.348 177.439H332.547L296.806 218.221ZM247.883 274.2V14.8182H301.875V274.2H247.883ZM369.556 274.2L312.268 189.471L348.263 151.349L432.8 274.2H369.556Z"
              fill="black"
            />
            <path
              d="M500.627 278C480.601 278 463.364 273.947 448.916 265.841C434.552 257.651 423.483 246.084 415.709 231.139C407.936 216.11 404.049 198.336 404.049 177.819C404.049 157.808 407.936 140.245 415.709 125.132C423.483 110.018 434.425 98.2393 448.536 89.7959C462.731 81.3525 479.376 77.1308 498.472 77.1308C511.315 77.1308 523.271 79.1994 534.34 83.3367C545.494 87.3895 555.211 93.511 563.491 101.701C571.856 109.891 578.362 120.192 583.009 132.604C587.657 144.932 589.98 159.37 589.98 175.919V190.737H425.595V157.301H539.156C539.156 149.533 537.467 142.652 534.087 136.657C530.707 130.662 526.017 125.976 520.018 122.599C514.104 119.137 507.217 117.406 499.359 117.406C491.163 117.406 483.897 119.306 477.56 123.105C471.307 126.82 466.406 131.844 462.857 138.177C459.309 144.425 457.492 151.391 457.408 159.074V190.864C457.408 200.489 459.182 208.806 462.731 215.814C466.364 222.822 471.476 228.226 478.067 232.026C484.657 235.825 492.473 237.725 501.514 237.725C507.513 237.725 513.005 236.881 517.99 235.192C522.976 233.503 527.243 230.97 530.791 227.593C534.34 224.215 537.044 220.078 538.903 215.181L588.84 218.474C586.305 230.464 581.108 240.933 573.25 249.883C565.477 258.749 555.422 265.673 543.085 270.654C530.834 275.551 516.681 278 500.627 278Z"
              fill="black"
            />
            <path
              d="M798.415 135.137L748.985 138.177C748.14 133.955 746.323 130.156 743.535 126.778C740.747 123.316 737.071 120.572 732.509 118.546C728.03 116.435 722.665 115.38 716.412 115.38C708.047 115.38 700.992 117.153 695.246 120.699C689.501 124.161 686.628 128.805 686.628 134.631C686.628 139.274 688.487 143.201 692.204 146.409C695.922 149.618 702.302 152.193 711.343 154.135L746.577 161.227C765.504 165.111 779.615 171.359 788.909 179.972C798.203 188.584 802.851 199.898 802.851 213.914C802.851 226.664 799.091 237.852 791.571 247.477C784.135 257.103 773.911 264.617 760.899 270.021C747.971 275.34 733.058 278 716.159 278C690.388 278 669.855 272.638 654.562 261.915C639.353 251.108 630.439 236.416 627.819 217.841L680.924 215.054C682.53 222.907 686.417 228.901 692.585 233.039C698.753 237.092 706.653 239.118 716.285 239.118C725.749 239.118 733.353 237.303 739.099 233.672C744.929 229.957 747.887 225.186 747.971 219.36C747.887 214.463 745.816 210.453 741.761 207.328C737.705 204.12 731.452 201.671 723.003 199.983L689.289 193.27C670.278 189.471 656.125 182.885 646.831 173.513C637.621 164.14 633.016 152.193 633.016 137.67C633.016 125.174 636.395 114.409 643.155 105.374C649.999 96.3396 659.589 89.3737 671.926 84.4765C684.346 79.5794 698.88 77.1308 715.525 77.1308C740.113 77.1308 759.462 82.3235 773.573 92.7089C787.768 103.094 796.049 117.237 798.415 135.137Z"
              fill="black"
            />
            <path
              d="M801.159 274.2V79.6638H852.616V113.986H854.897C858.953 102.588 865.713 93.5955 875.176 87.0096C884.64 80.4237 895.962 77.1308 909.143 77.1308C922.494 77.1308 933.858 80.4659 943.237 87.1362C952.616 93.7221 958.869 102.672 961.995 113.986H964.023C967.994 102.841 975.176 93.9332 985.569 87.2629C996.046 80.5081 1008.42 77.1308 1022.7 77.1308C1040.87 77.1308 1055.62 82.9145 1066.94 94.482C1078.34 105.965 1084.05 122.261 1084.05 143.369V274.2H1030.18V154.008C1030.18 143.201 1027.31 135.095 1021.56 129.691C1015.82 124.287 1008.64 121.585 1000.02 121.585C990.216 121.585 982.569 124.71 977.077 130.958C971.585 137.121 968.839 145.269 968.839 155.401V274.2H916.494V152.868C916.494 143.327 913.748 135.728 908.256 130.071C902.848 124.414 895.709 121.585 886.837 121.585C880.837 121.585 875.43 123.105 870.614 126.145C865.882 129.1 862.122 133.28 859.333 138.683C856.545 144.003 855.151 150.251 855.151 157.428V274.2H801.159Z"
              fill="black"
            />
            <path
              d="M1091.01 274.2V79.6638H1145V274.2H1091.01ZM1118.13 54.5868C1110.1 54.5868 1103.22 51.9271 1097.47 46.6077C1091.81 41.204 1088.98 34.7447 1088.98 27.2301C1088.98 19.7998 1091.81 13.4251 1097.47 8.10571C1103.22 2.7019 1110.1 0 1118.13 0C1126.16 0 1133 2.7019 1138.66 8.10571C1144.41 13.4251 1147.28 19.7998 1147.28 27.2301C1147.28 34.7447 1144.41 41.204 1138.66 46.6077C1133 51.9271 1126.16 54.5868 1118.13 54.5868Z"
              fill="black"
            />
            <path
              d="M1256.11 79.6638V120.192H1138.87V79.6638H1256.11ZM1165.49 33.056H1219.48V214.421C1219.48 219.403 1220.24 223.287 1221.76 226.073C1223.28 228.775 1225.39 230.675 1228.1 231.772C1230.89 232.87 1234.1 233.419 1237.73 233.419C1240.26 233.419 1242.8 233.208 1245.33 232.785C1247.87 232.279 1249.81 231.899 1251.16 231.646L1259.66 271.794C1256.95 272.638 1253.15 273.609 1248.25 274.707C1243.35 275.889 1237.39 276.607 1230.38 276.86C1217.37 277.367 1205.96 275.636 1196.16 271.667C1186.44 267.699 1178.88 261.535 1173.47 253.176C1168.06 244.817 1165.4 234.263 1165.49 221.513V33.056Z"
              fill="black"
            />
            <path
              d="M1313.76 161.734V274.2H1259.77V14.8182H1312.24V113.986H1314.52C1318.92 102.503 1326.01 93.511 1335.82 87.0096C1345.62 80.4237 1357.91 77.1308 1372.7 77.1308C1386.22 77.1308 1398 80.086 1408.06 85.9964C1418.2 91.8223 1426.06 100.224 1431.63 111.2C1437.29 122.092 1440.08 135.137 1440 150.335V274.2H1386.01V159.961C1386.09 147.971 1383.05 138.641 1376.88 131.971C1370.8 125.301 1362.26 121.965 1351.28 121.965C1343.93 121.965 1337.42 123.527 1331.76 126.651C1326.18 129.776 1321.79 134.335 1318.58 140.33C1315.45 146.24 1313.85 153.375 1313.76 161.734Z"
              fill="black"
            />
          </svg>
        </a>
        <div className="flex gap-10">
          <a href="#proj">projects</a>
          <a href="#about">about</a>
          <a href="#connect">contact</a>
        </div>
      </nav>

      <div className="flex flex-col sm:h-lvh h-[100vh] justify-between">
        <div className="flex justify-between w-full sm:px-[200px] px-[20px] pt-30">
          <div className="hidden sm:flex flex-col justify-end">
            <h2 className="blur-xl-hover">industrial design</h2>
            <h2 className="blur-xl-hover">ui/ux design</h2>
            <h2 className="blur-xl-hover">graphic design</h2>
          </div>
          <svg
            height="40vh"
            viewBox="0 0 618 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="test sm:m-0 mt-10 mx-auto"
          >
            <g opacity="0.05">
              <path
                d="M118.006 184C155.002 77.9675 229.161 2 346.502 2C228.868 2 115.499 67 76.9994 184H118.006Z"
                fill="black"
              />
              <path
                d="M346.502 548C229.161 548 155.002 472.033 118.006 366H76.9994C115.499 483 228.868 548 346.502 548Z"
                fill="black"
              />
              <path
                d="M142.999 275C340.997 275 340.997 275 340.997 80C340.997 275 340.997 275 538.996 275C340.997 275 340.997 275 340.997 470C340.997 275 340.997 275 142.999 275Z"
                fill="black"
              />
              <path
                d="M346.502 548C495.342 548 616 425.774 616 275C616 124.226 495.342 2 346.502 2M346.502 548C229.161 548 155.002 472.032 118.006 366H76.9994C115.499 483 228.868 548 346.502 548ZM346.502 2C229.161 2 155.002 77.9675 118.006 184H76.9994C115.499 67 228.868 2 346.502 2ZM0 275H142.999M142.999 275C340.997 275 340.997 275 340.997 80C340.997 275 340.997 275 538.996 275C340.997 275 340.997 275 340.997 470C340.997 275 340.997 275 142.999 275Z"
                stroke="black"
                strokeWidth="4"
                strokeMiterlimit="16"
              />
            </g>
          </svg>
        </div>

        <div className="flex flex-col justify-end sm:h-lvh">
          <svg
            width="100%"
            viewBox="0 0 1440 278"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M53.9923 14.8182V274.2H0V14.8182H53.9923Z" fill="black" />
            <path
              d="M186.394 191.37V79.6638H240.386V274.2H188.549V238.865H186.521C182.127 250.263 174.818 259.424 164.594 266.348C154.455 273.272 142.076 276.734 127.459 276.734C114.446 276.734 102.997 273.778 93.1114 267.868C83.2255 261.957 75.4942 253.556 69.9175 242.664C64.4253 231.772 61.637 218.727 61.5525 203.529V79.6638H115.545V193.903C115.629 205.386 118.713 214.463 124.797 221.133C130.881 227.804 139.034 231.139 149.258 231.139C155.764 231.139 161.848 229.661 167.509 226.706C173.17 223.667 177.733 219.192 181.197 213.281C184.746 207.371 186.478 200.067 186.394 191.37Z"
              fill="black"
            />
            <path
              d="M296.806 218.221L296.932 153.502H304.79L367.148 79.6638H429.125L345.348 177.439H332.547L296.806 218.221ZM247.883 274.2V14.8182H301.875V274.2H247.883ZM369.556 274.2L312.268 189.471L348.263 151.349L432.8 274.2H369.556Z"
              fill="black"
            />
            <path
              d="M500.627 278C480.601 278 463.364 273.947 448.916 265.841C434.552 257.651 423.483 246.084 415.709 231.139C407.936 216.11 404.049 198.336 404.049 177.819C404.049 157.808 407.936 140.245 415.709 125.132C423.483 110.018 434.425 98.2393 448.536 89.7959C462.731 81.3525 479.376 77.1308 498.472 77.1308C511.315 77.1308 523.271 79.1994 534.34 83.3367C545.494 87.3895 555.211 93.511 563.491 101.701C571.856 109.891 578.362 120.192 583.009 132.604C587.657 144.932 589.98 159.37 589.98 175.919V190.737H425.595V157.301H539.156C539.156 149.533 537.467 142.652 534.087 136.657C530.707 130.662 526.017 125.976 520.018 122.599C514.104 119.137 507.217 117.406 499.359 117.406C491.163 117.406 483.897 119.306 477.56 123.105C471.307 126.82 466.406 131.844 462.857 138.177C459.309 144.425 457.492 151.391 457.408 159.074V190.864C457.408 200.489 459.182 208.806 462.731 215.814C466.364 222.822 471.476 228.226 478.067 232.026C484.657 235.825 492.473 237.725 501.514 237.725C507.513 237.725 513.005 236.881 517.99 235.192C522.976 233.503 527.243 230.97 530.791 227.593C534.34 224.215 537.044 220.078 538.903 215.181L588.84 218.474C586.305 230.464 581.108 240.933 573.25 249.883C565.477 258.749 555.422 265.673 543.085 270.654C530.834 275.551 516.681 278 500.627 278Z"
              fill="black"
            />
            <path
              d="M798.415 135.137L748.985 138.177C748.14 133.955 746.323 130.156 743.535 126.778C740.747 123.316 737.071 120.572 732.509 118.546C728.03 116.435 722.665 115.38 716.412 115.38C708.047 115.38 700.992 117.153 695.246 120.699C689.501 124.161 686.628 128.805 686.628 134.631C686.628 139.274 688.487 143.201 692.204 146.409C695.922 149.618 702.302 152.193 711.343 154.135L746.577 161.227C765.504 165.111 779.615 171.359 788.909 179.972C798.203 188.584 802.851 199.898 802.851 213.914C802.851 226.664 799.091 237.852 791.571 247.477C784.135 257.103 773.911 264.617 760.899 270.021C747.971 275.34 733.058 278 716.159 278C690.388 278 669.855 272.638 654.562 261.915C639.353 251.108 630.439 236.416 627.819 217.841L680.924 215.054C682.53 222.907 686.417 228.901 692.585 233.039C698.753 237.092 706.653 239.118 716.285 239.118C725.749 239.118 733.353 237.303 739.099 233.672C744.929 229.957 747.887 225.186 747.971 219.36C747.887 214.463 745.816 210.453 741.761 207.328C737.705 204.12 731.452 201.671 723.003 199.983L689.289 193.27C670.278 189.471 656.125 182.885 646.831 173.513C637.621 164.14 633.016 152.193 633.016 137.67C633.016 125.174 636.395 114.409 643.155 105.374C649.999 96.3396 659.589 89.3737 671.926 84.4765C684.346 79.5794 698.88 77.1308 715.525 77.1308C740.113 77.1308 759.462 82.3235 773.573 92.7089C787.768 103.094 796.049 117.237 798.415 135.137Z"
              fill="black"
            />
            <path
              d="M801.159 274.2V79.6638H852.616V113.986H854.897C858.953 102.588 865.713 93.5955 875.176 87.0096C884.64 80.4237 895.962 77.1308 909.143 77.1308C922.494 77.1308 933.858 80.4659 943.237 87.1362C952.616 93.7221 958.869 102.672 961.995 113.986H964.023C967.994 102.841 975.176 93.9332 985.569 87.2629C996.046 80.5081 1008.42 77.1308 1022.7 77.1308C1040.87 77.1308 1055.62 82.9145 1066.94 94.482C1078.34 105.965 1084.05 122.261 1084.05 143.369V274.2H1030.18V154.008C1030.18 143.201 1027.31 135.095 1021.56 129.691C1015.82 124.287 1008.64 121.585 1000.02 121.585C990.216 121.585 982.569 124.71 977.077 130.958C971.585 137.121 968.839 145.269 968.839 155.401V274.2H916.494V152.868C916.494 143.327 913.748 135.728 908.256 130.071C902.848 124.414 895.709 121.585 886.837 121.585C880.837 121.585 875.43 123.105 870.614 126.145C865.882 129.1 862.122 133.28 859.333 138.683C856.545 144.003 855.151 150.251 855.151 157.428V274.2H801.159Z"
              fill="black"
            />
            <path
              d="M1091.01 274.2V79.6638H1145V274.2H1091.01ZM1118.13 54.5868C1110.1 54.5868 1103.22 51.9271 1097.47 46.6077C1091.81 41.204 1088.98 34.7447 1088.98 27.2301C1088.98 19.7998 1091.81 13.4251 1097.47 8.10571C1103.22 2.7019 1110.1 0 1118.13 0C1126.16 0 1133 2.7019 1138.66 8.10571C1144.41 13.4251 1147.28 19.7998 1147.28 27.2301C1147.28 34.7447 1144.41 41.204 1138.66 46.6077C1133 51.9271 1126.16 54.5868 1118.13 54.5868Z"
              fill="black"
            />
            <path
              d="M1256.11 79.6638V120.192H1138.87V79.6638H1256.11ZM1165.49 33.056H1219.48V214.421C1219.48 219.403 1220.24 223.287 1221.76 226.073C1223.28 228.775 1225.39 230.675 1228.1 231.772C1230.89 232.87 1234.1 233.419 1237.73 233.419C1240.26 233.419 1242.8 233.208 1245.33 232.785C1247.87 232.279 1249.81 231.899 1251.16 231.646L1259.66 271.794C1256.95 272.638 1253.15 273.609 1248.25 274.707C1243.35 275.889 1237.39 276.607 1230.38 276.86C1217.37 277.367 1205.96 275.636 1196.16 271.667C1186.44 267.699 1178.88 261.535 1173.47 253.176C1168.06 244.817 1165.4 234.263 1165.49 221.513V33.056Z"
              fill="black"
            />
            <path
              d="M1313.76 161.734V274.2H1259.77V14.8182H1312.24V113.986H1314.52C1318.92 102.503 1326.01 93.511 1335.82 87.0096C1345.62 80.4237 1357.91 77.1308 1372.7 77.1308C1386.22 77.1308 1398 80.086 1408.06 85.9964C1418.2 91.8223 1426.06 100.224 1431.63 111.2C1437.29 122.092 1440.08 135.137 1440 150.335V274.2H1386.01V159.961C1386.09 147.971 1383.05 138.641 1376.88 131.971C1370.8 125.301 1362.26 121.965 1351.28 121.965C1343.93 121.965 1337.42 123.527 1331.76 126.651C1326.18 129.776 1321.79 134.335 1318.58 140.33C1315.45 146.24 1313.85 153.375 1313.76 161.734Z"
              fill="black"
            />
          </svg>
          <div className="flex justify-between items-end sm:flex-row flex-col">
            <div className="sm:pl-[50px] pl-0">
              <h2 className="sm:block hidden blur-hover">
                Based in Missoula, MT
              </h2>
            </div>
            <h1 className="sm:mt-0 mt-5">Multidisciplinary Designer</h1>
          </div>
          <br />
        </div>
      </div>

      <div
        className="sm:px-[200px] px-[50px] py-40 flex justify-between flex-col sm:flex-row"
        data-aos="fade"
        data-aos-duration="1500"
      >
        <div className="w-full flex flex-col justify-between mb-10">
          <div className="mb-10">
            <span className="opacity-50 text-sm">what i do</span>
            <HTwoAnimateIn>expertise</HTwoAnimateIn>
          </div>
          <Image
            src={expertiseImage}
            width="0"
            height="0"
            sizes="100%"
            style={{
              background: "lightgray",
              objectFit: "cover",
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              border: "1px solid #ddd",
            }}
            placeholder="blur"
          />
        </div>
        <div className="w-full flex flex-col justify-between items-end">
          <h3>design</h3>
          <span>industrial design</span>
          <span>ui/ux design</span>
          <span>product design</span>
          <span>graphic design</span>
          <span>motion design</span>
          <span>logo design</span>

          <br />
          <br />
          <br />

          <h3>technology</h3>
          <span>web development</span>
          <span>mobile development</span>

          <br />
          <br />
          <br />

          <h3>art</h3>
          <span>stategy</span>
          <span>art direction</span>
          <span>illustration</span>
          <span>creative direction</span>
        </div>
      </div>

      <div
        className="sm:px-[200px] px-[50px] py-40"
        data-aos="fade"
        data-aos-duration="1500"
        id="proj"
      >
        <span className="opacity-50 text-sm">what i've done</span>
        <HTwoAnimateIn>work</HTwoAnimateIn>
        <br />
        <br />

        <div className="flex flex-col gap-5">
          <div className="hover:-translate-y-2 transition">
            <Image
              src={portfolio}
              style={{
                background: "lightgray",
                objectFit: "cover",
                width: "100%",
                marginBottom: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
              data-aos="fade"
              data-aos-duration="1500"
              className="sm:h-[620px] h-[250px]"
              placeholder="blur"
            ></Image>

            <div className="flex justify-between">
              <div>
                <h3>Luke Smith Design • Portfolio '25</h3>
              </div>
              <span className="sm:block hidden">
                creative direction, web design, web development
              </span>
            </div>
          </div>

          <div className="flex gap-5 sm:flex-row flex-col">
            <div className="w-full hover:-translate-y-2 transition">
              <Image
                src={ignityLabs}
                style={{
                  background: "lightgray",
                  objectFit: "cover",
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
                data-aos="fade"
                data-aos-duration="1500"
                className="sm:h-[50vh] h-[250px]"
                placeholder="blur"
              ></Image>

              <div className="flex justify-between">
                <div>
                  <h3>Ignty Labs</h3>
                </div>
                <span className="sm:block hidden">web design</span>
              </div>
            </div>
            <div className="w-full hover:-translate-y-2 transition">
              <Image
                src={feectory}
                style={{
                  background: "lightgray",
                  objectFit: "cover",
                  width: "100%",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
                data-aos="fade"
                data-aos-duration="1500"
                className="sm:h-[50vh] h-[250px]"
                placeholder="blur"
              ></Image>

              <div className="flex justify-between">
                <div>
                  <h3>Feectory</h3>
                </div>
                <span className="sm:block hidden">
                  creative direction, logo design, graphic design
                </span>
              </div>
            </div>
          </div>

          <div className="w-full hover:-translate-y-2 transition">
            <Image
              src={emailmarketinghub}
              style={{
                background: "lightgray",
                objectFit: "cover",
                width: "100%",
                marginBottom: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
              data-aos="fade"
              data-aos-duration="1500"
              className="sm:h-[650px] h-[250px]"
              placeholder="blur"
            ></Image>

            <div className="flex justify-between">
              <div>
                <h3>The Email Marketing Hub</h3>
              </div>
              <span className="sm:block hidden">
                creative direction, web design
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scrolling-images-section pt-40"
        data-aos="fade"
        data-aos-duration="1500"
      >
        <div className="image-row row-1">
          <Image src={portfolio} alt="Image 1" placeholder="blur" />
          <Image src={creativeDirection} alt="Image 3" placeholder="blur" />
          <Image src={lsmdBranding2} alt="Image 2" placeholder="blur" />
          <Image src={emailmarketinghub} alt="Image 1" placeholder="blur" />
          <Image src={lsmdBranding5} alt="Image 1" placeholder="blur" />
          <Image src={feectory} alt="Image 2" placeholder="blur" />
          <Image src={graphicPoster} alt="Image 3" placeholder="blur" />
          <Image src={ignityLabs} alt="Image 2" placeholder="blur" />
          <Image src={illustrationAirpods} alt="Image 3" placeholder="blur" />
        </div>
        <div className="image-row row-2">
          <Image src={logoNike} alt="Image 1" placeholder="blur" />
          <Image src={lsmdBranding4} alt="Image 2" placeholder="blur" />
          <Image src={motionHero} alt="Image 3" placeholder="blur" />
          <Image src={productPhone} alt="Image 1" placeholder="blur" />
          <Image src={strategy} alt="Image 2" placeholder="blur" />
          <Image src={uiUxHero} alt="Image 3" placeholder="blur" />
          <Image src={blackformHero} alt="Image 1" placeholder="blur" />
          <Image src={pulseAiBranding} alt="Image 2" placeholder="blur" />
          <Image src={logo} alt="Image 3" placeholder="blur" />
        </div>
        <div className="image-row row-3">
          <Image src={lsmdBranding} alt="Image 1" placeholder="blur" />
          <Image src={idLamp} alt="Image 2" placeholder="blur" />
          <Image src={pulseAiBranding2} alt="Image 3" placeholder="blur" />
          <Image src={artDirection} alt="Image 3" placeholder="blur" />
          <Image src={mobileDevelopment} alt="Image 1" placeholder="blur" />
          <Image src={noteApp} alt="Image 2" placeholder="blur" />
          <Image src={lsmdBranding5} alt="Image 1" placeholder="blur" />
          <Image src={launchHero} alt="Image 2" placeholder="blur" />
          <Image src={titan} alt="Image 3" placeholder="blur" />
        </div>
      </div>

      <div
        className="sm:px-[200px] px-[50px] py-40"
        data-aos="fade"
        data-aos-duration="1500"
        id="about"
      >
        <span className="opacity-50 text-sm">who i am</span>
        <HTwoAnimateIn>about me</HTwoAnimateIn>
        <br />
        <br />

        <p className="sm:text-3xl text-xl">
          I blend hands-on craftsmanship with strategic thinking across
          industrial, graphic, and web design. Drawing from experience building
          startups and collaborating with multiple brands, I bring
          first-principles thinking to every project. My approach balances
          visual impact with practical functionality, creating intuitive
          solutions that connect with users and drive results.
        </p>
      </div>

      <div
        className="sm:px-[200px] px-[50px] pt-40 pb-10"
        data-aos="fade"
        data-aos-duration="1500"
        id="testimonials"
      >
        <span className="opacity-50 text-sm">what they say</span>
        <HTwoAnimateIn>testimonials</HTwoAnimateIn>
      </div>
      <div className="scrolls mb-40 sm:pl-[170px] pl-[0px]">
        <div className="p-5 border border-gray-200 rounded-sm scrolls-div w-[420px]">
          <div className="flex justify-between flex-col h-full">
            <div>
              <Image
                src="/testimonials/tom.avif"
                width={60}
                height={60}
                className="rounded-full"
              ></Image>
              <br />
              <p style={{ textWrap: "wrap" }} className="sm:text-2xl">
                Luke did a phenomenal job with our logo project. He took the
                time to understand the brand, the product and went deeper asking
                questions about our offering. He worked with us diligently,
                considering factors such as our existing colour scheme and had
                fantastic communication throughout with extremely quick response
                times. He came up with four designs for our approval and we set
                on two standout winners. Thanks Luke!
              </p>
            </div>
            <br />
            <br />
            <div>
              <h3>Tom Jackson</h3>
              <span className="opacity-50 text-sm">@tom_jackson_x</span>
            </div>
          </div>
        </div>
        <div className="p-5 border border-gray-200 rounded-sm scrolls-div w-[420px]">
          <div className="flex justify-between flex-col h-full">
            <div>
              <Image
                src="/testimonials/cesar.avif"
                width={60}
                height={60}
                className="rounded-full"
              ></Image>
              <br />
              <p style={{ textWrap: "wrap" }} className="sm:text-2xl">
                Luke did an amazing job creating a logo for my SaaS! He provided
                multiple high-quality options, was super fast and communicative
                throughout the process, and even went the extra mile by showing
                additional variants with gradients, liquid animations, and more.
                Highly recommend working with him!
              </p>
            </div>
            <br />
            <br />
            <div>
              <h3>César Álvarez</h3>
              <span className="opacity-50 text-sm">@xcesaralvarez</span>
            </div>
          </div>
        </div>
        <div className="p-5 border border-gray-200 rounded-sm scrolls-div w-[420px]">
          <div className="flex justify-between flex-col h-full">
            <div>
              <Image
                src="/testimonials/tadeas.avif"
                width={60}
                height={60}
                className="rounded-full"
              ></Image>
              <br />
              <p style={{ textWrap: "wrap" }} className="sm:text-2xl">
                Luke Smith is an incredible designer with a sharp eye for detail
                and creativity. He takes ideas and turns them into something
                visually stunning. Every project we've worked on has been
                top-notch. Highly recommend checking out his work!
              </p>
            </div>
            <div>
              <h3>Tadeas</h3>
              <span className="opacity-50 text-sm">@creatortadeas</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sm:h-lvh h-[80vh] w-full bg-[url(/contact-bg.png)] bg-center flex flex-col items-center justify-center gap-2 text-white"
        data-aos="fade"
        data-aos-duration="1500"
        id="connect"
      >
        <span className="opacity-50 text-sm">let's connect</span>
        <HTwoAnimateIn>get in touch</HTwoAnimateIn>

        <br />
        <br />
        <br />
        <div className="flex justify-between w-full sm:px-[200px] px-[50px] sm:flex-row flex-col">
          <div className="flex flex-col sm:mb-0 mb-10">
            <span>contact</span>
            <a
              href="mailto:2lukesmith@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              2lukesmith@gmail.com
            </a>
          </div>
          <div className="max-w-[300px] flex flex-col text-right">
            <span>
              Available for freelance projects, short-term contracts, and full
              time work.
            </span>
          </div>
        </div>
      </div>

      <div className="sm:py-[200px] pt-[200px] pb-[100px] sm:flex-row flex-col px-20 flex justify-between">
        <div className="sm:mb-0 mb-10">
          <h1>Luke Smith</h1>
          <br />
          <p>Multidisciplinary designer based in Missoula, MT</p>
        </div>
        <div className="sm:mb-0 mb-10">
          <span>on-site</span>
          <br />
          <a href="#top">home</a>
          <br />
          <a href="#proj">projects</a>
          <br />
          <a href="#about">about</a>
          <br />
          <a href="#testimonials">testimonials</a>
          <br />
          <a href="#connect">contact</a>
        </div>
        <div className="sm:mb-0 mb-10">
          <span>socials</span>
          <br />
          <a
            href="https://x.com/lukesmithdesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            X (Twitter)
          </a>
          <br />
          <a
            href="https://threads.net/@luke_smith_design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Threads
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/luke-smith-00b795337/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="sm:mb-0 mb-10">
          <span>contact</span>
          <br />

          <a
            href="mailto:2lukesmith@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            2lukesmith@gmail.com
          </a>
        </div>
      </div>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1440 278"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "" }}
      >
        <defs>
          <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF" />
            <stop offset="100%" stopColor="#E3E3E3" />
          </linearGradient>
        </defs>
        <g fill="#E3E3E3">
          <path d="M53.9923 14.8182V274.2H0V14.8182H53.9923Z" />
          <path d="M186.394 191.37V79.6638H240.386V274.2H188.549V238.865H186.521C182.127 250.263 174.818 259.424 164.594 266.348C154.455 273.272 142.076 276.734 127.459 276.734C114.446 276.734 102.997 273.778 93.1114 267.868C83.2255 261.957 75.4942 253.556 69.9175 242.664C64.4253 231.772 61.637 218.727 61.5525 203.529V79.6638H115.545V193.903C115.629 205.386 118.713 214.463 124.797 221.133C130.881 227.804 139.034 231.139 149.258 231.139C155.764 231.139 161.848 229.661 167.509 226.706C173.17 223.667 177.733 219.192 181.197 213.281C184.746 207.371 186.478 200.067 186.394 191.37Z" />
          <path d="M296.806 218.221L296.932 153.502H304.79L367.148 79.6638H429.125L345.348 177.439H332.547L296.806 218.221ZM247.883 274.2V14.8182H301.875V274.2H247.883ZM369.556 274.2L312.268 189.471L348.263 151.349L432.8 274.2H369.556Z" />
          <path d="M500.627 278C480.601 278 463.364 273.947 448.916 265.841C434.552 257.651 423.483 246.084 415.709 231.139C407.936 216.11 404.049 198.336 404.049 177.819C404.049 157.808 407.936 140.245 415.709 125.132C423.483 110.018 434.425 98.2393 448.536 89.7959C462.731 81.3525 479.376 77.1308 498.472 77.1308C511.315 77.1308 523.271 79.1994 534.34 83.3367C545.494 87.3895 555.211 93.511 563.491 101.701C571.856 109.891 578.362 120.192 583.009 132.604C587.657 144.932 589.98 159.37 589.98 175.919V190.737H425.595V157.301H539.156C539.156 149.533 537.467 142.652 534.087 136.657C530.707 130.662 526.017 125.976 520.018 122.599C514.104 119.137 507.217 117.406 499.359 117.406C491.163 117.406 483.897 119.306 477.56 123.105C471.307 126.82 466.406 131.844 462.857 138.177C459.309 144.425 457.492 151.391 457.408 159.074V190.864C457.408 200.489 459.182 208.806 462.731 215.814C466.364 222.822 471.476 228.226 478.067 232.026C484.657 235.825 492.473 237.725 501.514 237.725C507.513 237.725 513.005 236.881 517.99 235.192C522.976 233.503 527.243 230.97 530.791 227.593C534.34 224.215 537.044 220.078 538.903 215.181L588.84 218.474C586.305 230.464 581.108 240.933 573.25 249.883C565.477 258.749 555.422 265.673 543.085 270.654C530.834 275.551 516.681 278 500.627 278Z" />
          <path d="M798.415 135.137L748.985 138.177C748.14 133.955 746.323 130.156 743.535 126.778C740.747 123.316 737.071 120.572 732.509 118.546C728.03 116.435 722.665 115.38 716.412 115.38C708.047 115.38 700.992 117.153 695.246 120.699C689.501 124.161 686.628 128.805 686.628 134.631C686.628 139.274 688.487 143.201 692.204 146.409C695.922 149.618 702.302 152.193 711.343 154.135L746.577 161.227C765.504 165.111 779.615 171.359 788.909 179.972C798.203 188.584 802.851 199.898 802.851 213.914C802.851 226.664 799.091 237.852 791.571 247.477C784.135 257.103 773.911 264.617 760.899 270.021C747.971 275.34 733.058 278 716.159 278C690.388 278 669.855 272.638 654.562 261.915C639.353 251.108 630.439 236.416 627.819 217.841L680.924 215.054C682.53 222.907 686.417 228.901 692.585 233.039C698.753 237.092 706.653 239.118 716.285 239.118C725.749 239.118 733.353 237.303 739.099 233.672C744.929 229.957 747.887 225.186 747.971 219.36C747.887 214.463 745.816 210.453 741.761 207.328C737.705 204.12 731.452 201.671 723.003 199.983L689.289 193.27C670.278 189.471 656.125 182.885 646.831 173.513C637.621 164.14 633.016 152.193 633.016 137.67C633.016 125.174 636.395 114.409 643.155 105.374C649.999 96.3396 659.589 89.3737 671.926 84.4765C684.346 79.5794 698.88 77.1308 715.525 77.1308C740.113 77.1308 759.462 82.3235 773.573 92.7089C787.768 103.094 796.049 117.237 798.415 135.137Z" />
          <path d="M801.159 274.2V79.6638H852.616V113.986H854.897C858.953 102.588 865.713 93.5955 875.176 87.0096C884.64 80.4237 895.962 77.1308 909.143 77.1308C922.494 77.1308 933.858 80.4659 943.237 87.1362C952.616 93.7221 958.869 102.672 961.995 113.986H964.023C967.994 102.841 975.176 93.9332 985.569 87.2629C996.046 80.5081 1008.42 77.1308 1022.7 77.1308C1040.87 77.1308 1055.62 82.9145 1066.94 94.482C1078.34 105.965 1084.05 122.261 1084.05 143.369V274.2H1030.18V154.008C1030.18 143.201 1027.31 135.095 1021.56 129.691C1015.82 124.287 1008.64 121.585 1000.02 121.585C990.216 121.585 982.569 124.71 977.077 130.958C971.585 137.121 968.839 145.269 968.839 155.401V274.2H916.494V152.868C916.494 143.327 913.748 135.728 908.256 130.071C902.848 124.414 895.709 121.585 886.837 121.585C880.837 121.585 875.43 123.105 870.614 126.145C865.882 129.1 862.122 133.28 859.333 138.683C856.545 144.003 855.151 150.251 855.151 157.428V274.2H801.159Z" />
          <path d="M1091.01 274.2V79.6638H1145V274.2H1091.01ZM1118.13 54.5868C1110.1 54.5868 1103.22 51.9271 1097.47 46.6077C1091.81 41.204 1088.98 34.7447 1088.98 27.2301C1088.98 19.7998 1091.81 13.4251 1097.47 8.10571C1103.22 2.7019 1110.1 0 1118.13 0C1126.16 0 1133 2.7019 1138.66 8.10571C1144.41 13.4251 1147.28 19.7998 1147.28 27.2301C1147.28 34.7447 1144.41 41.204 1138.66 46.6077C1133 51.9271 1126.16 54.5868 1118.13 54.5868Z" />
          <path d="M1256.11 79.6638V120.192H1138.87V79.6638H1256.11ZM1165.49 33.056H1219.48V214.421C1219.48 219.403 1220.24 223.287 1221.76 226.073C1223.28 228.775 1225.39 230.675 1228.1 231.772C1230.89 232.87 1234.1 233.419 1237.73 233.419C1240.26 233.419 1242.8 233.208 1245.33 232.785C1247.87 232.279 1249.81 231.899 1251.16 231.646L1259.66 271.794C1256.95 272.638 1253.15 273.609 1248.25 274.707C1243.35 275.889 1237.39 276.607 1230.38 276.86C1217.37 277.367 1205.96 275.636 1196.16 271.667C1186.44 267.699 1178.88 261.535 1173.47 253.176C1168.06 244.817 1165.4 234.263 1165.49 221.513V33.056Z" />
          <path d="M1313.76 161.734V274.2H1259.77V14.8182H1312.24V113.986H1314.52C1318.92 102.503 1326.01 93.511 1335.82 87.0096C1345.62 80.4237 1357.91 77.1308 1372.7 77.1308C1386.22 77.1308 1398 80.086 1408.06 85.9964C1418.2 91.8223 1426.06 100.224 1431.63 111.2C1437.29 122.092 1440.08 135.137 1440 150.335V274.2H1386.01V159.961C1386.09 147.971 1383.05 138.641 1376.88 131.971C1370.8 125.301 1362.26 121.965 1351.28 121.965C1343.93 121.965 1337.42 123.527 1331.76 126.651C1326.18 129.776 1321.79 134.335 1318.58 140.33C1315.45 146.24 1313.85 153.375 1313.76 161.734Z" />
        </g>
      </svg>
      <div className="custom-cursor"></div>
    </div>
  );
}
