import { useState } from "react";
export const Taskthree = () => {
  // odd state
  const [odd, setodd] = useState(false);
  // show reset button for the game
  const [show, setshow] = useState(false);
  //    grid size for the grid
  const [gridsize, setgridsize] = useState("");
  //    size for the amount of the grid
  const [size, setsize] = useState([]);
  //  createHandler for the grids
  const createHandler = (e) => {
    e.preventDefault();
    const input = e.target.inputlength.value;
    setgridsize(input);
    let gridArray = [];
    for (let index = 0; index < input * input; index++) {
      gridArray.push(index);
    }
    let array = gridArray
      .map((value) => ({ value }))
      .sort((asif, kiyani) => {
        if (asif.sort > kiyani.sort) {
          return -1;
        }
      })
      .map((puzzle_maping) => puzzle_maping.value);
    setsize(array);
  };
  // function to get number of the grid
  function gettheNumber(e) {
    const copy = [...size];
    if (e === "odd") {
      let filtertheNumbers = copy.filter((item) => {
        if (item % 2 == 0) {
          return item;
        }
      });
      setsize(filtertheNumbers);
    }

    if (e === "even") {
      let filtertheNumbers = size.filter((item) => {
        if (item % 2) {
          return item;
        }
      });
      setsize(filtertheNumbers);
    }
    if (e === "prime") {
      size.map((item) => {
        for (let item = 2; item <= 20; item++) {
          let prime = true;
        }
      });
    }
  }
  return (
    <>
      <div className="w-full h-full mx-auto container ">
        <div className="w-full mx-auto ease-out duration-300 container inline-block h-full">
          <div className="w-full flex justify-center">
            <img
              onClick={() => {
                window.location.replace("/");
              }}
              className="lg:w-96 ease-out duration-300 xs:w-60 sm:w-72 md:w-80  sm:ml-0 mt-[80px]"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%201.svg"
            />
          </div>
          <div className="mt-16 md:ml-[-10px] lg:ml-0 xl:ml-[-20px]">
            {/* <div
              className="flex w-44 cursor-pointer"
              onClick={() => {
                window.location.replace("/");
              }}
            >
              <img
                className="w-10 xs:ml-4 lg:ml-10 sm:ml-7 ease-out duration-300 mt-6"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/istockphoto-1162207323-1024x1024-removebg-preview.png"
              />
              <p className="sm:mt-[35px] sm:ml-[1px]  lg:ml-1 lg:mt-[30px]  xs:mt-[35px] xs:ml-[1] mt-7 ease-out duration-300 font-regularone text-[#1F2937 xs:text-sm sm:text-md md:text-md lg:text-xl">
                GO BACK
              </p>
            </div> */}
            <p className="font-bold xs:ml-4 lg:ml-10 sm:ml-7 mt-6 ease-out duration-300 font-boldone text-[#1F2937 xs:text-sm sm:text-md md:text-md lg:text-xl">
              Task: Num detector via color in grid
            </p>
            <p className="font-thin ease-out duration-300 sm:text-md lg:ml-10 xs:text-[14px] md:text-md font-regularone  lg:text-xl xs:mt-8 sm:mt-5 xs:ml-4 sm:ml-7">
              Enter Number
            </p>
          </div>
          <div>
            <form
              className="sm:hidden xs:block md:ml-[-70px] flex lg:ml-0 xl:ml-[-20px]"
              onSubmit={(onsubmit_handler) => {
                createHandler(onsubmit_handler);
              }}
            >
              <input
                className="border-[#9CA3AF] lg:ml-10 font-lightone  ease-out duration-300 border-[1px] xs:w-[300px] sm:w-72 rounded-[4px] h-12 xs:mt-1 sm:mt-2 xs:ml-3 md:ml-[88px] sm:ml-7 pl-2"
                type="number"
                placeholder=" Enter number to generate grid "
                name="inputlength"
                id="inputlength"
                required
                min="2"
                max="4"
              />
              <button
                onClick={() => {
                  setshow(true);
                }}
                className="xs:w-[300px] md:mt-2 sm:w-24 md:w-32 ease-out duration-300 h-12 font-regularone xs:ml-3 xs:mt-2 sm:mt-2 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-blue-500 hover:border-[1px] hover:border-blue-500 text-white font-normal bg-blue-600"
              >
                Submit
              </button>
              {show && (
                <button
                  className={`${
                    odd &&
                    "bg-green-100 border-[1px] text-green-500 border-green-500"
                  }
                border-blue-600 rounded-[4px] fourth font-regularone hover:text-white border-[1px] sm:ml-[90px]   md:ml-[175px] ease-in duration-200 lg:ml-[369px] 2xl:ml-[900px] 2xl:mt-2 md:mt-2 xl:ml-[663px] text-blue-600 transition  sm:mt-2  lg:mt-2 h-12  xs:w-[300px] sm:w-24 md:w-32 bg-transparent `}
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Reset
                </button>
              )}
            </form>
            <form
              className="sm:block xs:hidden md:ml-[-70px] flex lg:ml-0 xl:ml-[-20px]"
              onSubmit={(onsubmit_handler) => {
                createHandler(onsubmit_handler);
              }}
            >
              <input
                className="border-[#9CA3AF] lg:ml-10 font-lightone  ease-out duration-300 border-[1px] xs:w-[300px] sm:w-72 rounded-[4px] h-12 xs:mt-1 sm:mt-2 xs:ml-3 md:ml-[88px] sm:ml-7 pl-2"
                type="number"
                placeholder=" Enter number to generate grid "
                name="inputlength"
                id="inputlength"
                required
                min="2"
                max="4"
              />
              <button
                onClick={() => {
                  setshow(true);
                }}
                className="xs:w-[300px] md:mt-2 sm:w-24 md:w-32 ease-out duration-300 h-12 font-regularone xs:ml-3 xs:mt-2 sm:mt-2 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-blue-500 hover:border-[1px] hover:border-blue-500 text-white font-normal bg-blue-600"
              >
                Submit
              </button>
              {show && (
                <button
                  className={`${"bg-green-100 border-[1px] text-green-500 border-green-500"}
                border-blue-600 rounded-[4px] fourth font-regularone hover:text-white border-[1px] sm:ml-[90px]   md:ml-[175px] ease-in duration-200 lg:ml-[369px] 2xl:ml-[900px] 2xl:mt-2 md:mt-2 xl:ml-[663px] text-blue-600 transition  sm:mt-2  lg:mt-2 h-12  xs:w-[300px] sm:w-24 md:w-32 bg-transparent `}
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Reset
                </button>
              )}
            </form>
            <div className="absolute mt-6 gap-0 flex ease-out duration-300 xs:ml-11 lg:ml-10 md:ml-[88px] sm:ml-7">
              <div className="cursor-pointer font-manregularone hover:font-boldone hover:border-4 border-l-transparent border-r-transparent border-t-transparent border-black w-8 text-center  xl:ml-[-10px] xs:ml-[-32px] sm:ml-2 text-[#525252] hover:font-manboldone  font-normal sm:text-[12px] xs:text-md sm xs:text-[8px] md:text-md lg:text-lg">
                <p>All</p>
              </div>
              <div className="cursor-pointer hover:border-4 border-l-transparent border-r-transparent border-t-transparent border-violet-500  sm:ml-1 flex lg:ml-1 xl:ml-2 md:ml-[-70px]  gap-2">
                <svg
                  className=" xs:w-3 xs:ml-2 xs:mt-[-1px]  sm:mt-[2px] lg:mt-[5px] sm:w-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#8B5CF6" />
                </svg>

                <p
                  onClick={() => gettheNumber("prime")}
                  className=" text-[#525252] hover:font-boldone font-regularone font-normal sm:text-[12px] xs:text-md  xs:text-[8px] md:text-md lg:text-lg"
                >
                  Prime Number
                </p>
              </div>
              <div className="cursor-pointer hover:border-4 border-l-transparent border-r-transparent border-t-transparent border-green-500  flex ml-4 gap-2">
                <svg
                  className="xs:w-3 xs:mt-[-1px] sm:mt-[2px] lg:mt-[5px] sm:w-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#22C55E" />
                </svg>

                <p
                  onClick={() => gettheNumber("even")}
                  className="font-regularone text-[#525252] hover:font-boldone font-normal sm:text-[12px] xs:text-md  xs:text-[8px] md:text-md lg:text-lg"
                >
                  Even Number
                </p>
              </div>
              <div className="cursor-pointer  hover:border-4 border-l-transparent border-r-transparent border-t-transparent border-red-500  flex ml-4 gap-2">
                <svg
                  className="xs:w-3 xs:mt-[-1px] sm:mt-[2px] lg:mt-[5px] sm:w-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#EF4444" />
                </svg>

                <p
                  onClick={(setbuttoncolor) => gettheNumber("odd")}
                  className=" text-[#525252] font-regularone hover:font-boldone sm:text-[12px] xs:text-md font-normal sm:text-md  xs:text-[8px] md:text-md lg:text-lg"
                >
                  Odd Number
                </p>
              </div>
            </div>
            <div className="border-[1px] border-gray-200 sm:ml-[40px] sm:w-[380px] xs:w-[285px] xs:ml-[20px] lg:ml-[50px] lg:w-[500px] xl:w-[514px] 2xl:w-[515px] 2xl:ml-6 xl:ml-6 mt-[56px] " />
          </div>
          <div className="w-full mt-5 flex justify-center">
            <div className="xs:w-[300px] xs:h-[160px] rounded-3xl ease-out duration-300 sm:w-[590px] sm:h-[220px] md:w-[730px] md:h-[270px] lg:w-[950px] lg:h-[270px] xl:w-[1250px] xl:h-[270px] 2xl:w-[1500px] 2xl:h-[290px] pr-4 pb-6 place-items-center border-b-0 border-r-0 border-t-0 border-l-0 border-[#EA580C] border-[1px] mb-10 bg-[#FFEDD5]">
              <div className="w-full h0">
                {size.length ? (
                  <div
                    style={{
                      gridTemplateColumns: `repeat(${gridsize}, 1fr)`,
                      display: "grid",
                      transition: 2,
                    }}
                    className={`w-[${gridsize * 2}px] h-[${
                      gridsize * 2
                    }px] pr-4 pb-6 w-full xs:w-[300px] sm:w-[580px] ease-out duration-300 rounded-3xl md:w-[730px] lg:w-[950px] 2xl:w-[1500px] xl:w-[1250px]  h-full  transition  xs:gap-0 md:gap-4 place-items-center border-b-0 border-r-0 border-t-0 border-l-0 border-[#EA580C] border-[1px] mb-10 bg-[#FFEDD5]`}
                  >
                    {size.map((_number, idx) => {
                      return (
                        <div
                          className={`lg:w-[150px] 2xl:w-[220px] xs:w-[56px] ease-out duration-300 xs:h-[43px] sm:w-[98px] md:w-[115px] xl:w-44 mt-6 sm:h-[75px]   md:h-[85px] lg:h-[90px] transition xs:rounded-md sm:rounded-xl ${
                            (_number > 2 &&
                              _number % 2 !== 0 &&
                              _number % 2 == 0 &&
                              "bg-violet-500") ||
                            (_number % 2 && "bg-green-500") ||
                            (_number % 2 == 0 && "bg-red-500")
                          } ml-4`}
                          key={idx * 1000}
                        >
                          <p className=" text-center font-regularone sm:text-2xl xs:mt-[10px] ease-out duration-300  xs:text-base align-center sm:mt-[20px] md:mt-[26px] text-white">
                            {_number + 1}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Taskthree;
