"use client";
import { createContext, useContext } from "react";
import { SpringValue } from "@react-spring/web";

export const DockContext = createContext({
  width: 0,
  hovered: false,
  zoomLevel: SpringValue,
  setIsZooming: () => {},
});

export const useDock = () => {
  return useContext(DockContext);
};
