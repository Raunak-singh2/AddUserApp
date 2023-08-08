import React from "react";
import classes from "./AddContact.css";

function AddContact(props) {
  const contacrNameRef = React.useRef("");
  const contactNumRef = React.useRef("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const contact={
        contactName:contacrNameRef.current.value,
        contactNum:contactNumRef.current.value,
    }
    contacrNameRef.current.value=" ";
    contactNumRef.current.value=" ";
    props.onAddContact(contact);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control">
        <label htmlFor="ContactName" className="lables">
          Contact Name
        </label>
        <input
          type="text"
          placeholder="raunak...."
          id="ContactName"
          ref={contacrNameRef}
        />
      </div>
      <div className="control">
        <label htmlFor="ContactName" className="lables">
          Contact Name
        </label>
        <input
          type="number"
          minLength="10 "
          maxLength="10"
          placeholder="10 Digits"
          id="ContactNum"
          ref={contactNumRef}
        />
      </div>
      <button className="btn">+Save</button>
    </form>
  );
}

export default AddContact;
