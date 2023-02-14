import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
// import ContactList from './ContactList';
// import { getContacts, getData } from '../utils/data';
// import ContactInput from './ContactInput';

function ContactApp() {
    return (
        <div className="contact-app">
            <header className='contact-app__header'>
                <h1>Aplikasi Kontak</h1>
                <Navigation />
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add" element={<AddPage />} />
                </Routes>
            </main>
        </div>
    );
}

// class ContactApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contacts: getContacts(),
//         }

//         this.onDeleteHandler = this.onDeleteHandler.bind(this);
//         this.onAddContactHandler = this.onAddContactHandler.bind(this);
//     }

//     onDeleteHandler(id) {
//         const contacts = this.state.contacts.filter(contact => contact.id !== id);
//         this.setState({ contacts });
//     }

//     onAddContactHandler({ name, tag }) {
//         this.setState((prevState) => {
//             return {
//                 contacts: [
//                     ...prevState.contacts,
//                     {
//                         id: +new Date(),
//                         name,
//                         tag,
//                         imageUrl: '/images/default.jpg',
//                     }
//                 ]
//             }
//         });
//     }

//     render() {
//         return (
//             <div className="contact-app">
//                 <h1>Aplikasi Kontak</h1>
//                 <h2>Tambah Kontak</h2>
//                 <ContactInput addContact={this.onAddContactHandler} />
//                 <h2>Daftar Kontak</h2>
//                 <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
//             </div>
//         );
//     }
// }

export default ContactApp;