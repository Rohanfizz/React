import {useState} from 'react';


const useInput = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const onChangeHandler = (event) => {
    setIsTouched(true);
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () =>{
      setIsTouched(false);
      setEnteredValue('');
  }

  let valueIsValid = validationFn(enteredValue);
  const showError = isTouched && !valueIsValid;

  return {
    value: enteredValue,
    valueIsValid,
    showError,
    onChangeHandler,
    onBlurHandler,
    reset
  };
};

export default useInput;
