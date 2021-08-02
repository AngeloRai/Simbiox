import React from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import "./DetailModal.css";
import logo from "../../images/logo-unip.jpeg";

function ConfirmationModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Body>
        <Container>
          <Row>
            <Col centered="true" md={12} lg={5}>
              {/* image url is not working, this downloaded image is being used instead */}
              <img
                src={logo}
                alt="foto funcionario"
                style={{ maxWidth: "16rem" }}
                className="detail-logo"
              />
            </Col>
            <Col md={12} lg={7}>
              <div centered>
                <h2 className="title">{props.data.course.name}</h2>
                <h4 className="sub-title">{props.data.course.kind}</h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="border-right p-1 " md={12} lg={6}>
              <div className="d-flex justify-content-center my-2">
                Universidade:&nbsp;{" "}
                <strong>{props.data.university.name}</strong> &nbsp;/ Nota:
                &nbsp;<strong> {props.data.university.score}</strong>
              </div>
            </Col>
            <Col className=" p-1 " md={12} lg={6}>
              <div className="d-flex justify-content-center my-2">
                Campus: &nbsp;<strong>{props.data.campus.name}</strong> &nbsp;/
                Cidade:&nbsp;
                <strong>{props.data.campus.city}</strong>
              </div>
            </Col>
            <Col className="border py-2 my-2" md={12} lg={12}>
              Preço:{" "}
              <strong>
                {props.data.full_price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
