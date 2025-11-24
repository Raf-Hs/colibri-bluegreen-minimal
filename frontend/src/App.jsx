import './App.css';

function App() {
  const color = import.meta.env.VITE_COLOR;

  const background = color === "BLUE" ? "#1E90FF" : "#6DDA6D";

  return (
    <div style={{
      backgroundColor: background,
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "60px",
      fontWeight: "bold",
      color: "white"
    }}>
      Ambiente activo: {color}
    </div>
  );
}

export default App;
