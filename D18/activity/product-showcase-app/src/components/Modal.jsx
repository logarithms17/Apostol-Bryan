import { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Modal = ({ onClose, product }) => {
  console.log("Modal rendered");
  const dialog = useRef(null);

  useEffect(() => {
    const dialogElement = dialog.current;

    if (dialogElement) {
      dialogElement.showModal(); // Open the modal.
    }

    const handleClose = () => {
      if (onClose) {
        onClose(); // Trigger the parent-provided onClose handler.
      }
    };

    // Add a listener for the "close" event.
    dialogElement?.addEventListener("close", handleClose);

    // Cleanup function.
    return () => {
      dialogElement?.removeEventListener("close", handleClose);
    };
  }, [onClose]);

  const handleManualClose = () => {
    dialog.current?.close(); // Manually close the dialog.
  };

  return (
    <dialog
      ref={dialog}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {product.title}
          </Card.Title>
          <Card.Text style={{ fontWeight: "bold" }}>${product.price}</Card.Text>
          <Card.Text
            style={{
              textAlign: "justify",
              height: "100px",
              overflow: "auto",
            }}
          >
            {product.description}
          </Card.Text>
          <Card.Text>Category: {product.category}</Card.Text>

          <button onClick={handleManualClose}>Close</button>
        </Card.Body>
      </Card>
    </dialog>
  );
};

export default Modal;
