function App() {
  return <MortgageContainer />;
}

function MortgageContainer() {
  return (
    <div className="ml-auto mr-auto p-8 flex gap-8 flex-row justify-center items-center bg-gray-50 min-h-screen">
      <MortgageCalculator />
      <ResultsContainer />
    </div>
  );
}

function MortgageCalculator() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-xl">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-3xl text-gray-800 font-semibold">
          Mortgage Calculator
        </h3>
        <span className="text-gray-500 text-sm underline cursor-pointer">
          Clear all
        </span>
      </div>

      <div className="flex flex-col gap-3 relative">
        <span className="text-gray-600">Mortgage amount</span>
        <span className="text-gray-500 absolute bottom-0 left-0 bg-gray-300 rounded-sm px-3 py-3.5">
          R$
        </span>
        <input
          type="text"
          placeholder="100,000"
          className="text-gray-800 p-3 pl-12 border-2 relative border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-row gap-6">
        <div className="flex flex-col relative">
          <label className="text-gray-600 mb-1.5">Mortgage Term</label>
          <input
            type="text"
            className="text-gray-800 p-3 border-2 border-gray-300 rounded-md pl-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500 absolute bottom-0 right-0.5 bg-gray-300 rounded-sm px-3 py-3.5">
            years
          </span>
        </div>

        <div className="flex flex-col relative">
          <label className="text-gray-600 mb-1.5">Interest Rate</label>
          <input
            type="text"
            className="text-gray-800 p-3 border-2 border-gray-300 rounded-md pl-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500 absolute bottom-0 right-0.5 bg-gray-300 rounded-sm px-3 py-3.5">
            %
          </span>
        </div>
      </div>

      <label className="text-gray-600 text-base">Mortgage Type</label>

      <div className="flex gap-4">
        <label className="text-gray-600 flex items-center px-4 py-3 font-medium border-2 border-gray-300 rounded-md">
          <input
            type="radio"
            name="mortgage-type"
            value="Repayment"
            className="mr-2"
          />
          Repayment
        </label>

        <label className="text-gray-600 flex items-center px-4 py-3 font-medium border-2 border-gray-300 rounded-md">
          <input
            type="radio"
            name="mortgage-type"
            value="interest-only"
            className="mr-2"
          />
          Interest Only
        </label>
      </div>

      <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4">
        Calculate type
      </button>
    </div>
  );
}

function ResultsContainer() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-xl">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-3xl text-gray-800 font-semibold">
          Mortgage Calculator
        </h3>
        <span className="text-gray-500 text-sm underline cursor-pointer">
          Clear all
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-gray-600">Mortgage amount</span>
        <input
          type="text"
          placeholder="R$ 100,000"
          className="text-gray-800 p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-row gap-6">
        <div className="flex flex-col relative">
          <label className="text-gray-600 mb-1.5">Mortgage Term</label>
          <input
            type="text"
            className="text-gray-800 p-3 border-2 border-gray-300 rounded-md pl-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500 absolute bottom-0 right-0.5 bg-gray-300 rounded-sm px-3 py-3.5">
            years
          </span>
        </div>

        <div className="flex flex-col relative">
          <label className="text-gray-600 mb-1.5">Interest Rate</label>
          <input
            type="text"
            className="text-gray-800 p-3 border-2 border-gray-300 rounded-md pl-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500 absolute bottom-1 right-2 bg-white rounded-sm px-3 py-2">
            %
          </span>
        </div>
      </div>

      <label className="text-gray-600 text-base">Mortgage Type</label>

      <div className="flex gap-4">
        <label className="text-gray-600 flex items-center px-4 py-3 font-medium border-2 border-gray-300 rounded-md">
          <input
            type="radio"
            name="mortgage-type"
            value="Repayment"
            className="mr-2"
          />
          Repayment
        </label>

        <label className="text-gray-600 flex items-center px-4 py-3 font-medium border-2 border-gray-300 rounded-md">
          <input
            type="radio"
            name="mortgage-type"
            value="interest-only"
            className="mr-2"
          />
          Interest Only
        </label>
      </div>

      <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4">
        Calculate type
      </button>
    </div>
  );
}

export default App;
