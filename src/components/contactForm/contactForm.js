import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";
import { Form, Button } from "./contactForm.styles";
import ContactFormLabeledInput from "../contactFormLabeledInput";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    e.preventDefault();
    const isOnList = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isOnList) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };
  const onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        console.log("Mistake in switch!");
        break;
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <ContactFormLabeledInput
        htmlFor="name"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onInputChange}
      />
      <ContactFormLabeledInput
        htmlFor="number"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onInputChange}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
