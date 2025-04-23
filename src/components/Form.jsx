function Form() {
  const handleSubmit = (e) => {
    e.preventDefaultValue();
    console.log(e);
  };
  return (
    <div
      className="w-1/2 border-black border-solid border-1 rounded-lg
     bg-white flex-col justify-center items-center p-[3%] gap-y-4"
    >
      <h1 className="text-xl font-bold my-4">Contact Us </h1>
      <form
        id="form"
        className="flex flex-wrap gap-x-2 gap-y-2 "
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* FirstName */}
        <div className="flex-1 w-full">
          <label htmlFor="name">First Name *</label>
          <br />
          <input
            required
            type="text"
            id="name"
            className="px-3 w-full border-gray-400 border-[1px] border-solid rounded-md"
          />
        </div>
        {/* LastName */}
        <div className="flex-1 w-full">
          <label htmlFor="lastName">Last Name *</label>
          <br />
          <input
            required
            type="text"
            id="lastName"
            className="px-3 w-full border-gray-400 border-[1px] border-solid rounded-md"
          />
        </div>
        {/* email */}
        <div className=" w-full">
          <label htmlFor="email">Email Address *</label>
          <input
            required
            type="email"
            name="Email"
            id="email"
            className="px-3 w-full border-gray-400 border-[1px] border-solid rounded-md"
          />
        </div>
        {/* query */}
        <p className=" w-full">Query Type *</p>
        <div className="flex flex-row justify-start items-center flex-nowrap flex-1 gap-x-4">
          <div className="w-1/2 border-[1px] border-gray-400 border-solid rounded-md p-4">
            <input
              required
              type="radio"
              name="query"
              id="general"
              value="General Enquery"
            />
            <label htmlFor="general"> General Enquery</label>
          </div>
          <div className="w-1/2 border-[1px] border-gray-400 border-solid rounded-md p-4">
            <input required type="radio" name="query" id="support" />
            <label htmlFor="support"> Support Request</label>
          </div>
        </div>
        {/* Message */}
        <div className=" w-full mb-4">
          <label htmlFor="message">Message *</label>
          <br />
          <input
            required
            type="text"
            name="message"
            id="message"
            className="px-3 border-gray-400 border-[1px] border-solid rounded-md h-full w-full"
          />
        </div>
        {/* checkbox */}
        <div className=" w-full my-4">
          <input required type="checkbox" name="consent" id="consent" />
          <label htmlFor="consent">
            <span> I consent to being contacted by the team</span>
          </label>
        </div>
        <input
          required
          type="submit"
          value="Submit"
          className="bg-emerald-700 text-white w-full rounded-lg py-[3%]"
        />
      </form>
    </div>
  );
}

export default Form;
