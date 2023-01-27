import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const LottieAnimation = () => {
  const container = useRef(null);
  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container?.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lotie/fire loader.json"),
      });
    }
  }, [container]);
  setTimeout(function () {
    const loader = document.getElementsByClassName("loading");
    loader[0].style.display = "none";
  }, 2000);
  return (
    <div
      className="loading relative z-20 w-full bg-zinc-500"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 model-background bg-opacity-70 transition-opacity"></div>
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center  ">
          <div className="flex justify-center">
            <div className="w-[320px] h-[220px]" ref={container}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LottieAnimation;
