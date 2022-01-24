import { useState } from "react";

const useMyInput = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const onChangeHandler = (event) => {
    setIsTouched(true);
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
      console.log('reset called');
    setIsTouched(false);
    setEnteredValue("");
  };
  const errorState = isTouched && !valueIsValid;


  return {
    value: enteredValue,
    valueIsValid,
    errorState,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useMyInput;