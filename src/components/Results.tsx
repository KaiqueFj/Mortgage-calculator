import { useMortgageContext } from "../context/MortgageContext";

export default function ResultsContainer() {
  const { monthlyRepayment, totalRepayment, mortgageTerm } =
    useMortgageContext();

  // Function to format currency in R$ with proper commas and decimals
  const formatCurrency = (amount: number): string => {
    return `R$ ${amount.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="flex flex-col gap-6 p-8 bg-gray-800 rounded-xl shadow-lg w-full max-w-xl flex-grow h-full">
      <div className="flex flex-col justify-between items-start mb-4 gap-2">
        <h3 className="text-3xl text-slate-100 font-semibold">Your results</h3>
        <p className="text-base text-slate-200">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click 'calculate repayments
          again' .
        </p>
      </div>

      <div className="flex flex-col gap-7 bg-gray-700 p-4 border-2 border-t-4 border-b-gray-300 border-t-gray-600 rounded-md">
        <span className="text-slate-200 text-base">
          Your monthly repayments
        </span>
        <span className="text-white text-4xl font-bold cursor-pointer">
          {monthlyRepayment
            ? formatCurrency(Number(monthlyRepayment))
            : "R$ 0,00"}
        </span>

        <div className="w-full h-1 bg-gray-500"></div>

        <div className="flex flex-col gap-1">
          <p className="text-base text-slate-200">
            Total you will repay over the term of {mortgageTerm} years
          </p>
          <span className="text-white text-md font-bold cursor-pointer">
            {totalRepayment
              ? formatCurrency(Number(totalRepayment))
              : "R$ 0,00"}
          </span>
        </div>
      </div>
    </div>
  );
}
