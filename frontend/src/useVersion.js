import { useEffect, useState } from "react";

export default function useVersion() {
  const [version, setVersion] = useState("Cargando...");

  useEffect(() => {
    fetch("/version.txt")
      .then((res) => res.text())
      .then((text) => setVersion(text.trim().toUpperCase()))
      .catch(() => setVersion("DESCONOCIDA"));
  }, []);

  return version;
}
