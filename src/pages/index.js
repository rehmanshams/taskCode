import React, { useState } from "react";
import Model from "./model";
export default function Home() {
  const [togglestate, settogglestate] = useState("");
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
                  // className=""
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
                <button className="done-task">{todolist.length}</button>
              </div>
              <div className="get-task">
                <p className="task-heading">Done Tasks</p>
                <button className="completed-task"></button>
              </div>
            </div>
            <div className="pb-4">
              {todolist.length >= 1
                ? todolist.map((todo, idx) => {
                    return (
                      <div className="get-task-data mt-8 flex justify-between p-[18px] ">
                        <div className="flex gap-4">
                          <div
                            onClick={() => {
                              togglestate !== 0
                                ? settogglestate(0)
                                : settogglestate(null);
                            }}
                            className="cursor-pointer"
                          >
                            {togglestate == 0 ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_972_7163)">
                                  <path
                                    d="M12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92894C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.76121C17.6541 3.51809 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22V22ZM12 4C10.4178 4 8.87104 4.4692 7.55544 5.34825C6.23985 6.2273 5.21447 7.47673 4.60897 8.93854C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1572 7.84344 17.6569 6.34315C16.1566 4.84286 14.1217 4 12 4V4Z"
                                    fill="url(#paint0_linear_972_7163)"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_972_7163"
                                    x1="12"
                                    y1="2"
                                    x2="12"
                                    y2="22"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#656BFF" />
                                    <stop offset="1" stop-color="#FF8787" />
                                  </linearGradient>
                                  <clipPath id="clip0_972_7163">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            ) : (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_972_7209)">
                                  <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="url(#paint0_linear_972_7209)"
                                  />
                                  <path
                                    d="M9 12L11 14L15 10"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_972_7209"
                                    x1="12"
                                    y1="3"
                                    x2="12"
                                    y2="21"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#656BFF" />
                                    <stop offset="1" stop-color="#FF8787" />
                                  </linearGradient>
                                  <clipPath id="clip0_972_7209">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </div>
                          <p
                            className="get-task-data-paragraph  pt-1"
                            key={idx}
                          >
                            {todo}
                            {/* ajdbvia */}
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
