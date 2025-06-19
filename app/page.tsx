"use client"

import { Header, Mainpage,About} from "./components/index";
import { useState } from "react";

export default function Home() {
  const [nav,setNav]=useState("mainpage");
  return (
   <main className="w-screen h-screen overflow-x-hidden flex flex-col">
    <Header setNav={setNav}></Header>
    {nav==="mainpage"&&<Mainpage></Mainpage>}
    {nav==="about"&&<About></About>}
    
    
   </main>
  );
}
