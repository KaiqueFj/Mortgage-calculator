import { createContext, useContext, useState } from "react";

type MortgageContextType = {
  mortgage: string;
  setMortgage: (value: string) => void;
  mortgageTerm: string;
  setMortgageTerm: (value: string) => void;
  mortgageInterestRate: string;
  setMortgageInterestRate: (value: string) => void;
  monthlyRepayment: number;
  setMonthlyRepayment: (value: number) => void;
  totalRepayment: number;
  setTotalRepayment: (value: number) => void;
  resetValues: () => void;
};

const initialState = {
  mortgage: "",
  mortgageTerm: "",
  mortgageInterestRate: "",
  monthlyRepayment: 0,
  totalRepayment: 0,
};

const MortgageContext = createContext<MortgageContextType | undefined>(
  undefined
);

export function MortgageProvider({ children }: { children: React.ReactNode }) {
  const [mortgage, setMortgage] = useState(initialState.mortgage);
  const [mortgageTerm, setMortgageTerm] = useState(initialState.mortgageTerm);
  const [mortgageInterestRate, setMortgageInterestRate] = useState(
    initialState.mortgageInterestRate
  );
  const [monthlyRepayment, setMonthlyRepayment] = useState(
    initialState.monthlyRepayment
  );
  const [totalRepayment, setTotalRepayment] = useState(
    initialState.totalRepayment
  );

  const resetValues = () => {
    setMortgage(initialState.mortgage);
    setMortgageTerm(initialState.mortgageTerm);
    setMortgageInterestRate(initialState.mortgageInterestRate);
    setMonthlyRepayment(initialState.monthlyRepayment);
    setTotalRepayment(initialState.totalRepayment);
  };

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
        resetValues, // Provide the reset function
      }}
    >
      {children}
    </MortgageContext.Provider>
  );
}

export function useMortgageContext() {
  const context = useContext(MortgageContext);
  if (!context) {
    throw new Error(
      "useMortgageContext must be used within a MortgageProvider"
    );
  }
  return context;
}
