import MortgageCalculator from "./features/MortgageCalculator";
import ResultsContainer from "./features/Results";

function App() {
  return <MortgageContainer />;
}

function MortgageContainer() {
  return (
    <div className="ml-auto mr-auto flex p-8 flex-row justify-center items-stretch bg-gray-50 min-h-screen">
      <MortgageCalculator />
      <ResultsContainer />
    </div>
  );
}

export default App;
