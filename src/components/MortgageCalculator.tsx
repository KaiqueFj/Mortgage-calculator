import { useMortgageContext } from "../context/MortgageContext";

type MortgageType = "Repayment" | "Interest Only";

export default function MortgageCalculator() {
  const {
    mortgage,
    setMortgage,
    mortgageTerm,
    setMortgageTerm,
    mortgageInterestRate,
    setMortgageInterestRate,
    setMonthlyRepayment,
    setTotalRepayment,
    resetValues,
  } = useMortgageContext();

  // Function to calculate monthly repayment for Repayment mortgage
  const calculateMonthlyRepayment = (mortgageType: MortgageType) => {
    const principal = parseFloat(mortgage);
    const annualRate = parseFloat(mortgageInterestRate) / 100;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = parseInt(mortgageTerm) * 12;

    if (mortgageType === "Repayment") {
      // Repayment Mortgage Calculation
      const monthlyRepayment =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      return parseFloat(monthlyRepayment.toFixed(2));
    } else {
      // Interest-Only Mortgage Calculation
      const monthlyRepayment = principal * monthlyRate;
      return parseFloat(monthlyRepayment.toFixed(2));
    }
  };

  // Function to calculate total repayment based on mortgage type
  const calculateTotalRepayment = (mortgageType: MortgageType) => {
    const monthlyRepayment = calculateMonthlyRepayment(mortgageType);
    const totalRepayment = monthlyRepayment * parseInt(mortgageTerm) * 12;
    return totalRepayment.toFixed(2);
  };

  function handleCalculate() {
    const selectedMortgageType = document.querySelector<HTMLInputElement>(
      'input[name="mortgage-type"]:checked'
    )?.value;

    if (
      selectedMortgageType === "Repayment" ||
      selectedMortgageType === "Interest Only"
    ) {
      const monthly = calculateMonthlyRepayment(selectedMortgageType);
      const total = calculateTotalRepayment(selectedMortgageType);

      setMonthlyRepayment(monthly);
      setTotalRepayment(parseFloat(total));
    } else {
      console.error("Invalid mortgage type selected");
    }
  }

  function handleClearAll() {
    resetValues();

    // Reset selected radio button
    const selectedRadio = document.querySelector(
      'input[name="mortgage-type"]:checked'
    ) as HTMLInputElement;
    if (selectedRadio) selectedRadio.checked = false;
  }

  return (
    <div className="flex flex-col flex-grow w-full h-full max-w-xl gap-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-3xl font-semibold text-gray-800">
          Mortgage Calculator
        </h3>
        <span
          className="text-sm text-gray-500 underline cursor-pointer"
          onClick={handleClearAll}
        >
          Clear all
        </span>
      </div>

      <div className="relative flex flex-col gap-3">
        <span className="text-base text-gray-600">Mortgage amount</span>
        <span className="text-gray-500 absolute bottom-0 left-0 bg-gray-300 rounded-sm px-3 py-3.5">
          R$
        </span>
        <input
          type="text"
          placeholder="100,000"
          className="relative p-3 pl-12 text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMortgage(e.target.value)}
          value={mortgage}
        />
      </div>

      <div className="flex flex-row gap-6">
        <div className="relative flex flex-col">
          <label className="text-gray-600 text-base mb-1.5">
            Mortgage Term
          </label>
          <input
            type="text"
            className="p-3 pl-2 pr-12 text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setMortgageTerm(e.target.value)}
            value={mortgageTerm}
          />
          <span className="text-gray-500 absolute bottom-0 right-0.5 bg-gray-300 rounded-sm px-3 py-3.5">
            years
          </span>
        </div>

        <div className="relative flex flex-col">
          <label className="text-gray-600 text-base mb-1.5">
            Interest Rate
          </label>
          <input
            type="text"
            className="p-3 pl-2 pr-12 text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setMortgageInterestRate(e.target.value)}
            value={mortgageInterestRate}
          />
          <span className="text-gray-500 absolute bottom-0 right-0.5 bg-gray-300 rounded-sm px-3 py-3.5">
            %
          </span>
        </div>
      </div>

      <label className="text-base text-gray-600">Mortgage Type</label>
      <div className="flex gap-4">
        <label className="flex items-center px-4 py-3 font-medium text-gray-600 border-2 border-gray-300 rounded-md">
          <input
            type="radio"
            name="mortgage-type"
            value="Repayment"
            className="mr-2"
          />
          Repayment
        </label>
        <label className="flex items-center px-4 py-3 font-medium text-gray-600 border-2 border-gray-300 rounded-md">
          <input
            type="radio"
            name="mortgage-type"
            value="Interest Only"
            className="mr-2"
          />
          Interest Only
        </label>
      </div>

      <button
        onClick={handleCalculate}
        className="px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Calculate
      </button>
    </div>
  );
}
