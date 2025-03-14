/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface MortgageContextType {
  mortgage: string;
  setMortgage: React.Dispatch<React.SetStateAction<string>>;
  mortgageTerm: string;
  setMortgageTerm: React.Dispatch<React.SetStateAction<string>>;
  mortgageInterestRate: string;
  setMortgageInterestRate: React.Dispatch<React.SetStateAction<string>>;
  monthlyRepayment: number;
  setMonthlyRepayment: React.Dispatch<React.SetStateAction<number>>;
  totalRepayment: string;
  setTotalRepayment: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with a default value (undefined)
const MortgageContext = createContext<MortgageContextType | undefined>(
  undefined
);

interface MortgageProviderProps {
  children: ReactNode; // Ensure children is typed correctly
}

export const MortgageProvider = ({ children }: MortgageProviderProps) => {
  const [mortgage, setMortgage] = useState<string>("0");
  const [mortgageTerm, setMortgageTerm] = useState<string>("");
  const [mortgageInterestRate, setMortgageInterestRate] = useState<string>("");
  const [monthlyRepayment, setMonthlyRepayment] = useState<number>(0);
  const [totalRepayment, setTotalRepayment] = useState<string>("");

  return (
    <MortgageContext.Provider
      value={{
        mortgage,
        setMortgage,
        mortgageTerm,
        setMortgageTerm,
        mortgageInterestRate,
        setMortgageInterestRate,
        monthlyRepayment,
        setMonthlyRepayment,
        totalRepayment,
        setTotalRepayment,
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
};

// Custom hook to access the MortgageContext
export const useMortgageContext = (): MortgageContextType => {
  const context = useContext(MortgageContext);
  if (!context) {
    throw new Error(
      "useMortgageContext must be used within a MortgageProvider"
    );
  }
  return context;
};
