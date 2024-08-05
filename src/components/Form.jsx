function Form() {
  return (
    <form>
      <label htmlFor="name">First Name</label>
      <input required type="text" id="name" />
      <label htmlFor="lastName">Last Name</label>
      <input required type="text" id="lastName" />
      <input type="email" name="Email" id="email" />
      <label htmlFor="query"></label>
      <input type="radio" name="general" id="query" />
      <input type="radio" name="support" id="query" />
      <label htmlFor="message">Message</label>
      <input type="text" name="message" id="message" />
      <input type="checkbox" name="consent" id="consent" />
      <label htmlFor="consent">I consent to being contacted by the team</label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
