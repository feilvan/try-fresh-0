/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`flex flex-1 flex-col p-4 w-full h-screen my-0 mx-auto bg-black text-white font-mono`}>
      <div class={tw`flex flex-col flex-1 justify-center items-center`}>
        <img src="/images/dino.svg" alt="Chromium T-rex"/>
	      <span class=" font-bold pt-8">rraawwrr!</span>
      </div>
      <div class={tw`flex flex-col justify-center items-center`}>
        <span>©{new Date().getFullYear()} truclr</span>
      </div>
    </div>
  );
}
