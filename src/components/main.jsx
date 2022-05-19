import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon, PencilIcon } from '@heroicons/react/solid';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import Cite from '../assets/Cite.png';
import Fish1 from '../assets/image 331.png';
import Fish2 from '../assets/image 332.png';
import Fish3 from '../assets/image 330.png';
import FishIcon from '../assets/image 344.png';
import FishIcon2 from '../assets/image 345.png';
import FishIcon3 from '../assets/image 346.png';
import FishIcon4 from '../assets/image 347.png';
import ProfileIcon1 from '../assets/image 224.png';
import ProfileIcon2 from '../assets/image 128.png';
import dp from '../assets/image 328.png';
import Avatar from '../assets/Avatar.png';
import Avatar2 from '../assets/Avatar2.png';
import Avatar3 from '../assets/Avatar3.png';
import img217 from '../assets/image 217.png';
import infinix from '../assets/infinix.png';

const Main = () => {
  const [dropDown, setdropDown] = useState(false)
  const handleClick = () => setdropDown(!dropDown)
  const [openTab, setOpenTab] = React.useState(1);

  // const handleClose = () => setdropDown(!dropDown)

  return (
    <div className="w-[90%] ml-[5%] mt-12 lg:mt-24">

      {/*--- heading ---*/}
      <div className="md:flex justify-between">
        <h1 className=" text-4xl text-[#FFBD14] font-semibold font-bungee">SCHOLARSHIP LISTING</h1>
        {/* create listing button */}
        <button className='text-white border-border-color rounded-lg border-2 py-2 px-4  bg-gradient-to-r p-[2px] from-[#7A5834]  to-[#4A4039]  mt-4 md:mt-0 w-[50%] md:w-auto'>
          Create New Listing
        </button>
      </div>

      {/*--- dropdown ---*/}
      <div className=" relative lg:w-full">
        <button className=" bg-bg-light hover:bg-amber-800 w-[50%] lg:w-[30%] rounded-md mt-10 py-3 px-3 flex justify-between" onClick={handleClick}>
          <h1 className="text-white">Axie Infenity</h1>
          <ChevronDownIcon className=" w-6 h-7 text-yellow-400" />
        </button>

        <ul className={!dropDown ? 'hidden' : 'absolute px-3 py-3 my-1 w-[50%] lg:w-[30%] rounded-md z-10 bg-bg-light95'}>
          <li className='w-1/4 text-white my-4'><a href="/">Home</a></li>
          <li className='w-1/4 text-white my-4'><a href="/">Scholarship</a></li>
          <li className='w-1/4 text-white my-4'><a href="/">Guilds</a></li>
          <li className='w-1/4 text-white my-4'><a href="/">Games</a></li>
        </ul>
      </div>

      {/*--- tabs ---*/}
      <div className="grid grid-cols-3 gap-2 mt-10">

        {/* tabs left side */}
        <div className="lg:col-span-1 col-span-3">

          {/* card 1 */}
          <div className=" bg-bg-light rounded-lg overflow-hidden">
            {/* top portion */}
            <div className=" flex px-5 py-4 ">
              <img src={Cite} alt="/" />
              <div className=" text-white ml-4">
                <h1 className=" text-yellow-400 text-2xl mb-1 font-bungee">AAP MAX SPEED</h1>
                <div>
                  <span>Guild 50%</span>
                  <span className="ml-3">&bull; Scholar: 50%</span>
                </div>
                <div>
                  <span>2 days ago</span>
                  <span className="ml-3">&bull; Expiring in 9 days</span>
                </div>
              </div>
            </div>
            {/* bottom portion */}
            <div className="py-2 px-5 bg-[#535355] flex justify-between border-bg border-t-2">
              <div>
                <span className="text-white">223 applicants</span>
                <span className="ml-3 text-yellow-400">&bull; 16 new applicants</span>
              </div>
              <ChevronRightIcon className=" w-6 h-7 text-yellow-400" />
            </div>
          </div>

          {/* card 2 */}
          <div className=" bg-bg-light mt-2 rounded-lg overflow-hidden">
            {/* top portion */}
            <div className=" flex px-5 py-4 ">
              <img src={Cite} alt="/" />
              <div className=" text-white ml-4">
                <h1 className=" text-yellow-400 text-2xl mb-1 font-bungee ">AAP MAX SPEED</h1>
                <div>
                  <span>Guild 50%</span>
                  <span className="ml-3">&bull; Scholar: 50%</span>
                </div>
                <div>
                  <span>2 days ago</span>
                  <span className="ml-3">&bull; Expiring in 9 days</span>
                </div>
              </div>
            </div>
            {/* bottom portion */}
            <div className="py-2 px-5 bg-[#535355] flex justify-between border-bg border-t-2">
              <div>
                <span className="text-white">80 applicants</span>
              </div>
              <ChevronRightIcon className=" w-6 h-7 text-yellow-400" />
            </div>
          </div>

          {/* card 3 */}
          <div className=" bg-bg-light mt-2 rounded-lg overflow-hidden">
            {/* top portion */}
            <a
              className=" flex px-5 py-4 hover:bg-amber-800"
              onClick={e => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              <img src={Cite} alt="/" />
              <div className=" text-white ml-4">
                <h1 className=" text-yellow-400 text-2xl mb-1  font-bungee">ABP CRIT BEAST</h1>
                <div>
                  <span>Guild 50%</span>
                  <span className="ml-3">&bull; Scholar: 50%</span>
                </div>
                <div>
                  <span>2 days ago</span>
                  <span className="ml-3">&bull; Expiring in 9 days</span>
                </div>
              </div>
            </a>
            {/* top portion end */}

            {/* bottom section */}
            <a
              className="py-2 px-5 bg-[#535355] flex justify-between border-bg border-t-2 hover:bg-amber-800"
              onClick={e => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              <div>
                <span className="text-white">5 applicants</span>
              </div>
              <ChevronRightIcon className=" w-6 h-7 text-yellow-400" />
            </a>
            {/* bottom section end */}
          </div>

        </div>
        {/*--- tabs left side end ---*/}

        {/* tabs right side */}
        <div className="lg:col-span-2 col-span-3 bg-bg-light border-border-color rounded-lg border-2 overflow-hidden h-auto">

          {/* tab 1 */}
          <div className={openTab === 1 ? "block px-6 py-8" : "hidden"} id="link1">
            {/* top content */}
            <div className="block md:flex justify-between">
              <div className="flex">
                <img src={Cite} alt="/" />
                <div className=" text-white ml-4">
                  <h1 className=" text-yellow-400 text-2xl mb-1 font-bungee">ABP CRIT BEAST</h1>
                  <div>
                    <span>5 days ago</span>
                    <span className="ml-3">&bull; Expiring in 9 days</span>
                    <span className="ml-3 text-[#24B0FF]"><span className="text-white">&bull;</span> 3 applicants</span>
                  </div>
                  <div>
                    <span>Guild: 50%</span>
                    <span className="ml-3">&bull; Scholar: 50%</span>
                  </div>
                </div>
              </div>
              <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0">
                Edit Listing
              </button>
            </div>

            {/* mid content */}
            <div className=" flex justify-center mt-10">

              {/* content-1 */}
              <div className="">
                <img src={Fish1} alt="" />
                <ul>
                  <li className="flex"><img src={FishIcon} alt="/" /><span className="text-white ml-6">Confused</span></li>
                  <li className="flex"><img src={FishIcon2} alt="/" /><span className="text-white ml-6">Rice</span></li>
                  <li className="flex"><img src={FishIcon3} alt="/" /><span className="text-white ml-5">Ronin</span></li>
                  <li className="flex"><img src={FishIcon4} alt="/" /><span className="text-white ml-5">Axie Kiss</span></li>
                </ul>
              </div>

              {/* content-2 */}
              <div className="">
                <img src={Fish2} alt="" />
                <ul>
                  <li className="flex"><img src={FishIcon} alt="/" /><span className="text-white ml-6">Confused</span></li>
                  <li className="flex"><img src={FishIcon2} alt="/" /><span className="text-white ml-6">Rice</span></li>
                  <li className="flex"><img src={FishIcon3} alt="/" /><span className="text-white ml-5">Ronin</span></li>
                  <li className="flex"><img src={FishIcon4} alt="/" /><span className="text-white ml-5">Axie Kiss</span></li>
                </ul>
              </div>

              {/* content-3 */}
              <div className="">
                <img src={Fish3} alt="" />
                <ul>
                  <li className="flex"><img src={FishIcon} alt="/" /><span className="text-white ml-6">Confused</span></li>
                  <li className="flex"><img src={FishIcon2} alt="/" /><span className="text-white ml-6">Rice</span></li>
                  <li className="flex"><img src={FishIcon3} alt="/" /><span className="text-white ml-5">Ronin</span></li>
                  <li className="flex"><img src={FishIcon4} alt="/" /><span className="text-white ml-5">Axie Kiss</span></li>
                </ul>
              </div>

            </div>

            {/* bottom content */}
            <div className=" mt-16">
              <h1 className=" text-yellow-400 text-lg mb-1 uppercase font-bungee">Additional info</h1>
              <ul className=" w-9/12">
                <li className="text-white">&bull; Due to a flood of applications, they decided to take on applicants through referral from the current scholars.</li>
                <li className="text-white">&bull; Can message them on Facebook to leave your basic info for future reference.</li>
              </ul>
              <h1 className=" text-yellow-400 text-lg mb-1 uppercase mt-6 font-bungee">application requirements</h1>
              <ul className=" w-9/12">
                <li className="text-white">&bull; Join daily events and earn boxy coins every 9:30PM GMT+8 on discord then redeem a Pegaxy Scholarship</li>
                <li className="text-white">&bull; If already an Axie scholar for BOXY, the one with highest MMR during the competitions will get a Pegaxy scholarship</li>
                <li className="text-white">&bull; Be updated on their social media or here in our Discord server for main events that gives instant scholarship</li>
              </ul>

            </div>
          </div>
          {/*--- tab 1 end ---*/}

          {/*--- tab 2  ---*/}
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">

            {/* applicants content */}
            <div className="block md:flex justify-between px-6 py-8">
              <div className="flex">
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  role="tablist"
                >
                  <img className="rounded-xl w-32 h-full" src={dp} alt="/" />
                </a>
                <div className=" text-white ml-8">
                  <span className=" bg-red-500 py-1 px-2 rounded-md text-xs">New</span><span className=" uppercase ml-2 text-sm font-extrabold text-yellow-400 font-bungee">Joshua dela cruz</span>
                  <p className="my-2">Philippines</p>
                  <div className="flex ">
                    <a href="/" className=" bg-bg py-1 px-4 rounded-xl flex"><FaDiscord className="place-self-center mr-1 text-blue-400" />Roshanjill#1947</a>
                    <a href="/" className="ml-3 bg-bg py-1 px-4 rounded-xl flex "><FaTwitter className="place-self-center mr-1 text-blue-400" />@leokras</a>
                  </div>
                  <div className=" mt-3 flex">
                    <span className="flex"><img className="h-[28px] w-[28px] rounded-xl mr-2" src={ProfileIcon1} alt="/" /> Guild: Yield Guild Game</span>
                    <span className="ml-4 flex"><img className="h-[26px] w-[28px] rounded-md mr-2" src={ProfileIcon2} alt="" /> Top game: Axie Infinity</span>
                  </div>
                </div>
              </div>

              <div className=" flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-center text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0 flex">
                  Action
                  <ChevronDownIcon className=" w-6 h-7 ml-3" />
                </button>
              </div>
            </div>
            {/* applicants content end */}

            {/* applicants content2  */}
            <div className="block md:flex justify-between py-8 border-y-2 border-bg px-6 pt-8">
              <div className="flex">
                <img className="rounded-xl w-32" src={Avatar} alt="/" />
                <div className=" text-white ml-8">
                  <span className=" bg-red-500 py-1 px-2 rounded-md text-xs">New</span><span className=" uppercase ml-2 text-sm font-extrabold text-yellow-400 font-bungee">Gonzalo Joshua</span>
                  <p className="my-2">Philippines</p>
                  <div className="flex ">
                    <a href="/" className=" bg-bg py-1 px-4 rounded-xl flex"><FaDiscord className="place-self-center mr-1 text-blue-400" />Roshanjill#1947</a>
                    <a href="/" className="ml-3 bg-bg py-1 px-4 rounded-xl flex "><FaTwitter className="place-self-center mr-1 text-blue-400" />@leokras</a>
                  </div>
                  <div className=" mt-3 flex">
                    <span className="flex"><img className="h-[28px] w-[28px] rounded-xl mr-2" src={ProfileIcon1} alt="/" /> Guild: Yield Guild Game</span>
                    <span className="ml-4 flex"><img className="h-[26px] w-[28px] rounded-md mr-2" src={ProfileIcon2} alt="" /> Top game: Axie Infinity</span>
                  </div>
                </div>
              </div>

              <div className=" flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-center text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0 flex">
                  Action
                  <ChevronDownIcon className=" w-6 h-7 ml-3" />
                </button>
              </div>
            </div>
            {/* applicants content2 end */}

            {/* applicants content3  */}
            <div className="block md:flex justify-between py-8 border-y-2 border-bg px-6 pt-8">
              <div className="flex">
                <img className="rounded-xl w-32" src={Avatar2} alt="/" />
                <div className=" text-white ml-8">
                  <span className=" bg-red-500 py-1 px-2 rounded-md text-xs">New</span><span className=" uppercase ml-2 text-sm font-extrabold text-yellow-400 font-bungee">alysha degracia</span>
                  <p className="my-2">Philippines</p>
                  <div className="flex ">
                    <a href="/" className=" bg-bg py-1 px-4 rounded-xl flex"><FaDiscord className="place-self-center mr-1 text-blue-400" />Roshanjill#1947</a>
                    <a href="/" className="ml-3 bg-bg py-1 px-4 rounded-xl flex "><FaTwitter className="place-self-center mr-1 text-blue-400" />@leokras</a>
                  </div>
                  <div className=" mt-3 flex">
                    <span className="flex"><img className="h-[28px] w-[28px] rounded-xl mr-2" src={ProfileIcon1} alt="/" /> Guild: Yield Guild Game</span>
                    <span className="ml-4 flex"><img className="h-[26px] w-[28px] rounded-md mr-2" src={ProfileIcon2} alt="" /> Top game: Axie Infinity</span>
                  </div>
                </div>
              </div>

              <div className=" flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-center text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0 flex">
                  Action
                  <ChevronDownIcon className=" w-6 h-7 ml-3" />
                </button>
              </div>
            </div>
            {/* applicants content3 end */}

            {/* applicants content4  */}
            <div className="block md:flex justify-between py-8 border-y-2 border-bg px-6 pt-8">
              <div className="flex">
                <img className="rounded-xl w-32" src={Avatar3} alt="/" />
                <div className=" text-white ml-8">
                  <span className=" bg-red-500 py-1 px-2 rounded-md text-xs">New</span><span className=" uppercase ml-2 text-sm font-extrabold text-yellow-400 font-bungee">angel bernila</span>
                  <p className="my-2">Philippines</p>
                  <div className="flex ">
                    <a href="/" className=" bg-bg py-1 px-4 rounded-xl flex"><FaDiscord className="place-self-center mr-1 text-blue-400" />Roshanjill#1947</a>
                    <a href="/" className="ml-3 bg-bg py-1 px-4 rounded-xl flex "><FaTwitter className="place-self-center mr-1 text-blue-400" />@leokras</a>
                  </div>
                  <div className=" mt-3 flex">
                    <span className="flex"><img className="h-[28px] w-[28px] rounded-xl mr-2" src={ProfileIcon1} alt="/" /> Guild: Yield Guild Game</span>
                    <span className="ml-4 flex"><img className="h-[26px] w-[28px] rounded-md mr-2" src={ProfileIcon2} alt="" /> Top game: Axie Infinity</span>
                  </div>
                </div>
              </div>

              <div className=" flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-center text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0 flex">
                  Action
                  <ChevronDownIcon className=" w-6 h-7 ml-3" />
                </button>
              </div>
            </div>
            {/* applicants content4 end */}

            {/* applicants content5  */}
            <div className="block md:flex justify-between py-8 border-y-2 border-bg px-6 pt-8">
              <div className="flex">
                <img className="rounded-xl w-32" src={dp} alt="/" />
                <div className=" text-white ml-8">
                  <span className=" bg-red-500 py-1 px-2 rounded-md text-xs">New</span><span className=" uppercase ml-2 text-sm font-extrabold text-yellow-400 font-bungee">joshua angelo</span>
                  <p className="my-2">Philippines</p>
                  <div className="flex ">
                    <a href="/" className=" bg-bg py-1 px-4 rounded-xl flex"><FaDiscord className="place-self-center mr-1 text-blue-400" />Roshanjill#1947</a>
                    <a href="/" className="ml-3 bg-bg py-1 px-4 rounded-xl flex "><FaTwitter className="place-self-center mr-1 text-blue-400" />@leokras</a>
                  </div>
                  <div className=" mt-3 flex">
                    <span className="flex"><img className="h-[28px] w-[28px] rounded-xl mr-2" src={ProfileIcon1} alt="/" /> Guild: Yield Guild Game</span>
                    <span className="ml-4 flex"><img className="h-[26px] w-[28px] rounded-md mr-2" src={ProfileIcon2} alt="" /> Top game: Axie Infinity</span>
                  </div>
                </div>
              </div>

              <div className=" flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-center text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0 flex">
                  Action
                  <ChevronDownIcon className=" w-6 h-7 ml-3" />
                </button>
              </div>
            </div>
            {/* applicants content5 end */}

          </div>
          {/*--- tab 2 end ---*/}

          {/* inner tab 3 */}
          <div className={openTab === 3 ? "block px-6 py-8" : "hidden"} id="link3">
            {/* top content */}
            <div className="block md:flex justify-between">
              <ChevronLeftIcon className=" w-8 h-8 place-self-center text-white" />
              <div className=" flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 place-self-center text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="text-white py-2 px-4 border-2 border-border-color rounded-lg bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-11 place-self-center mt-4 md:mt-0 flex">
                  Action
                  <ChevronDownIcon className=" w-6 h-7 ml-3" />
                </button>
              </div>
            </div>

            <div className=" bg-[#282830] rounded-lg py-6  px-5 mt-12">
              <div className=" grid grid-cols-6 gap-1">
                <div className="col-span-1">
                  <img className="rounded-xl w-32" src={dp} alt="/" />
                </div>
                <div className="flex col-span-5">
                  <div className=" text-white ml-4">
                    <div className="flex justify-between">
                      <div className=" uppercase text-sm font-extrabold text-yellow-400 font-bungee">Gonzalo Joshua</div>
                      <div className="flex">
                        <button className="text-white py-[3px] px-3 border-2 border-border-color rounded-md bg-gradient-to-r from-[#7A5834]  to-[#4A4039] h-8  mt-4 md:mt-0 flex text-sm">
                          Share Profile
                        </button>
                        <PencilIcon className=" w-7 h-7 ml-3 text-white hover:cursor-pointer" />
                      </div>
                    </div>
                    <p>Philippines</p>
                    <p className="my-2 text-sm">I am cool but not the coolest man you’ve seen before, cool as cool so cool the sun freezes in the midst of my presence cool </p>
                    <div className="flex ">
                      <a href="/" className=" py-1 px-4 flex"><FaDiscord className="place-self-center mr-1 text-blue-400" />Roshanjill#1947</a>
                      <a href="/" className="ml-4 py-1 px-4 flex "><FaTwitter className="place-self-center mr-1 text-blue-400" />@leokras</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-6 grid grid-cols-2 gap-1">
                <span className=" col-span-1 flex justify-between border-2 border-border-color rounded-lg py-2 px-3">
                  <p className="text-white">Guild: <br />Yield Guild Game</p>
                  <img className="h-[46px] w-[46px] rounded-md" src={ProfileIcon1} alt="/" />
                </span>
                <span className="ml-4 col-span-1 flex justify-between border-2 border-border-color rounded-lg py-2 px-3">
                  <p className="text-white">Top game: <br />Axie Infinity</p>
                  <img className="h-[46px] w-[46px] rounded-md " src={ProfileIcon2} alt="" />
                </span>
              </div>
            </div>
            {/* top content end */}

            {/* mid content */}
            <div className=" my-6">
              <h1 className=" uppercase text-white text-lg font-bungee">experience</h1>
            </div>

            <div className=" bg-[#282830] rounded-lg py-6  px-5">
              <div className="flex">
                <img src={Cite} alt="/" />
                <div className=" text-white ml-4">
                  <h1 className=" text-yellow-400 text-2xl mb-1 font-bungee">ABP CRIT BEAST</h1>
                  <div>
                    <span>Yield Guild Games</span>
                    <span className="ml-3">&bull; Highest MMR: 2.823</span>
                    <span className="ml-3"><span className="text-white">&bull; </span>July 2021 - Sept 2021</span>
                  </div>
                </div>
              </div>
              <div className=" px-0 lg:px-24 pt-4 lg:pt-0 ">
                <p className="text-white pb-4">
                  Was playing at YGG and then became a trainer due to my good performance. Was playing at
                  YGG and then became a trainer due to my good performance. Was playing at YGG and then
                  became a trainer due to my good performance.
                </p>
                <img className="pb-5" src={img217} alt="" />
              </div>

              <div className="flex mt-10">
                <img src={Cite} alt="/" />
                <div className=" text-white ml-4">
                  <h1 className=" text-yellow-400 text-2xl mb-1 font-bungee">ABP CRIT BEAST</h1>
                  <div>
                    <span>Yield Guild Games</span>
                    <span className="ml-3">&bull; Highest MMR: 2.823</span>
                    <span className="ml-3"><span className="text-white">&bull; </span>July 2021 - Sept 2021</span>
                  </div>
                </div>
              </div>
              <div className=" px-0 lg:px-24 pt-4 lg:pt-0 ">
                <p className="text-white pb-4">
                  Was playing at YGG and then became a trainer due to my good performance. Was playing at
                  YGG and then became a trainer due to my good performance. Was playing at YGG and then
                  became a trainer due to my good performance.
                </p>
                <img src={img217} alt="" />
              </div>
            </div>
            {/* mid content end */}

            {/* lower content */}
            <div className=" my-6">
              <h1 className=" uppercase text-white text-lg font-bungee">tournament badges</h1>
            </div>
            <div className=" bg-[#282830] rounded-lg py-6  px-5">
              <div className="grid grid-cols-6 gap-1">
                <div className=" text-white flex col-start-1 col-end-6 ">
                  <div>
                    <img src={Cite} alt="/" />
                  </div>
                  <div className=" ml-4">
                    <h1 className=" text-yellow-400 text-2xl mb-1 font-bungee">ABP CRIT BEAST</h1>
                    <span>Yield Guild Games</span>
                    <span className="ml-3">&bull; Highest MMR: 2.823</span>
                    <span className="ml-3"><span className="text-white">&bull; </span>July 2021 - Sept 2021</span>
                    <div>
                      <p className=" pb-4 pt-4">Finished the tournament in 8th place among other SEA players.
                  Tournament badge shown here.</p>
                    </div>
                  </div>
                </div>
                <div className=" col-start-3 col-span-2 lg:col-start-6 lg:col-end-6">
                  <img className=" w-full h-full" src={infinix} alt="/" />
                </div>
              </div>
            </div>
            {/* lower content end */}

          </div>
          {/* inner tab 3 ends */}

        </div>
        {/* tabs right side end */}

      </div>
      {/*--- tabs end ---*/}


    </div>
  );
};

export default Main;