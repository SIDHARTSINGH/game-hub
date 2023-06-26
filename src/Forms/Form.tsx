import React, { FormEvent, HTMLInputTypeAttribute, useRef } from "react";

const Form = () => {
  // useRef() : Hook
  // reference DOM elements/objects : initialize refObject with null

  //   useRef<TypeOfElement>(null) : tell typescript compiler the specific type of element
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    // prevent default behavior :
    // on form submittion : form is posted to the server : full page reload
    event.preventDefault();

    // nameRef.current - DOM element referencing
    // if (nameRef.current !== null) console.log(nameRef.current.value);

    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
