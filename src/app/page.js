"use client";

import { StyledMainContainer } from "@/common/styles";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <img src="/dev-cover.png" />
        <h3>Just type your username and watch the magic</h3>
      </div>
    </main>
  );
}
