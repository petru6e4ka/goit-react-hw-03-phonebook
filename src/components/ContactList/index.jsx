import PropTypes from 'prop-types';
import { ContactListBlock } from './styles';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListBlock>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={deleteContact} value={contact.id}>
            Delete
          </button>
        </li>
      ))}
    </ContactListBlock>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
