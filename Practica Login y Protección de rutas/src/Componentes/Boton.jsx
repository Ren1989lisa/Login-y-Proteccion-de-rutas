const StylesButtonPrimary = {
  backgroundColor: "#2e15bd",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "30px",
  margin: "10px",
  color: "white",
  cursor: "pointer",
}

const StylesButtonSecondary = {
  backgroundColor: "#bdb215",
  border: "none",
  borderRadius: "5px",
  widthMinimum: "10px",
  height: "30px",
  margin: "10px",
  color: "black",
  cursor: "pointer",
}

function Button({
  type = "primary",
  text = "NO TEXT DEFINED",
  action = () => alert("NO ACTION DEFINED")
}) {
  return (
    <button
      style={
        type === "primary"
        ? StylesButtonPrimary
        : StylesButtonSecondary
        }
      onClick={action}
    >
      {text}
    </button>
  );
}

export default Button;