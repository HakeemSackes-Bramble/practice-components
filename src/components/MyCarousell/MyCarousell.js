import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyCarousell.scss';

const MyCarousell = props => (
	<div>This is a component called MyCarousell.</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class MyCarousell extends React.Component {
//   render() {
//     return <div>This is a component called MyCarousell.</div>;
//   }
// }

const MyCarousellPropTypes = {
	// always use prop types!
};

MyCarousell.propTypes = MyCarousellPropTypes;

export default MyCarousell;
