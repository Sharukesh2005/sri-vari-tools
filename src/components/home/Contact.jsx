import "../../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Us</h2>

      <p className="contact-title">
        We'd love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-box">
          <h3>📍 Address</h3>
          <p>Chennai, Tamil Nadu</p>
        </div>

        <div className="contact-box">
          <h3>📞 Phone</h3>
          <p>+91 9790871792</p>
        </div>

        <div className="contact-box">
          <h3>📧 Email</h3>
          <p>sharujai2000@gmail.com</p>
        </div>

        <div className="contact-box">
          <h3>🕒 Business Hours</h3>
          <p>Monday - Saturday</p>
          <p>9:00 AM - 7:00 PM</p>
        </div>

      </div>

      <a
  href="https://maps.google.com"
  target="_blank"
  rel="noopener noreferrer"
  className="map-btn"
>
  Open Google Maps
</a>

    </section>
  );
}

export default Contact;