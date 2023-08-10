import Button  from "./Button";

function NexButton({ dispatch, numQuestions, index }) {
  const isFinish = numQuestions === index + 1;

  return (
    <Button dispatch={dispatch} type={isFinish ? "finish" : "nextQuestion"}>
      {isFinish ? "Finish" : "Next"}
    </Button>
  );
}

export default NexButton;
