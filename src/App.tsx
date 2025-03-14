import MortgageCalculator from "./components/MortgageCalculator";
import ResultsContainer from "./components/Results";

function App() {
  return <MortgageContainer />;
}

function MortgageContainer() {
  return (
    <div className="flex flex-row items-stretch justify-center min-h-screen p-8 ml-auto mr-auto bg-gray-50">
      <MortgageCalculator />
      <ResultsContainer />
    </div>
  );
}

export default App;
