import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const LS_CONTACTS = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_CONTACTS);
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_CONTACTS, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getAvailableContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const availableContact = this.getAvailableContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={availableContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
