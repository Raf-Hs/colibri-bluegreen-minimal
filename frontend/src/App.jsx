import useVersion from "./useVersion";

function App() {
  const version = useVersion();

  return (
    <div style={{
      background: version === "BLUE" ? "#3fa9f5" : "#7ed957",
      color: "white",
      padding: "20px",
      fontSize: "20px",
      textAlign: "center"
    }}>
      <h1>Ambiente activo: {version}</h1>

      {/* CONTENIDO NORMAL DE LA APP */}
    </div>
  );
}

export default App;
