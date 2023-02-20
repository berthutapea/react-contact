import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { LocaleConsumer } from '../contexts/LocaleContext';


function Navigation({ logout, name }) {
    return (
        <LocaleConsumer>
            {
                ({ locale, toggleLocale }) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><button onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
                                <li><Link to="/"><FiHome /></Link></li>
                                <li><Link to="/add"><FiPlusCircle /></Link></li>
                                <li><button onClick={logout}>{name} <FiLogOut /></button></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    );
}


Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};


export default Navigation;
