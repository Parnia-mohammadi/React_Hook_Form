function Form() {
  return (
    <div
      className="w-1/2 border-black border-solid border-1 rounded-lg
     bg-white flex-col justify-center items-center"
    >
      <h1 className="text-xl font-bold">Contact Us </h1>
      <form id="form" className="flex flex-col justify-center items-center">
        <div>
          <label htmlFor="name">First Name *</label>
          <br />
          <input
            required
            type="text"
            id="name"
            className="border-black border-1 border-solid rounded-md"
          />
          <label htmlFor="lastName">Last Name *</label>
          <br />
          <input
            required
            type="text"
            id="lastName"
            className="w-1/2 border-black border-1 border-solid rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address *</label>
          <input required type="email" name="Email" id="email" />
        </div>
        <div>
          <p>Query Type *</p>
          <input
            required
            type="radio"
            name="query"
            id="general"
            value="General Enquery"
          />
          <label htmlFor="general">General Enquery</label>
          <input required type="radio" name="query" id="support" />
          <label htmlFor="support">Support Request</label>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <input required type="text" name="message" id="message" />
        </div>
        <div>
          <input required type="checkbox" name="consent" id="consent" />
          <label htmlFor="consent">
            I consent to being contacted by the team
          </label>
        </div>
        <input
          required
          type="submit"
          value="Submit"
          className="bg-emerald-700 text-white w-full"
        />
      </form>
    </div>
  );
}

export default Form;
