import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./Schema";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSchema } from "./ZodSchema";

function ReactHookForm() {
  const [validator, setValidator] = useState("yup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver:
      validator === "yup" ? yupResolver(schema) : zodResolver(zodSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      general: false,
      support: false,
      message: "",
      consent: false,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="w-1/2 border-black border-solid border-1 rounded-lg
           bg-white flex-col justify-center items-center p-[3%] gap-y-4"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold my-4">Contact Us </h1>
        <div>
          <button
            onClick={() => setValidator(validator === "yup" ? "zod" : "yup")}
          >
            change validator
          </button>
          <p className="text-sm text-center">{`Validator: ${validator}`}</p>
        </div>
      </div>
      <form
        id="form"
        className="flex flex-wrap gap-x-2 gap-y-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* FirstName */}
        <div className="flex-1 w-full">
          <label htmlFor="name">First Name *</label>
          <br />
          <input
            type="text"
            id="name"
            className="px-3 w-full border-gray-400 border-[1px] border-solid rounded-md"
            // {...register("name", {
            //   validate: (value) =>
            //     value === "" ? "you should add a character" : true,
            // })}
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        {/* LastName */}
        <div className="flex-1 w-full">
          <label htmlFor="lastName">Last Name *</label>
          <br />
          <input
            type="text"
            id="lastName"
            className="px-3 w-full border-gray-400 border-[1px] border-solid rounded-md"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-600">{errors.lastName.message}</p>
          )}
        </div>
        {/* email */}
        <div className=" w-full">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            name="Email"
            id="email"
            className="px-3 w-full border-gray-400 border-[1px] border-solid rounded-md"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        {/* query */}
        <p className=" w-full">Query Type</p>
        <div className="flex flex-row justify-start items-center flex-nowrap flex-1 gap-x-4">
          <div className="w-1/2 border-[1px] border-gray-400 border-solid rounded-md p-4">
            <input
              type="radio"
              name="query"
              id="general"
              value="General Enquery"
              {...register("query")}
            />
            <label htmlFor="general"> General Enquery</label>
            {errors.general && (
              <p className="text-red-600">{errors.general.message}</p>
            )}
          </div>
          <div className="w-1/2 border-[1px] border-gray-400 border-solid rounded-md p-4">
            <input
              type="radio"
              name="query"
              id="support"
              {...register("query")}
            />
            <label htmlFor="support"> Support Request</label>
            {errors.support && (
              <p className="text-red-600">{errors.support.message}</p>
            )}
          </div>
        </div>
        {/* Message */}
        <div className=" w-full mb-4">
          <label htmlFor="message">Message *</label>
          <br />
          <input
            type="text"
            name="message"
            id="message"
            className="px-3 border-gray-400 border-[1px] border-solid rounded-md h-full w-full"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}
        </div>
        {/* checkbox */}
        <div className=" w-full mt-6 mb-2">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            {...register("consent")}
          />
          <label htmlFor="consent">
            <span> I consent to being contacted by the team</span>
          </label>
          {errors.consent && (
            <p className="text-red-600">{errors.consent.message}</p>
          )}
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-emerald-700 text-white w-full rounded-lg py-[3%]"
        />
      </form>
    </div>
  );
}

export default ReactHookForm;
