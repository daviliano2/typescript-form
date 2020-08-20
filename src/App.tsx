import React, { useState } from "react";
import "./App.css";
import GenericForm from "./GenericForm";

function App() {
  const [formState, setFormState] = useState();

  console.log(`value of Form State: ${JSON.stringify(formState)}`);

  return (
    <div className="App">
      <header className="App-header">
        <GenericForm
          inputs={["userName", "position"]}
          onSuccess={(newState: any) => setFormState(newState)}
        />
      </header>
    </div>
  );
}

export default App;
