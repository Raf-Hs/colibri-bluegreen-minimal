export default function App() {
  const env = import.meta.env.VITE_ENVIRONMENT;

  const color = env === "green" ? "green" : "blue";

  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        fontSize: "40px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      AMBIENTE: {env.toUpperCase()}
    </div>
  );
}
