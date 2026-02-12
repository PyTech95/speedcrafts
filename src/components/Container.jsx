import React from "react";

export default function Container({ children, className = "" }) {
  return <div className={`mx-auto w-[92vw] max-w-6xl ${className}`}>{children}</div>;
}
