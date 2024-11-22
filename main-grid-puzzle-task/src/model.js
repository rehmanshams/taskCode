import React, { useEffect } from "react";
import { useReward } from "react-rewards";

const Model = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  useEffect(() => {
    reward();
  }, []);

  return (
    <>
      <div
        className="relative z-20 w-full bg-zinc-500"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-zinc-500 bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center  ease-out duration-300 p-4 text-center  ">
            <span id="rewardId" />
            <div className="w-full xs:max-w-[180px] sm:max-w-[420px] ease-out duration-300 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all ">
              <div className="relative px-[32px] py-[24px]">
                <div className="flex flex-col max-w-[350px] items-center justify-center w-full">
                  <h1 className="pt-1 ease-out duration-300 font-thin tracking-widest font-lightone text-black xs:text-[12px] sm:text-[18px] ">
                    Congratulations
                    <br /> You Win The Game
                  </h1>
                  <button
                    onClick={() => {
                      window.location.reload();
                    }}
                    className="border-black xs:w-16 sm:w-24 font-lightone text-black ease-out duration-300 hover:text-white fiveth mt-6 rounded-md bg-transparent cursor border-[1px]"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
