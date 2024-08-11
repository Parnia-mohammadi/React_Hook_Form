function Form() {
  return (
    <>
      <p>Contact Us </p>
      <form id="form">
        <label htmlFor="name">First Name </label>
        <input required type="text" id="name" />
        <label htmlFor="lastName">Last Name </label>
        <input required type="text" id="lastName" />
        <label htmlFor="email">Email </label>
        <input required type="email" name="Email" id="email" />
        <p>Query Type </p>
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
        <label htmlFor="message">Message</label>
        <input required type="text" name="message" id="message" />
        <input required type="checkbox" name="consent" id="consent" />
        <label htmlFor="consent">
          I consent to being contacted by the team
        </label>
        <input required type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
