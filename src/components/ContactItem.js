import React from 'react';
import PropType from 'prop-types';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

ContactItem.propType = {
    imageUrl: PropType.string.isRequired,
    name: PropType.string.isRequired,
    tag: PropType.string.isRequired,
    id: PropType.number.isRequired,
    onDelete: PropType.func.isRequired,
};

export default ContactItem;