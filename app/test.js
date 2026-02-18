import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple Tabs Example</h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setActiveTab("home")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "home" ? "#333" : "#ddd",
            color: activeTab === "home" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          style={{
            padding: "10px",
            backgroundColor: activeTab === "profile" ? "#333" : "#ddd",
            color: activeTab === "profile" ? "#fff" : "#000",
            border: "none",
            cursor: "pointer",
          }}
        >
          Profile
        </button>
      </div>

      {/* Content */}
      <div style={{ marginTop: "20px" }}>
        {activeTab === "home" && <Home />}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
}

function Home() {
  return <h3>This is Home Tab Content</h3>;
}

function Profile() {
  return <h3>This is Profile Tab Content</h3>;
}
