import { FieldValues, useForm } from "react-hook-form";

// Form Validation

// TypeSafety : define the shape of the form
interface FormData {
  name: string;
  age: number;
}

// Manage form with React useForm() Hook
const Form = () => {
  // formState : errors : Show validation messages to the user
  // formState : isValid : is the form valid or not
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    // useForm : handleSumit(SubmitHandler) :
    // SubmitHandler : (data) => {}
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Standard HTML attrs. for DataValidation
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* name? : optional chaining
         * errors object can be empty,
         * in that case, we cannot access the name property
         * evaluated only when theres a name property else ignored */}
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name field must be 5 chars</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {/* Disable the button if the form is not valid */}
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
