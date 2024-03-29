import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <div className={css.contactformWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <p>
            <b>Name</b>
          </p>
          <Field type="text" name="name" />
          <ErrorMessage
            className={css.contactValidationError}
            component="p"
            name="name"
          />
          <p className={css.number}>
            <b>Number</b>
          </p>
          <Field type="text" name="number" />
          <ErrorMessage
            className={css.contactValidationError}
            component="p"
            name="number"
          />
          <button className={css.submit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
