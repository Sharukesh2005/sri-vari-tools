import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "919790871792";

  const message =
    "Hello Sri Vari Tools, I'm interested in your products. Please provide more details.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="white"
      >
        <path d="M16.01 3C8.84 3 3 8.76 3 15.88c0 2.51.73 4.95 2.11 7.04L3 29l6.29-2.05a13.1 13.1 0 006.72 1.83h.01C23.18 28.78 29 23.02 29 15.9 29 8.76 23.18 3 16.01 3zm0 23.36c-2.08 0-4.12-.56-5.91-1.62l-.42-.25-3.74 1.22 1.23-3.64-.28-.44a10.28 10.28 0 01-1.6-5.52c0-5.71 4.68-10.36 10.43-10.36 5.74 0 10.42 4.65 10.42 10.36 0 5.72-4.68 10.37-10.43 10.37zm5.71-7.78c-.31-.16-1.82-.89-2.1-.99-.28-.1-.48-.16-.68.16-.2.31-.78.99-.96 1.19-.18.2-.35.23-.66.08-.31-.16-1.3-.48-2.48-1.54-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.47.14-.62.14-.14.31-.35.47-.53.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.79.39-.28.31-1.03 1-.1 2.44.93 1.44 2.66 4.12 6.45 5.78.9.39 1.6.62 2.15.79.9.29 1.71.25 2.35.15.72-.11 1.82-.74 2.08-1.45.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.37z"/>
      </svg>

      <span className="tooltip">Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;