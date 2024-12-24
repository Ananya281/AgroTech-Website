import React, { createContext, useState } from "react";

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState("default");
  return (
    <CursorContext.Provider value={[cursorType, setCursorType]}>
      {children}
    </CursorContext.Provider>
  );
};
