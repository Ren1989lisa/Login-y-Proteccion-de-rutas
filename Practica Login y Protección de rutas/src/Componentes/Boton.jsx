function Button({
  type = "primary",
  text = "NO TEXT DEFINED",
  action = () => alert("NO ACTION DEFINED")
}) {
  return (
    <button
      className={`boton-${type}`}
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;