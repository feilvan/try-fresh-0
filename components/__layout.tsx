/** @jsx h */
import { h, VNode } from "preact";
import { tw } from "@twind";

// deno-lint-ignore no-explicit-any
export default function Layout(props: { children: VNode<any> }) {
    return (
        <div class={tw`flex flex-1 flex-col p-4 w-full h-screen my-0 mx-auto bg-black text-white font-mono`}>
            {props.children}
            <div class={tw`flex flex-col justify-center items-center`}>
                <span>©{new Date().getFullYear()} truclr</span>
            </div>
        </div>
    )
}
