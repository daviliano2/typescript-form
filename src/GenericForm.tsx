import React, { useEffect, useState } from "react";

function GenericForm({ inputs, onSuccess }: any) {
  const [formInputs, setFormInputs] = useState([]);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setFormInputs(inputs);
  }, [inputs]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSuccess(values);
    setValues({});
  };

  const validateName = (name: string, value: string) => {
    if (name === "name") {
      const regex = "wooga\\.\\w{2,}";
      const foundInString = value.match(regex);

      !foundInString
        ? setErrors(
            "Name must start with 'wooga.' and contain 2 or more characters."
          )
        : setErrors("");
    }
  };

  const handleInputChange = (event: any) => {
    validateName(event.target.name, event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const getInputs = (inputs: string[], values: any, handleInputChange: any) => {
    return inputs.map((inputName: string, index: number) => {
      return (
        <div key={`input-${index}`}>
          <label>
            {inputName}{" "}
            <input
              type="text"
              name={inputName}
              value={values[inputName] || ""}
              onChange={(event) => handleInputChange(event)}
            />
            <div>{inputName === "name" && errors}</div>
          </label>
        </div>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {getInputs(formInputs, values, handleInputChange)}
      {!errors && <input type="submit" value="Submit" />}
    </form>
  );
}

export default GenericForm;
