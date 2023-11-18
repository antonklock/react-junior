"use client";

import Image from "next/image";
import { GameArea } from "../components/GameArea";

const countries = [
  {
    name: "Sweden",
    capital: "Stockholm",
  },
  {
    name: "Norway",
    capital: "Oslo",
  },
  {
    name: "Finland",
    capital: "Helsinki",
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>The capital game</h1>
      <GameArea countries={countries} />
    </main>
  );
}
