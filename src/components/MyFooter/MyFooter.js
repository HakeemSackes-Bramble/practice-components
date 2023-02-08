import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyFooter.scss';

const MyFooter = props => (
	<div>This is a component called MyFooter.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class MyFooter extends React.Component {
//   render() {
//     return <div>This is a component called MyFooter.</div>;
//   }
// }

const MyFooterPropTypes = {
	// always use prop types!
};

MyFooter.propTypes = MyFooterPropTypes;

export default MyFooter;
