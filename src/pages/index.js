import React, { useState } from "react";
import LottieAnimation from "./Lotiecomp";
// import Image from "../../";
import Model from "./model";
export default function Home() {
  const [showmodel, setshowmodel] = useState(false);
  const [getdata, setgetdata] = useState("");
  const [todolist, settodolist] = useState([]);
  const getdatahandler = (e) => {
    e.preventDefault();
    console.log(getdata);
    if (getdata == "") {
      return;
    } else {
      settodolist([getdata, ...todolist]);
      setgetdata("");
    }
  };
  const onDelete = (idx) => {
    settodolist((list) => {
      return list.filter((item) => item !== idx);
    });
    console.log(todolist, "delete list");
  };

  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto">
        {showmodel ? <Model setshowmodel={setshowmodel} /> : null}
        <div className="w-full flex justify-center pt-[82px] pb-[82px] h-[220px] bg-[#1F2937]">
          <p className="main-heading">Todo App</p>
        </div>
        <div className=" flex justify-center">
          <div className="w-[624px] pt-[50px]">
            <form onSubmit={getdatahandler} className="flex  gap-4">
              <input
                onChange={(e) => setgetdata(e.target.value)}
                value={getdata}
                className="create-input"
                type="text"
                placeholder="Create a new task"
              />
              <div className="relative">
                <input
                  type="submit"
                  value={"Create"}
                  className="create-button cursor-pointer flex gap-2"
                />
                <div className="absolute create-svg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_972_7068)">
                      <path
                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 8H10"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 6V10"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_972_7068">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </form>
            <div className="flex justify-between">
              <div className="get-task">
                <p className="task-heading">Create a new task</p>
                <button className="cursor-default done-task">
                  {todolist.length}
                </button>
              </div>
              <div className="get-task">
                <p className="task-heading">Done Tasks</p>
                <button className="cursor-default completed-task">
                  {" "}
                  0 of {todolist.length}
                </button>
              </div>
            </div>
            <div className="pb-4">
              <LottieAnimation />
              {todolist.length >= 1
                ? todolist.map((todo, idx) => {
                    return (
                      <div className="get-task-data mt-8 flex justify-between p-[18px] ">
                        <div className="flex gap-4">
                          <div
                            onClick={() => {
                              onDelete();
                            }}
                            className="cursor-pointer"
                          >
                            <label class="todo-cb">
                              <input type="checkbox" />
                              <span class="tick"></span>
                            </label>
                            {/* <img className="w-5 h-5" src="../../Images/Frame.png"/> */}
                            {/* <img className="w-5 h-5" src="../../Images/radio-button-off (1).png"/> */}
                          </div>
                          <p className="get-task-data-paragraph" key={idx}>
                            {todo}
                          </p>
                        </div>
                        <div>
                          <svg
                            className="cursor-pointer"
                            onClick={() => setshowmodel(true)}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_972_7169)">
                              <path
                                d="M4 7H20"
                                stroke="#9CA3AF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10 11V17"
                                stroke="#9CA3AF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14 11V17"
                                stroke="#9CA3AF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7"
                                stroke="#9CA3AF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
                                stroke="#9CA3AF"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_972_7169">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
