"use client";

import React from "react";
import Scene from "./components/Scene";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl p-4 md:p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Azariel Room</h1>
          <p className="text-sm opacity-70">Phase 1 — Chat + Avatar</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* LEFT: Chat */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-3 h-[70vh] flex flex-col">
            {/* your chat UI goes here */}
          </div>

          {/* RIGHT: Avatar Scene */}
          <div className="h-[70vh]">
            <Scene />
          </div>
        </div>
      </div>
    </main>
  );
}
