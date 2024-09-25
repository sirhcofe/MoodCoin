import Image from "next/image";
import { poppins, bebasneue } from "./fonts";

export default function Home() {
  return (
    <div
      className={`${poppins.variable} ${bebasneue.variable} w-screen h-screen overflow-hidden`}
    >
      <p>Hello</p>
      <p className="font-bebasneue">World</p>
    </div>
  );
}
