"use client"

import { Header, Mainpage,About,Portfolio} from "./components/index";
import { useState } from "react";

export default function Home() {
  const [nav,setNav]=useState("mainpage");
  return (
   <main className="w-screen h-screen overflow-x-hidden flex flex-col">
    <Header setNav={setNav}></Header>
    {nav==="mainpage"&&<Mainpage setNav={setNav}></Mainpage>}
    {nav==="about"&&<About></About>}
    {nav==="portfolio"&&<Portfolio/>}
    
   </main>
  );
}
