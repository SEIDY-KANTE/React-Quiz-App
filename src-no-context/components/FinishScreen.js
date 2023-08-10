import Button from "./Button";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <span>{points}</span> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}
        %)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <Button dispatch={dispatch} type="restart">
        Restart Quiz
      </Button>
    </>
  );
}

export default FinishScreen;
