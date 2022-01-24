import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formState, setFormState] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = enteredName.trim().length !== 0;
    const enteredStreetIsValid = enteredStreet.trim().length !== 0;
    const enteredPostalIsValid = enteredPostal.trim().length === 6;
    const enteredCityIsValid = enteredCity.trim().length !== 0;

    setFormState({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    if (
      !enteredNameIsValid ||
      !enteredStreetIsValid ||
      !enteredPostalIsValid ||
      !enteredCityIsValid
    )
      return;
    //submit form code
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameInputClasses = `${classes.control} ${
    formState.name ? "" : classes.invalid
  }`;

  const streetInputClasses = `${classes.control} ${
    formState.street ? "" : classes.invalid
  }`;

  const postalInputClasses = `${classes.control} ${
    formState.postal ? "" : classes.invalid
  }`;

  const cityInputClasses = `${classes.control} ${
    formState.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formState.name && <p>Please entered a valid name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formState.street && <p>Please entered a valid street</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formState.postal && <p>Please entered a valid postal</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formState.city && <p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
