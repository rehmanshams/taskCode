import { useState } from "react";
import "./App.css";
function Taskfour() {
  // input button show
  const [show2, setShow2] = useState(true);
  // show reset button for the game
  const [show, setshow] = useState(false);
  //    grid size for the grid
  const [gridsize, setgridsize] = useState("");
  //    size for the amount of the grid
  const [size, setsize] = useState([]);
  //  createHandler for the grids
  const createHandler = (e, type) => {
    e.preventDefault();
    const input = e.target.inputlength;
    if (type == true) {
      setgridsize(input.value);
      let gridArray = [];
      for (let index = 0; index < input.value; index++) {
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
    } else if (type == false) {
      size.splice(input.value, +1);
      setsize([...size]);
    }

    setshow(true);
    setShow2(false);
    if (show2) {
      input.value = "";
    }
  };
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
              <p className="sm:mt-[35px] sm:ml-[1px]  lg:ml-1 lg:mt-[30px]  xs:mt-[35px] xs:ml-[1] mt-7 ease-out duration-300 font-latoregularone text-[#1F2937 xs:text-sm sm:text-md md:text-md lg:text-xl">
                GO BACK
              </p>
            </div> */}
            <p className="font-bold xs:ml-4 lg:ml-10 sm:ml-7 mt-6 ease-out duration-300 font-latoboldone text-[#1F2937 xs:text-sm sm:text-md md:text-md lg:text-xl">
              <span className="font-latoboldone">Task:</span>
              <span className="font-regularone">
                Enter index to remove/delete box in the given grid.
              </span>{" "}
            </p>
            <p className="font-thin ease-out duration-300 sm:text-md lg:ml-10 xs:text-[14px] md:text-md font-latoregularone  lg:text-xl xs:mt-8 sm:mt-5 xs:ml-4 sm:ml-7">
              Enter number
            </p>
          </div>
          <div>
            <form
              className="sm:hidden xs:block md:ml-[-70px] flex lg:ml-0 xl:ml-[-20px]"
              onSubmit={(event) => {
                show2
                  ? createHandler(event, true)
                  : createHandler(event, false);
              }}
            >
              {show2 ? (
                <>
                  <input
                    className="border-[#9CA3AF] lg:ml-10 font-latolightone  ease-out duration-300 border-[1px] xs:w-[300px] sm:w-72 rounded-[4px] h-12 xs:mt-1 sm:mt-2 xs:ml-3 md:ml-[88px] sm:ml-7 pl-2"
                    type="number"
                    placeholder=" Enter number to generate grid "
                    name="inputlength"
                    id="inputlength"
                    required
                    min="1"
                    max="200"
                  />
                  <button className="xs:w-[300px] md:mt-2 sm:w-24 md:w-32 ease-out duration-300 h-12 font-latoregularone xs:ml-3 xs:mt-2 sm:mt-2 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-cyan-500 hover:border-[1px] hover:border-cyan-500 text-white font-normal bg-cyan-600">
                    Submit
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="border-[#9CA3AF] lg:ml-10 font-latolightone  ease-out duration-300 border-[1px] xs:w-[300px] sm:w-72 rounded-[4px] h-12 xs:mt-1 sm:mt-2 xs:ml-3 md:ml-[88px] sm:ml-7 pl-2"
                    type="number"
                    placeholder=" Enter number to generate grid "
                    name="inputlength"
                    id="inputlength"
                    required
                    min="1"
                    max="200"
                  />
                  <button className="xs:w-[300px] md:mt-2 sm:w-24 md:w-32 ease-out duration-300 h-12 font-latoregularone xs:ml-3 xs:mt-2 sm:mt-2 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-cyan-500 hover:border-[1px] hover:border-cyan-500 text-white font-normal bg-cyan-600">
                    {" "}
                    Submit{" "}
                  </button>
                </>
              )}
              {show && (
                <button
                  className={`${
                    (show2 &&
                      "bg-white border-[1px] text-cyan-600 border-cyan-600") ||
                    "border-green-500 border-[1px] hover:text-white text-green-500"
                  }
                   rounded-[4px] fourth font-latoregularone xs:ml-3 xs:mt-2 border-[1px] sm:ml-[90px]   md:ml-[175px] ease-in duration-200 lg:ml-[369px] 2xl:ml-[900px] 2xl:mt-2 md:mt-2 xl:ml-[663px]  transition  sm:mt-2  lg:mt-2 h-12  xs:w-[300px] sm:w-24 md:w-32 bg-transparent `}
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
              onSubmit={(event) => {
                show2
                  ? createHandler(event, true)
                  : createHandler(event, false);
              }}
            >
              {show2 ? (
                <>
                  <input
                    className="border-[#9CA3AF] lg:ml-10 font-latolightone bg-color-cyan-500 text-black ease-out duration-300 border-[1px] xs:w-[300px] sm:w-72 rounded-[4px] h-12 xs:mt-1 sm:mt-2 xs:ml-3 md:ml-[88px] sm:ml-7 pl-2"
                    type="number"
                    placeholder=" Enter number to generate grid "
                    name="inputlength"
                    id="inputlength"
                    required
                    min="15"
                    max="150"
                  />
                  <button className="xs:w-[300px] md:mt-2 sm:w-24 md:w-32 ease-out duration-300 h-12 font-latoregularone xs:ml-3 xs:mt-2 sm:mt-2 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-cyan-500 hover:border-[1px] hover:border-cyan-500 hover:bg-white text-white font-normal bg-cyan-600">
                    Submit
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="border-[#9CA3AF] lg:ml-10 font-latolightone bg-color-cyan-500 text-black ease-out duration-300 border-[1px] xs:w-[300px] sm:w-72 rounded-[4px] h-12 xs:mt-1 sm:mt-2 xs:ml-3 md:ml-[88px] sm:ml-7 pl-2"
                    type="number"
                    placeholder=" Enter value to remove the number "
                    required
                    min="0"
                    max="150"
                  />
                  <button className="xs:w-[300px] md:mt-2 sm:w-24 md:w-32 ease-out duration-300 h-12 font-latoregularone xs:ml-3 xs:mt-2 sm:mt-2 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-cyan-500 hover:border-[1px] hover:border-cyan-500 hover:bg-white text-white font-normal bg-cyan-600">
                    Submit{" "}
                  </button>
                </>
              )}
              {show && (
                <button
                  className={`${
                    (show2 &&
                      "bg-white border-[1px] text-cyan-600 border-cyan-600") ||
                    "border-green-500 border-[1px] hover:text-white text-green-500"
                  }
                    rounded-[4px] rest font-latoregularone  border-[1px] sm:ml-[90px]   md:ml-[175px] ease-in duration-200 lg:ml-[369px] 2xl:ml-[900px] 2xl:mt-2 md:mt-2 xl:ml-[663px]  transition  sm:mt-2  lg:mt-2 h-12  xs:w-[300px] sm:w-24 md:w-32 bg-transparent `}
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Reset
                </button>
              )}
            </form>
          </div>
          <div className="w-full mt-5 flex justify-center">
            <div
              className={` ${
                (show2 && "bg-slate-50 custom-border-before") ||
                "bg-green-100 custom-border-after"
              } 
            xs:w-[300px] xs:h-[160px] rounded-3xl ease-out duration-300 sm:w-[580px] sm:h-[220px] md:w-[730px] md:h-[270px] lg:w-[950px] lg:h-[270px] xl:w-[1250px] xl:h-[270px] 2xl:w-[1500px] 2xl:h-[290px] pr-4 pb-6 place-items-center custom-border-before mb-10 `}
            >
              <div className="w-full h0">
                {size.length ? (
                  <div
                    style={{
                      gridTemplateColumns: `repeat(${gridsize}, 1fr)`,
                      display: "flex",
                      transition: 2,
                    }}
                    className={`w-[${gridsize * 2}px] h-[${
                      gridsize * 2
                    }px]  pr-4 pb-6 w-full flex-wrap bg-green-100 xs:w-[300px] sm:w-[580px] ease-out duration-300 custom-border-before rounded-3xl md:w-[730px] lg:w-[950px] 2xl:w-[1500px] xl:w-[1250px]  h-full  transition  xs:gap-0 md:gap-4 place-items-center border-b-0 border-r-0 border-t-0 border-l-0 mb-10
                    `}
                  >
                    {size.map((_number, idx) => {
                      return (
                        <div
                          className="lg:w-[158px] 2xl:w-[267px] bg-[#059669] xs:w-[78px] ease-out duration-300 xs:h-[43px] sm:w-[124px] md:w-[150px] xl:w-44 mt-6 sm:h-[75px]   md:h-[85px] lg:h-[90px] transition xs:rounded-md sm:rounded-xl
                       ml-4"
                          key={idx}
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
}

export default Taskfour;
