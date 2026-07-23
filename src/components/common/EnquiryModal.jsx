import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/EnquiryModal.css";

function EnquiryModal({
  isOpen,
  onClose,
  productName,
  selectedSize,
}) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      name: formData.name,
      company: formData.company,
      phone: formData.phone,
      email: formData.email,
      product: productName,
      size: selectedSize,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mbd7yu3",
        "template_wfltwdo",
        templateParams,
        "UYogWZjr_kSXygifW"
      )
      .then(() => {
        alert("✅ Enquiry Sent Successfully!");

        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });

        onClose();
      })
      .catch(() => {
        alert("❌ Failed to send enquiry.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="modal-title">
          Product Enquiry
        </h2>

        <div className="product-info-card">

          <h3>Selected Product</h3>

          <div className="info-row">
            <span>Product</span>
            <strong>{productName}</strong>
          </div>

          <div className="info-row">
            <span>Selected Size</span>
            <strong>{selectedSize}</strong>
          </div>

        </div>

        <form
          className="enquiry-form"
          onSubmit={sendEmail}
        >

          <div className="form-group">
            <label>Name *</label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone *</label>

            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="button-group">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="send-btn"
              type="submit"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default EnquiryModal;