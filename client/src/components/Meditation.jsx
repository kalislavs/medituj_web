import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaSync } from "react-icons/fa";

const Meditations = () => {
  const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
  };
  const INITIAL_COUNT = 300;
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [secondsRemaining, setSecondsRemaining] = useState(300);
  const [meditationStarted, setMeditationStarted] = useState(false);
  const handleStart = () => {
    setStatus(STATUS.STARTED);
    setMeditationStarted(true);
  };
  const handleStop = () => {
    setStatus(STATUS.STOPPED);
  };
  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
    setMeditationStarted(false);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );
  const handleChange = (event) => {
    console.log(event);
    setSecondsRemaining(event.target.value);
  };
  return (
    <div id="meditations" className=" flex items-center justify-center py-32">
      <div className="flex flex-col items-center justify-center p-16 w-3/4  bg-primary rounded-3xl mx-auto drop-shadow-custom">
        <h1 className="md:text-3xl text-xl font-bold text-danger text-center drop-shadow-lg py-8">
          Dopraj si pár minút ticha a sleduj svoje pocity...
        </h1>
        <div className="h-32">
          {meditationStarted ? (
            <h1 className="text-2xl font-bold text-danger drop-shadow-lg py-4 mx-4 ">
              {new Date(secondsRemaining * 1000).toISOString().slice(11, 19)}
            </h1>
          ) : (
            <div className="flex items-center">
              <h1 className="md:text-xl text-sm font-bold text-danger drop-shadow-lg py-4 mx-4 ">
                Dĺžka meditácie:
              </h1>
              <select
                id="timeOfMeditation"
                className="mx-4 rounded-full h-8 w-32 text-center bg-danger"
                onChange={handleChange}
              >
                <option value={300}>5 min</option>
                <option value={600}>10 min</option>
                <option value={900}>15 min</option>
                <option value={1200}>20 min</option>
                <option value={1800}>30 min</option>
                <option value={3600}>1 hod</option>
              </select>
            </div>
          )}
        </div>
        <div className="flex items-center justify-around md:w-1/2 w-3/4">
          <button
            className="flex items-center  justify-center w-16 h-16 my-2 mr-2 bg-danger p-2 rounded-full cursor-pointer hover:bg-secondary text-primary"
            onClick={status === STATUS.STOPPED ? handleStart : handleStop}
          >
            {status === STATUS.STOPPED ? <FaPlay /> : <FaPause />}
          </button>

          <button
            className="flex items-center  justify-center w-16 h-16 my-2 ml-2 bg-danger p-2 rounded-full cursor-pointer hover:bg-secondary text-primary"
            onClick={handleReset}
          >
            <FaSync />
          </button>
        </div>
      </div>
    </div>
  );
};

// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export default Meditations;
