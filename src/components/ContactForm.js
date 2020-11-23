import { Formik } from "formik";
import fetch from "isomorphic-unfetch";
import React, { useState } from "react";

const ContactForm = () => {
  const [sendProcess, sendForm] = useState("");
  const [formwrap, hideForm] = useState("");

  return (
    <React.Fragment>
      <p>{sendProcess}</p>
      <Formik
        className="start"
        initialValues={{ Email: "", Name: "", Message: "", Phone: "", Address: "" }}
        validate={values => {
          let errors = {};
          const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!values.Email) {
            errors.Email = "Required";
          } else if (!rgx.test(values.Email)) {
            errors.Email = "Invalid email address";
          }
          if (!values.Name) {
            errors.Name = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          sendForm("[sending...]");

          fetch(`${process.env.GATSBY_CONTACT_API}/contact.js`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)})
          .then(response => response.json())
          .then(data => {
            if (!!data.sent) {
              sendForm("[Message Sent...Thanks.]");
              hideForm("formhide");
            }
            if (!!data.error) {
              sendForm("error:" + data.error);
            }
          })
          .catch(er => sendForm("[error sending form...]"));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className={formwrap}>
              <div className="form-group">
                <span>Email *</span>
                <input
                  className="form-control"
                  type="email"
                  name="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Email}
                />
                {errors.Email && touched.Email && errors.Email}
              </div>
              <div className="form-group">
                <span>Name *</span>
                <input
                  className="form-control"
                  type="text"
                  name="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Name}
                />
                {errors.Name && touched.Name && errors.Name}
              </div>
              <div className="form-group">
                <span>Phone</span>
                <input
                  className="form-control"
                  type="text"
                  name="Phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Phone}
                />
              </div>
              <div className="form-group form-group-address">
                <span>Address</span>
                <input
                  className="form-control"
                  type="text"
                  name="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Phone}
                />
              </div>
              <div className="form-group">
                <span>Message</span>

                <textarea
                  className="form-control"
                  name="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Message}
                />
              </div>
              <div>
                <button
                  className="btn btn-primary btn-sm subbut"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <style>{`
        div.formhide {
          display: none;
        }
      `}</style>
    </React.Fragment>
  );
};
export default ContactForm;
