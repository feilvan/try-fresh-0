/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/__layout.tsx"

export default function Home() {
  return (
    <Layout>
      <div class={tw`flex flex-col flex-1 justify-center items-center`}>
        <img src="/images/dino.svg" alt="Chromium T-rex"/>
	      <span class={tw`mt-8`}>rraawwrr!</span>
      </div>
    </Layout>
  );
}
