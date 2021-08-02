import React, { useState } from "react";
import "./ScolarshipCard.css";
import DetailModal from "../DetailModal/DetailModal";
import logo from '../../images/logo-unip.jpeg'

function CardFuncionario({ scholarship, i }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="card-main-container col-3 card m-4"
      style={{ width: "19rem", minHeight: "18rem" }}
      key={i}
    >
      <div className="card-body">
        <div className="mb-3 d-flex justify-content-center">
          {/* image url is not working, this downloaded image is being used instead */}
          <img
            src={logo}
            alt="logo universidade"
            style={{ maxHeight: "9rem" }}
          />
        </div>

        <div className="d-flex justify-content-center mb-2">
          <div className="card-name card-title h4">
            <strong>{scholarship.course.name}</strong>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <div className="card-title h5">
            {scholarship.campus.city}
          </div>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <div className="card-title h5">
            {scholarship.full_price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
        <div className="btn btn-primary" onClick={() => setShowModal(true)}>
          Detalhes
        </div>
      </div>
      <DetailModal
        className="modal-container"
        show={showModal}
        handleClose={() => setShowModal(false)}
        data={scholarship}
      >
        <div className="row">
          
          <div className="col-7">
          <h2>{scholarship.course.name}</h2>
          <h4>{scholarship.course.kind}</h4>
          </div>
        </div>
      </DetailModal>
    </div>
  );
}

export default CardFuncionario;
