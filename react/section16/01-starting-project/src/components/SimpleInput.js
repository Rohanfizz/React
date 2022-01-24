import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const nameValidation = (name) => {
    return name.trim() !== "";
  };

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    value: enteredName,
    valueIsValid:nameIsValid,
    showError: showNameError,
    onChangeHandler: nameOnChangeHandler,
    onBlurHandler: nameOnBlurHandler,
    reset: resetNameInput,
  } = useInput(nameValidation);

  const {
    value: enteredEmail,
    valueIsValid:emailIsValid,
    showError: showEmailError,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  let formIsValid =false;
  if(nameIsValid && emailIsValid) formIsValid = true;



  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail,enteredName);
    resetEmailInput();
    resetNameInput();
  };

  const nameInputClasses = `form-control ${showNameError && "invalid"}`;
  const emailInputClasses = `form-control ${showEmailError && "invalid"}`;


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameOnChangeHandler}
          onBlur={nameOnBlurHandler}
        />

        {showNameError && <p>Enter Valid Name</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your EMAIL</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailOnChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {showEmailError && <p>Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
        {/* <input type="submit" disabled={!formIsValid}/> */}
      </div>
    </form>
  );
};

export default SimpleInput;
