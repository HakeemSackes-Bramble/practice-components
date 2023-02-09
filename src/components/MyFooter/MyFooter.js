import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyFooter.scss';


class MyFooter extends React.Component {
  render() {
    return <div>This is a component called MyFooter </div>;
  
  }
}

const MyFooterPropTypes = {
	// always use prop types!
};

MyFooter.propTypes = MyFooterPropTypes;

export default MyFooter;
