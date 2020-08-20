import React, { useEffect, useState } from "react";

function GenericForm({ inputs, onSuccess }: any) {
  const [formInputs, setFormInputs] = useState([]);
  const [values, setValues] = useState({});

  useEffect(() => {
    setFormInputs(inputs);
  }, [inputs]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`submitting value ${JSON.stringify(values)}`);
    onSuccess(values);
  };

  const handleInputChange = (index: number, event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const getInputs = (inputs: string[], values: any, handleInputChange: any) => {
    return inputs.map((inputName: string, index: number) => {
      return (
        <div key={`input-${index}`}>
          <label>
            {inputName}
            <input
              type="text"
              name={inputName}
              value={values[inputName]}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {getInputs(formInputs, values, handleInputChange)}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default GenericForm;
