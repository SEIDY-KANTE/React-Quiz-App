import { useQuiz } from "../context/QuizContext";
import Button from "./Button";

function StartScreen() {
  const { numQuestions } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>

      <Button type="start">Let's start</Button>
    </div>
  );
}

export default StartScreen;
