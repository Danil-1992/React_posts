import React from "react";

declare const __APP_VERSION__: string;
declare const __APP_NAME__: string;

export default function Navbar(): React.JSX.Element {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>{__APP_NAME__}</div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <p style={{ textDecoration: "none", color: "#333" }}>Главная</p>
        <a href="/posts" style={{ textDecoration: "none", color: "#333" }}>
          Посты
        </a>
        <p style={{ textDecoration: "none", color: "#333" }}>О нас</p>

        <span
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            padding: "0.25rem 0.5rem",
            borderRadius: "4px",
            fontSize: "0.8rem",
            marginLeft: "1rem",
          }}
        >
          v {__APP_VERSION__}
        </span>
      </div>
    </nav>
  );
}
