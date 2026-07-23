import "../../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-about">
          <h2>Sri Vari Tools</h2>
          <p>
            Precision Engineered. Performance Guaranteed.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📞 +91 9790871792</p>
          <p>📧 sharujai2000@gmail.com</p>
          <p>📍 Chennai, Tamil Nadu</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Sri Vari Tools. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;