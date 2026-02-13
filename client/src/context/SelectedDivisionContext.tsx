import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedDivisionContextType {
  selectedDivision: string | null;
  setSelectedDivision: (division: string | null) => void;
}

const SelectedDivisionContext = createContext<SelectedDivisionContextType | undefined>(undefined);

export const SelectedDivisionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  return (
    <SelectedDivisionContext.Provider value={{ selectedDivision, setSelectedDivision }}>
      {children}
    </SelectedDivisionContext.Provider>
  );
};

export const useSelectedDivision = () => {
  const context = useContext(SelectedDivisionContext);
  if (!context) {
    throw new Error("useSelectedDivision must be used within a SelectedDivisionProvider");
  }
  return context;
};
