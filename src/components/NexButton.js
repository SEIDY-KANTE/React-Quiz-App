import { useQuiz } from "../context/QuizContext";
import Button from "./Button";

function NexButton() {
  const { numQuestions, index, answer } = useQuiz();

  if (answer === null) return null;

  const isFinish = numQuestions === index + 1;

  return (
    <Button type={isFinish ? "finish" : "nextQuestion"}>
      {isFinish ? "Finish" : "Next"}
    </Button>
  );
}

export default NexButton;
