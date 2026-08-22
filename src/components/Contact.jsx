import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailSubject = subject || "Portfolio Project Inquiry";

    const mailBody = `
Name: ${name}
Email: ${email}

${message}
    `;

    window.location.href =
      `mailto:suryaravipati556@gmail.com` +
      `?subject=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(mailBody)}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="contact-info">

          <div>
            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's work
              <br />
              together
            </h2>

            <p className="contact-description">
              I'm open to UI/UX and frontend missions, short or
              long-term. Landing page, full product redesign, or
              just a second pair of eyes — let's talk.
            </p>
          </div>

          {/* Contact Links */}

          <div className="contact-links">

            {/* Email */}
            <a
              href="mailto:suryaravipati556@gmail.com"
              className="contact-link"
            >
              <span className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9 6.75-9-6.75"
                  />
                </svg>
              </span>

              <span>
                suryaravipati556@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/surya-ravipati/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </span>

              <span>
                linkedin.com/in/surya-ravipati
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/JayasuryaRavipati"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.003 0c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.824 1.103.824 2.223v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
                </svg>
              </span>

              <span>
                github.com/JayasuryaRavipati
              </span>
            </a>

          </div>
        </div>


        {/* =================================
            RIGHT SIDE FORM
        ================================= */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="form-field">
            <label htmlFor="name">
              Name <span>*</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="your name"
              required
            />
          </div>


          {/* Email */}
          <div className="form-field">
            <label htmlFor="email">
              Email <span>*</span>
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@gmail.com"
              required
            />
          </div>


          {/* Subject */}
          <div className="form-field full-width">
            <label htmlFor="subject">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
            />
          </div>


          {/* Message */}
          <div className="form-field full-width">
            <label htmlFor="message">
              Message <span>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me about your project..."
              required
            />
          </div>


          {/* Button */}
          <div className="submit-wrapper full-width">
            <button type="submit">
              <span>Send message</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default Contact;