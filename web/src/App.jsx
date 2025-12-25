import React from "react";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Digital Persona Generator</h1>
      <p>Answer a few questions and generate your persona bundle.</p>
      <Avatar seed="example-seed" />
    </div>
  );
}
