import css from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "User name must be at least ${min} characters!")
    .max(50, "User name must be less than ${max} characters!")
    .required("User name is required!"),
  number: Yup.string()
  .min(3, "User name must be at least ${min} characters!")
  .max(50, "User name must be less than ${max} characters!")
  .required("Required!"),  
});
const INITIAL_FORM_DATA = {
  name: "",
  number: "",
  };

const ContactForm = ({ addContact }) => {
  const handleSubmit = (data, formActions) => {
    console.log(data);
      addContact(data);
      formActions.resetForm();
    };  

  return (
    <Formik
      validationSchema={ContactFormSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
    <Form className={css.formBox} >
      <label className={css.labelBox}>
      <span>Name</span>
      <Field
        type="text"
        name="name"
      />
      <ErrorMessage
            className={css.errorMsg}
            name="name"
            component="span"
          />
      </label>
      <label className={css.labelBox}>
      <span>Number</span>
      <Field
        type="text"
        name="number"
      />
      <ErrorMessage
            className={css.errorMsg}
            name="number"
            component="span"
          />
      </label>
      <button className={css.buttonadd} type="submit" title="Click to save new contact"
          aria-label="Add new contact">Add contact</button>
    </Form>
    </Formik>
  );
};


export default ContactForm

