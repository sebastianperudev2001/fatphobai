"use client";
import React from "react";
import Popup from "./components/Popup";
import { Dashboard } from "@/components/Dashboard";
import Tabledata from "./components/Tabledata";

const page = () => {
  return (
    <>
      <Dashboard>
        <Popup />
        <Tabledata />
      </Dashboard>
    </>
  );
};

export default page;
