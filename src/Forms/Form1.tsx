import { FormEvent, useState } from "react";

const Form = () => {
  // useState() : Hook
  // [object, updaterFunction] = useState(initialObject)
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* get input fields value - event.target.value */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          // Single Source of Truth
          // Input field always relies on the state variable
          // Controlled COmponent : state is entirely controlled by React
          // Value is not managed by DOM but by React
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
