import useMyInput from "../hooks/my-use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFname,
    valueIsValid: fNameIsValid,
    errorState: fNameError,
    onChangeHandler: fNameOnChange,
    onBlurHandler: fNameOnBlur,
    reset: resetFName,
  } = useMyInput((name) => name.trim().length > 0);

  const {
    enteredValue: enteredLname,
    valueIsValid: lNameIsValid,
    errorState: lNameError,
    onChangeHandler: lNameOnChange,
    onBlurHandler: lNameOnBlur,
    reset: resetLName,
  } = useMyInput((name) => name.trim().length > 0);

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    errorState: emailError,
    onChangeHandler: emailOnChange,
    onBlurHandler: emailOnBlur,
    reset: resetEmail,
  } = useMyInput(emailValidation);

  let formIsValid = false;
  if (emailIsValid && fNameIsValid && lNameIsValid) formIsValid = true;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    console.log("asd");
    resetFName();
    resetLName();
    resetEmail();
  };

  const fnameClasses = fNameError ? "form-control invalid" : "form-control ";
  const lnameClasses = lNameError ? "form-control invalid" : "form-control ";
  const emailClasses = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={fnameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFname}
            onChange={fNameOnChange}
            onBlur={fNameOnBlur}
          />
        </div>
        <div className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLname}
            onChange={lNameOnChange}
            onBlur={lNameOnBlur}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailOnChange}
          onBlur={emailOnBlur}
        />
      </div>
      {fNameError && <p>Enter Valid Name</p>}
      {lNameError && <p>Enter Valid LName</p>}
      {emailError && <p>Enter Valid Email</p>}
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
