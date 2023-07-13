import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  let minutes = Math.floor(secondsRemaining / 60);
  let seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: `${secondsRemaining === 0 ? "finish" : "tick"}` });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch, secondsRemaining]
  );

  return (
    <div className="timer">
      {minutes > 10 ? minutes : `${minutes}`.padStart(2, "0")}:
      {seconds > 10 ? seconds : `${seconds}`.padStart(2, "0")}
    </div>
  );
}

export default Timer;
