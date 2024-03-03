/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useSound from 'use-sound';
import loaves from '../music/loaves.mp3';
import light from '../music/light.mp3';
import galaxy from '../music/galaxy.mp3';

const Cards = () => {
  const [playSound1, { stop: stopSound1, isPlaying: isPlaying1 }] = useSound(loaves);
  const [playSound2, { stop: stopSound2, isPlaying: isPlaying2 }] = useSound(light);
  const [playSound3, { stop: stopSound3, isPlaying: isPlaying3 }] = useSound(galaxy);

  const [toggleText1, setToggleText1] = useState("Play");
  const [toggleText2, setToggleText2] = useState("Play");
  const [toggleText3, setToggleText3] = useState("Play");

  const pauseSound = (stopFunction, setToggleText) => {
    // Stop the currently playing sound
    if (stopFunction) {
      stopFunction();
    }

    // Change the "Play" button to "Restart"
    setToggleText("Restart");
  };

  return (
    <><h1 className="mb-4 mt-20 text-3xl text-center font-extrabold tracking-tight leading-none  md:text-4xl lg:text-5xl text-white">
      Listen to some of my self made music
    </h1><div className="flex justify-center space-x-4 md:flex-row lg:flex-row xl:flex-row mt-16">
        <div className="flex flex-col items-center md:flex-row lg:flex-row xl:flex-row space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0">
          {/* Card 1 */}
          <div className="max-w-sm   rounded-lg shadow mr-4 bg-gray-800 border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="https://getwallpapers.com/wallpaper/full/b/f/7/1191115-gorgerous-beautiful-wallpapers-hd-2560x1600.jpg" alt="" />
            </a>
            <div className="p-5 flex flex-col items-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Explore some of music tracks</h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className="flex space-x-3 text-center">
                <button
                  onClick={() => {
                    playSound1();
                  } }
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  {toggleText1}
                </button>
                <button
                  onClick={() => pauseSound(stopSound1, setToggleText1)}
                  className="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Pause
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm   rounded-lg shadow mr-4 bg-gray-800 border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="https://getwallpapers.com/wallpaper/full/b/f/7/1191115-gorgerous-beautiful-wallpapers-hd-2560x1600.jpg" alt="" />
            </a>
            <div className="p-5 flex flex-col items-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Explore some of music tracks</h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className="flex space-x-3 text-center">
                <button
                  onClick={() => {
                    playSound2();
                  } }
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  {toggleText2}
                </button>
                <button
                  onClick={() => pauseSound(stopSound2, setToggleText2)}
                  className="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Pause
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm   rounded-lg shadow mr-4 bg-gray-800 border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src="https://getwallpapers.com/wallpaper/full/b/f/7/1191115-gorgerous-beautiful-wallpapers-hd-2560x1600.jpg" alt="" />
            </a>
            <div className="p-5 flex flex-col items-center">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">Explore some of music tracks</h5>
              </a>
              <p className="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <div className="flex space-x-3 text-center">
                <button
                  onClick={() => {
                    playSound3();
                  } }
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  {toggleText3}
                </button>
                <button
                  onClick={() => pauseSound(stopSound3, setToggleText3)}
                  className="inline-flex items-center ml-3 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Pause
                </button>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Cards;