import { useRef, useState } from "react";
import Modal from "./model";
import "./App.css";
function Tasktwo() {
  // show reset button for the game
  const [show, setshow] = useState(false);
  //    grid size for the grid
  const [gridsize, setgridsize] = useState("");
  //    size for the amount of the grid
  const [size, setsize] = useState("");
  //    welcome model show thw game is finished
  const [welcome, setwelcomemodel] = useState(false);
  //    dragItem
  const dragItem = useRef();
  //    dragOverItem
  const dragOverItem = useRef();
  //    drag start
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  //    drag end
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  //    drag and drop
  const drop = (e) => {
    const copyListItems = [...size];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setsize(copyListItems);
    let getarray = [];
    for (let index = 0; index < copyListItems.length; index++) {
      if (index == copyListItems[index]) {
        getarray.push(copyListItems[index]);
      }
      if (getarray.length == copyListItems.length) {
        setwelcomemodel(true);
      }
    }
  };
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
      .map((value) => ({ value, sort: Math.random() }))
      .sort((asif, kiyani) => {
        if (asif.sort > kiyani.sort) {
          return -1;
        }
      })
      .map((puzzle_maping) => puzzle_maping.value);
    setsize(array);
  };
  return (
    <>
      <div className="w-full h-full mx-auto container ">
        <div className="w-full mx-auto ease-out duration-300 container inline-block h-full">
          {welcome ? (
            <Modal setwelcomemodel={setwelcomemodel} setsize={setsize} />
          ) : null}
          <div className="w-full flex justify-center">
            <img
            onClick={() => {
              window.location.replace("/")
            }}
              className="lg:w-96 ease-out duration-300 xs:w-60 sm:w-72 md:w-80  sm:ml-0 mt-[80px]"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%201.svg"
            />
          </div>
          <div className="mt-16 md:ml-[-10px] lg:ml-0 xl:ml-[-20px]">
            {/* <div
              className="flex w-44 cursor-pointer"
        
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
                  className="border-blue-600 rounded-[4px] fourth font-regularone hover:text-white border-[1px] sm:ml-[90px]   md:ml-[175px] ease-in duration-200 lg:ml-[369px] 2xl:ml-[900px] 2xl:mt-2 md:mt-2 xl:ml-[663px] text-blue-600 transition  sm:mt-2  lg:mt-2 h-12  xs:w-[300px] sm:w-24 md:w-32 bg-transparent "
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Reset
                </button>
              )}
            </form>
            <div className="sm:hidden xs:block">
              <form
                className=" md:ml-[-70px] lg:ml-0 xl:ml-[-20px]"
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
                  className="xs:w-[300px] sm:w-24 md:w-32 ease-out duration-300 h-12 font-regularone xs:ml-3 xs:mt-2 sm:mt-0 sm:ml-1 md:ml-1 lg:ml-6 rounded-[4px] text-lg hello   hover:text-blue-500 hover:border-[1px] hover:border-blue-500 text-white font-normal bg-blue-600"
                >
                  Submit
                </button>
              </form>
              {show && (
                <button
                  className="border-blue-600 rounded-[4px] fourth font-regularone hover:text-white border-[1px] sm:ml-[490px]  md:ml-[600px] ease-in duration-200 lg:ml-[820px] 2xl:ml-[1383px] xl:ml-[1113px] text-blue-600 transition  sm:mt-[-40px]  md:mt-[-41px] lg:mt-[-49px] h-12  xs:w-[300px] xs:ml-3 xs:mt-2 sm:w-24 md:w-32 bg-transparent "
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Reset
                </button>
              )}
            </div>
            <div className="w-full flex justify-center"></div>
            <div className="mt-6 flex ease-out duration-300 xs:ml-4 lg:ml-10 md:ml-[88px] sm:ml-7">
              <div className="flex lg:ml-0 md:ml-[-70px] xl:ml-[-20px] gap-2">
                <svg
                  className="lg:mt-[6px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#FBBF24" />
                </svg>

                <p className="text-[#525252] font-regularone font-normal sm:text-md  xs:text-[10px] md:text-md lg:text-lg">
                  Prime Number
                </p>
              </div>
              <div className="flex ml-4 gap-2">
                <svg
                  className="lg:mt-[6px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#34D399" />
                </svg>

                <p className="font-regularone text-[#525252] font-normal sm:text-md  xs:text-[10px] md:text-md lg:text-lg">
                  Even Number
                </p>
              </div>
              <div className="flex ml-4 gap-2">
                <img
                  className="xs:w-3 sm:w-4"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Ellipse%2022%20%281%29.svg"
                />
                <p className="text-[#525252] font-regularone font-normal sm:text-md  xs:text-[10px] md:text-md lg:text-lg">
                  Odd Number
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 flex justify-center">
            <div className="xs:w-[300px] xs:h-[160px] rounded-3xl ease-out duration-300 sm:w-[580px] sm:h-[220px] md:w-[730px] md:h-[270px] lg:w-[950px] lg:h-[270px] xl:w-[1250px] xl:h-[270px] 2xl:w-[1500px] 2xl:h-[290px] pr-4 pb-6 place-items-center border-b-0 border-r-0 border-t-0 border-l-0 border-[#EA580C] border-[1px] mb-10 bg-[#FFEDD5]">
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
                          className={`lg:w-[150px] 2xl:w-[220px] xs:w-[56px] ease-out duration-300 xs:h-[43px] cursor-move sm:w-[98px] md:w-[115px] xl:w-44 mt-6 sm:h-[75px]   md:h-[85px] lg:h-[90px] transition xs:rounded-md sm:rounded-xl ${
                            (_number > 2 &&
                              _number % 2 !== 0 &&
                              _number % 3 !== 0 &&
                              _number % 5 !== 0 &&
                              _number % 7 !== 0 &&
                              "bg-yellow-500") ||
                            ((_number === 2 ||
                              _number === 3 ||
                              _number === 5 ||
                              _number === 7) &&
                              "bg-yellow-500") ||
                            (_number % 2 === 0 && "bg-green-500") ||
                            "bg-blue-500"
                          } ml-4`}
                          key={idx * 1000 * Math.random()}
                          onDragStart={(e) => dragStart(e, idx)}
                          onDragEnter={(e) => dragEnter(e, idx)}
                          onDragEnd={drop}
                          draggable
                        >
                          <p className=" text-center font-regularone sm:text-2xl xs:mt-[10px] ease-out duration-300  xs:text-base align-center sm:mt-[20px] md:mt-[26px] text-white">
                            {_number}
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

export default Tasktwo;
