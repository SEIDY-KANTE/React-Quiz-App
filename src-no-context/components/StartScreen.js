import Button from "./Button";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
     
      <Button dispatch={dispatch} type="start">
        Let's start
      </Button>
      
    </div>
  );
}

export default StartScreen;
