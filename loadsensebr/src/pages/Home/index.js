import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Home({ children }) {
  return (
    <div className="h-full">
      <Header />
      <div className="flex justify-between h-[91.2%]">
        <Sidebar />
        <div className=" w-4/5 h-full">{children}</div>
      </div>
    </div>
  );
}

export default Home;
