import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyIntro.scss';

const MyIntro = props => (
	<div>This is a component called MyIntro.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class MyIntro extends React.Component {
//   render() {
//     return <div>This is a component called MyIntro.</div>;
//   }
// }

const MyIntroPropTypes = {
	// always use prop types!
};

MyIntro.propTypes = MyIntroPropTypes;

export default MyIntro;
