"use client";

import { Starfield } from "./components/Starfield";
import { Scene1Hero } from "./components/Scene1Hero";
import { Scene2About } from "./components/Scene2About";
import { Scene3Skills } from "./components/Scene3Skills";
import { Scene4Projects } from "./components/Scene4Projects";
import { Scene5Leadership } from "./components/Scene5Leadership";
import { Scene6Achievements } from "./components/Scene6Achievements";
import { Scene7Contact } from "./components/Scene7Contact";

export default function Page() {
  return (
    <main className="relative" style={{ maxHeight: '100%', overflow: 'hidden' }}>
      {/* Background layer - Starfield with lower z-index */}
      <div className="absolute inset-0 z-0" style={{ minHeight: '100%' }}>
        <Starfield />
      </div>

      {/* Foreground layer - Scene container with higher z-index */}
      <div className="relative z-10" style={{ overflow: 'visible' }}>
        <Scene1Hero />
        <Scene2About />
        <Scene3Skills />
        <Scene4Projects />
        <Scene5Leadership />
        <Scene6Achievements />
        <Scene7Contact />
      </div>
    </main>
  );
}
