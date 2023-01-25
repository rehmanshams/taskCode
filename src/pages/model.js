import React from "react";
export const Model = ({setshowmodel}) => {
  return (
    <>
      <div
        className="relative z-20 w-full bg-zinc-500"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 model-background bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  ">
            <span id="rewardId" />
            <div className="w-full max-w-[516px] transform overflow-hidden rounded-lg bg-[#111827] shadow-xl transition-all ">
              <div className="relative p-6">
                <div className="text-left">
                  <h2 className="font-manrope text-xl leading-5 text-white font-semibold">
                    Delete Task
                  </h2>
                  <p className="pb-8 text-white font-Manrope text-sm leading-[21px] pt-4 font-normal">
                    Are you sure you want to delete task ?
                  </p>
                </div>
                <div className=" text-right">
                  <button
                    onClick={() => setshowmodel(false)}
                    className="bg-transparent border-[1px] border-white mr-4 rounded-md px-4 py-3 font-Manrope text-white leading-[100%] text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button className="bg-[#E11D48] rounded-md px-4 py-3  text-white font-Manrope leading-[100%] text-sm font-semibold">
                    Delete
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
