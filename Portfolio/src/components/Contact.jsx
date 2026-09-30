import { useState } from 'react';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);

    setIsSubmitted(true);

    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">

        <div className="section-heading">
          <h2>Get In <span>Touch</span></h2>
          <p>Have a project in mind? Let's talk about it.</p>
        </div>

        <div className="contact__content">

          <div className="contact__info">
            <h3>Let's work together</h3>
            <p>
              I'm currently open to freelance projects and full-time opportunities.
              Feel free to reach out — I'll get back to you within 24 hours.
            </p>
            <ul className="contact__details">
              <li>
                <span className="contact__detail-icon">📧</span>
                <span>khachanedevanshu@gmail.com</span>
              </li>
              <li>
                <span className="contact__detail-icon">📍</span>
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          <div className="contact__form-wrapper">

            {isSubmitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  className="btn btn--outline"
                  onClick={() => setIsSubmitted(false)}
                  type="button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (

              <form className="contact__form" onSubmit={handleSubmit} noValidate>

                <div className="form-group">

                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="form-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-input ${errors.subject ? 'form-input--error' : ''}`}
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="form-error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                    placeholder="Tell me about your project or inquiry... (min 20 characters)"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn--primary contact__submit">
                  Send Message 🚀
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
