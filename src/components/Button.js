function Button({ children, dispatch, type }) {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: type })}>
      {children}
    </button>
  );
}

export default Button;
