import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    this.props.onSubmit(this.state);
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onSubmit: PropTypes.func,
};
