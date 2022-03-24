import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Button } from "./contactList.styles";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const contactsFilter = useSelector((state) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  });

  const dispatch = useDispatch();
  return (
    <>
      <List>
        {contactsFilter.map((item) => (
          <ListItem key={item.id}>
            {item.name} {item.tel}{" "}
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};
ContactList.propTypes = {
  contactsFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    })
  ),
};
export default ContactList;
