import PropTypes from 'prop-types';
import { Button, Input } from '../styles';
import { ContactFormBlock } from './styles';

export const ContactForm = ({
  name,
  number,
  handleAddingContact,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <ContactFormBlock onSubmit={handleAddingContact}>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
        value={name}
      />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
        value={number}
      />
      <Button type="submit">Add contact</Button>
    </ContactFormBlock>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleAddingContact: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
};
