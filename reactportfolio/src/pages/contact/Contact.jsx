const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the following channels:</p>

      <li>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/danielharding1"
          target="_blank"
          rel="noopener noreferrer"
        >
          DanielHarding1
        </a>
      </li>
      <li>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/daniel-harding-103387234/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daniel Harding - LinkedIn
        </a>
      </li>
      <li>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:danielharding2008@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          danielharding2008@gmail.com
        </a>
      </li>
    </div>
  );
};

export default Contact;
