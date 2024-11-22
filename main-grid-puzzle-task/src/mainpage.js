import React from "react";
import Taskone from "./taskone";
import Tasktwo from "./tasktwo";
import Taskthree from "./taskthree";
import Taskfour from "./taskfour";
import { Link } from "react-router-dom";
export const mainpage = () => {
  return (
    <div className="w-full h-full flex ease-out duration-300 flex-col justify-center max-w-[1920px] mx-auto my-auto pt-10 px-4 sm:p-20 align-middle items-center">
      <h1 className="text-4xl ease-out duration-300 sm:block xs:hidden md:text-4xl lg:text-5xl sm:text-3xl text-center font-extrabold md:font-bold mb-6 text-gray-800">
        Alphasquad Tasks for Dev’s
      </h1>
      <h1 className="text-4xl ease-out duration-300 sm:hidden xs:block xs:text-3xl md:text-4xl lg:text-5xl sm:text-3xl text-center font-extrabold md:font-bold mb-6 text-gray-800">
        Alphasquad<br/> Tasks for Dev’s
      </h1>
      <p className="text-center ease-out duration-300 md:text-base xs:text-sm sm:text-sm leading-4 font-normal text-gray-600 mb-8 sm:md-0">
        Here are list of task that dev’s will perform for the practice of their
        frontend.
      </p>

      <div className=" lg:flex justify-center  lg:gap-2 xl:gap-5 2xl:gap-7">
        <div className="md:flex sm:flex ease-out duration-300  sm:gap-2 md:gap-7 xl:gap-5 2xl:gap-7 lg:gap-2">
          <div className="ease-out duration-300 lg:w-[245px] md:w-[300px] xs:w-[300px] xs:h-[400px]  sm:h-[400px] sm:w-[300px] md:h-[400px] lg:h-[350px] xl:w-[296px] xl:h-[388px] rounded-xl border-2 border-gray-100">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201.svg" />
            <div className="">
              <p className="ease-out duration-300 font-bold text-gray-800 left-0 lg:ml-0 xs:ml-[-50px] sm:ml-[-50px] md:ml-[-47px] xl:ml-[-17px] text-base text-center mt-2 ">
                Num detector via color in grid
              </p>
              <p className="ease-out duration-300 text-gray-600 lg:text-[13px] xl:text-sm mt-1 left-0 text-center">
                Upon entering number the grid will sort
                <br /> it self by prime, even and odd numbers.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/taskone">
                <button className="ease-out duration-300 flex py-[10px] my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 lg:w-[220px] xs:w-[280px] xs:w-[280px] sm:w-[280px] md:w-[280px] xl:w-[250px]">
                  View Task
                </button>
              </Link>
            </div>
          </div>
          <div className="xs:mt-6 sm:mt-0 lg:w-[245px] md:w-[300px] ease-out duration-300 sm:h-[400px] sm:w-[300px] md:h-[400px] lg:h-[350px] xl:w-[296px] xl:h-[388px] rounded-xl border-2 border-gray-100">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201%20%281%29.svg" />
            <div className="">
              <p className="ease-out duration-300 font-bold text-gray-800 left-0 xs:ml-[-196px] sm:ml-[-195px] lg:ml-[-140px] xl:ml-[-160px] md:ml-[-193px] text-base text-center mt-2 ">
                Puzzel Grid{" "}
              </p>
              <p className="text-gray-600 ease-out duration-300 lg:text-[13px] xl:text-sm mt-1 left-0 text-center">
                Upon entering number the grid will sort
                <br /> it self by prime, even and odd numbers.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/tasktwo">
              <button className="flex py-[10px] my-[10px] ease-out duration-300 self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 lg:w-[220px] xs:w-[280px] sm:w-[280px] md:w-[280px] xl:w-[250px]">
                  View Task
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex sm:flex sm:mt-8 md:mt-8 lg:mt-0 ease-out duration-300  sm:gap-2 md:gap-7 xl:gap-5 2xl:gap-7 lg:gap-2">
        <div className="xs:mt-6 sm:mt-0 lg:w-[245px] md:w-[300px] sm:h-[400px] sm:w-[300px] ease-out duration-300 md:h-[400px] lg:h-[350px] xl:w-[296px] xl:h-[388px] rounded-xl border-2 border-gray-100">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201%20%282%29.svg" />
            <div className="">
              <p className="font-bold ease-out duration-300 text-gray-800 left-0 xs:ml-[-165px] sm:ml-[-167px] md:ml-[-165px] lg:ml-[-112px] xl:ml-[-131px] text-base text-center mt-2 ">
                Number Group{" "}
              </p>
              <p className="text-gray-600 ease-out duration-300 lg:text-[13px] xl:text-sm mt-1 left-0 text-center">
                Upon entering number the grid will sort
                <br /> it self by prime, even and odd numbers.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="taskthree">
              <button className="flex py-[10px] ease-out duration-300 my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 lg:w-[220px] xs:w-[280px] sm:w-[280px] md:w-[280px] xl:w-[250px]">
                  View Task
                </button>
              </Link>
            </div>
          </div>
          <div className="xs:mt-6 sm:mt-0 lg:w-[245px] md:w-[300px] sm:h-[400px] ease-out duration-300 sm:w-[300px] md:h-[400px] lg:h-[350px] xl:w-[296px] xl:h-[388px] rounded-xl border-2 border-gray-100">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2%201%20%283%29.svg" />
            <div className="">
              <p className="font-bold ease-out duration-300 text-gray-800 left-0 xs:ml-[-145px] sm:ml-[-147px] md:ml-[-145px] lg:ml-[-95px] xl:ml-[-113px] text-base text-center mt-2 ">
                Number Remover{" "}
              </p>
              <p className="text-gray-600 ease-out duration-300 lg:text-[13px] xl:text-sm mt-1 left-0 text-center">
                Upon entering number the grid will sort
                <br /> it self by prime, even and odd numbers.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/taskfour">
              <button className="flex py-[10px] ease-out duration-300 my-[10px] self-end justify-center text-center text-sm font-semibold text-blue-600 leading-[21px] border border-blue-600 rounded-[4px] hover:text-white hover:bg-blue-600 lg:w-[220px] xs:w-[280px] sm:w-[280px] md:w-[280px] xl:w-[250px]">
                  View Task
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default mainpage;
