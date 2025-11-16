import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export function RoleProvider({ children }) {
  const [role, setRole] = useState("guest");

  function loginAsPlayer() {
    setRole("player");
  }

  function loginAsCoach() {
    setRole("coach");
  }

  function logoutRole() {
    setRole("guest");
  }

  return (
    <RoleContext.Provider value={{ role, loginAsPlayer, loginAsCoach, logoutRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}