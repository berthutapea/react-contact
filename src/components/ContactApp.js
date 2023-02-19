import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import { getUserLogged, putAccessToken } from '../utils/api';


class ContactApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authedUser: null,
        };

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    async onLoginSuccess({ accessToken }) {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();

        this.setState(() => {
            return {
                authedUser: data,
            };
        });
    }

    render() {

        if (this.state.authedUser === null) {
            return (
                <div className='contact-app'>
                    <header className='contact-app__header'>
                        <h1>Aplikasi Kontak</h1>
                    </header>
                    <main>
                        <Routes>
                            <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    </main>
                </div>
            )
        }

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
}

export default ContactApp;