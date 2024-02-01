import { useState } from "react";
import UserInput from "./components/UserInput";
import AnnualTable from "./components/AnnualTable";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(event) {
    const currname = event.target.name;
    const currvalue = event.target.value;
    setValues((prev) => {
      return { ...prev, [currname]: +currvalue };
    });
  }

  return (
    <>
      <UserInput values={values} onChange={handleChange} />
      {values.duration > 0 ? (
        <AnnualTable values={values} />
      ) : (
        <p className="center">Please enter valid input data</p>
      )}
    </>
  );
}

export default App;
