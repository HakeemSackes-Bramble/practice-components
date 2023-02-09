import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavItem.scss';

const NavItem = props => (
    <li>
        <div class="wrapper">
            <a href="/">HomeFFJF</a>
        </div>
    </li>
);

const NavItemPropTypes = {
	
};

NavItem.propTypes = NavItemPropTypes;

export default NavItem;
