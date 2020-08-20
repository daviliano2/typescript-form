import React, { useState } from "react";
import "./App.css";
import GenericForm from "./GenericForm";

function App() {
  const [formState, setFormState] = useState({});
  const [userInputs, setUserInputs] = useState("");
  const [inputsToForm, setInputsToForm] = useState(["name"]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormState({});
    const inputsArray = userInputs.split(",");
    setInputsToForm(inputsArray);
  };

  const showValues = (values: {}) => {
    const parsedValues = [];
    for (const [key, value] of Object.entries(values)) {
      parsedValues.push(`${key} - ${value}`);
    }

    return parsedValues.map((value: string, index: number) => (
      <div key={`value-${index}`}>{value}</div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <p>Add Form inputs comma separated style (name,position,age)</p>
          <label>
            Form Inputs
            <input
              type="text"
              name="inputs"
              value={userInputs}
              onChange={(event) => setUserInputs(event.target.value)}
            />
          </label>
          <input type="submit" value="Add Inputs" />
        </form>
        <br />
        <GenericForm
          inputs={inputsToForm}
          onSuccess={(newState: any) => setFormState(newState)}
        />
        <br />
        <p>Submitted values:</p>
        <div>{showValues(formState)}</div>
      </header>
    </div>
  );
}

export default App;
