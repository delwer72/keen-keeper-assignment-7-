"use client";

import { createContext, useState } from "react";

// 1. Create Context
export const AppContext = createContext();

// 2. Provider Component
export default function AppProvider({ children }) {
  const [friends, setFriends] = useState([]);

  // example function
  const addFriend = (friend) => {
    setFriends([...friends, friend]);
  };

  return (
    <AppContext.Provider value={{ friends, setFriends, addFriend }}>
      {children}
    </AppContext.Provider>
  );
}