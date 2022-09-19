import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { BlockContainer } from './styles';
import { nanoid } from 'nanoid';
import { contacts } from 'service/storage';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
  filter: '',
};

export class App extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
    this.handleAddingContact = this.handleAddingContact.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  componentDidMount() {
    const createdContacts = contacts.get();

    if (createdContacts) {
      this.setState(() => {
        return {
          contacts: [...createdContacts],
        };
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (!this.state.contacts.length) {
      contacts.remove();
      return;
    }

    if (this.state.contacts.length !== prevState.contacts.length) {
      contacts.set(this.state.contacts);
    }
  }

  handleAddingContact(evt) {
    evt.preventDefault();

    if (!evt.target.checkValidity()) {
      return;
    }

    if (this.state.contacts.find(elem => elem.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
      this.setState(() => {
        return {
          name: '',
          number: '',
        };
      });
      return;
    }

    this.setState(prevState => {
      return {
        name: '',
        number: '',
        contacts: [
          ...prevState.contacts,
          { name: prevState.name, id: nanoid(), number: prevState.number },
        ],
      };
    });
  }

  handleNameChange(evt) {
    this.setState(() => {
      return { name: evt.target.value };
    });
  }

  handleNumberChange(evt) {
    this.setState(() => {
      return { number: evt.target.value };
    });
  }

  handleFilterChange(evt) {
    this.setState(() => {
      return { filter: evt.target.value };
    });
  }

  filterContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  }

  deleteContact(evt) {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          elem => elem.id !== evt.target.value
        ),
      };
    });
  }

  render() {
    const { name, number, filter } = this.state;

    return (
      <BlockContainer>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          handleAddingContact={this.handleAddingContact}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </BlockContainer>
    );
  }
}
