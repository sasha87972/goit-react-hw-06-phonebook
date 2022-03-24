import { useSelector } from "react-redux";
import Container from "./components/container";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";
import Title from "./components/title";
import Filter from "./components/filter";

const App = () => {
  const filteredItems = useSelector((state) => state.contacts.items);
  return (
    <Container title="Phonebook">
      <ContactForm />
      <Title title="Contacts" />
      <Filter />
      <ContactList items={filteredItems} />
    </Container>
  );
};

export default App;
