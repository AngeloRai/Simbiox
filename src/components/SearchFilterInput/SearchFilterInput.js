import * as Yup from "yup";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './SearchFilterInput.css'
import InputFeedback from "../InputFeedback";

function SerachFilterInput(props) {

  //sets the validations for the Formik form used in the search bar
  const searchValidation = Yup.object().shape({
    city: Yup.string().max(100).required("Por favor informe uma cidade"),
    price: Yup.string().matches(
      /^[0-9]+$/,
      "Permitido apenas dígitos numéricos"
    ),
    course: Yup.string().matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
      "Permitido apenas letras "
    ),
  });
  
  return (
    <div>
      <Formik
        initialValues={{
          city: "",
          price: "",
          course: "",
        }}
        validationSchema={searchValidation}
        onSubmit={ (values, { setSubmitting }) => {
           //when search button is clicked the filter function is called in the ListSchaloarships component        
           props.filterScholarships(values)
                   
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <div className="row">
              <div className="form-field col-5 col-lg-3 form-group m-1">
                <label htmlFor="serachCity">Cidade</label>
                <Field
                  placeholder="Cidade..."
                  type="text"
                  className={`fields form-control ${
                    errors.city && touched.city ? "is-invalid" : "is-valid"
                  }`}
                  id="serachCity"
                  name="city"
                />
                <ErrorMessage
                  name="city"
                  render={(msg) => (
                    <InputFeedback invalid={errors.city && touched.city}>
                      {msg}
                    </InputFeedback>
                  )}
                />
              </div>
              <div className="col-5 col-lg-3 form-field form-group m-1">
                <label htmlFor="serachPrice">Preço</label>
                <Field
                  placeholder="Preço..."
                  type="number"
                  className={`fields form-control ${
                    errors.price && touched.price ? "is-invalid" : "is-valid"
                  }`}
                  id="serachPrice"
                  name="price"
                />
                <ErrorMessage
                  name="price"
                  render={(msg) => (
                    <InputFeedback invalid={errors.course && touched.course}>
                      {msg}
                    </InputFeedback>
                  )}
                />
              </div>
              <div className="col-5 col-lg-3 form-field form-group m-1">
                <label htmlFor="serachCourse">Curso</label>
                <Field
                  placeholder="Curso..."
                  type="text"
                  className={`fields form-control ${
                    errors.course && touched.course ? "is-invalid" : "is-valid"
                  }`}
                  id="serachCourse"
                  name="course"
                />
                <ErrorMessage
                  name="course"
                  render={(msg) => (
                    <InputFeedback invalid={errors.course && touched.course}>
                      {msg}
                    </InputFeedback>
                  )}
                />
              </div>
              <div className="col-1 pt-1 mt-4">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  disabled={isSubmitting}
                >
                  <div>
                    {isSubmitting ? <span>Loading</span> : <span>BUSCAR</span>}
                  </div>
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SerachFilterInput;
