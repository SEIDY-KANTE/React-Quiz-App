import { useQuiz } from "../context/QuizContext";

function Button({ children, type }) {
  const { dispatch } = useQuiz();

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: type })}>
      {children}
    </button>
  );
}

export default Button;
