import React, { FC } from "react";
import "./Loader.css";

export interface ILoaderProps {
  color?: "blue" | "white";
}

export const Loader: FC<ILoaderProps> = ({ color = "blue" }) => (
  <div className="loader" data-color={color}>
    <div className="loader-item"></div>
    <div className="loader-item"></div>
    <div className="loader-item"></div>
  </div>
);
