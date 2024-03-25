import css from "./Contact.module.css";
const Contact = ({ data: { id, name, number } }) => {
  return (
    <>
      <div className={css.container}>
        <div>
          <p>👤{name}</p>
          <p>📞{number}</p>
        </div>
        <button className={css.delete}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
