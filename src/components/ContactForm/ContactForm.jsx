import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <div className={css.contactformWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <p>
            <b>Name</b>
          </p>
          <Field type="text" name="name" />
          <p className={css.number}>
            <b>Number</b>
          </p>
          <Field type="text" name="number" />
          <button className={css.submit} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
