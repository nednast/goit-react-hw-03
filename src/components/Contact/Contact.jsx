import css from "./Contact.module.css";
const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <div className={css.container}>
        <div>
          <p>👤{name}</p>
          <p>📞{number}</p>
        </div>
        <button className={css.delete} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
