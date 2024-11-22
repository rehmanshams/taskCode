import { useRef, useState } from "react";
import Modal from "./model";

export default function Puzzle() {
  //         //        //
  const [welcome, setwelcomemodel] = useState(false);
  //         //        //
  const dragItem = useRef();
  //         //        //
  const dragOverItem = useRef();
  //         //        //
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  //         //        //
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  //         //        //
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
  //         //        //
  const [gridsize, setgridsize] = useState("");
  //         //        //
  const [size, setsize] = useState("");
  //         //        //
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
      <div className="container mx-auto flex flex-col justify-center items-center max-w-[1024px] w-full">
        <div className=" border-gray-400 bg-white pb-10 rounded-md border-[1px] mt-32 h-full w-[800px]">
          {welcome ? (
            <Modal setwelcomemodel={setwelcomemodel} setsize={setsize} />
          ) : null}
          <div className="flex justify-center flex-col mt-24 w-full">
            <div className="w-full flex justify-center">
              <img
                className="w-96 animate-charcter h-28 mt-[-65px] text"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Screenshot_2022-11-03_011620-removebg-preview.png"
              />
            </div>
            <div className="w-full flex justify-center">
              <form
                onSubmit={(onsubmit_handler) => {
                  createHandler(onsubmit_handler);
                }}
              >
                {}
                <div className="w-full">
                  <input
                    className="border-black   w-[450px] h-10 shadow-lg shadow-gray-300/50 rounded-md text-2xl pl-4 font-thin border-[1px]"
                    type="number"
                    placeholder="Add Some Value"
                    name="inputlength"
                    id="inputlength"
                    min={2}
                    max={5}
                    required
                  />
                </div>
                <div className="w-full flex justify-center gap-[194px] mt-6">
                  <div>
                    <button className="btn fourth h-8">
                      <input
                        className=" cursor-pointer text-center align-center w-[450px] ease-in duration-300 text-black hover:text-white h-8 drop-shadow-2xl rounded-md text-lg font-extrathin"
                        type="submit"
                        value="Create"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {size.length ? (
            <div
              style={{
                gridTemplateColumns: `repeat(${gridsize}, 1fr)`,
                display: "grid",
              }}
              className={`w-[${gridsize * 2}px] h-[${
                gridsize * 2
              }px] container mx-auto max-w-[750px] h-full   bg-gray-100  pb-10 pt-10 border-black border-[1px]  rounded-sm gap-4 mt-14 `}
            >
              {size.map((_number, idx) => {
                return (
                  <div
                    className="text-sm  font-xl rounded-lg animated-button1 bg-white cursor-move  w-full max-w-[150px] h-full  flex justify-center  container mx-auto"
                    key={idx * 1000 * Math.random()}
                    onDragStart={(e) => dragStart(e, idx)}
                    onDragEnter={(e) => dragEnter(e, idx)}
                    onDragEnd={drop}
                    draggable
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className=" cursor-move text-center font-normal align-center mt-[-5px]  w-full animate-charcter">
                      {_number}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <p className="font-thin text-2xl  animte-charcter mt-44">
                Please enter the value for the puzzle
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
