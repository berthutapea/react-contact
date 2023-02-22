import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem
                        key={contact.id}
                        id={contact.id}
                        onDelete={onDelete}
                        {...contact} />
                ))
            }
        </div>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList;