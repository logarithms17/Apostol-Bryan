import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Modal from "./Modal";
import { useNavigate, Link } from "react-router-dom";

const ProductsLists = ({ products }) => {
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col
            key={product.id}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Card style={{ height: "100%" }}>
              <Link
                to={`${product.id}`}
                key={product.id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    marginTop: "20px",
                  }}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Footer>
                    <small
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: "17px",
                      }}
                    >
                      ${product.price}
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductsLists;
