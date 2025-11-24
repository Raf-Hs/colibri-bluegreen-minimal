function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: import.meta.env.VITE_COLOR,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3rem",
      color: "white",
      fontWeight: "bold"
    }}>
      AMBIENTE: {import.meta.env.VITE_ENV}
    </div>
  );
}

export default App;
