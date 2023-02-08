import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MyFooter from './MyFooter';

describe('MyFooter', () => {
  let props;
  let shallowMyFooter;
  let renderedMyFooter;
  let mountedMyFooter;

  const shallowTestComponent = () => {
    if (!shallowMyFooter) {
      shallowMyFooter = shallow(<MyFooter {...props} />);
    }
    return shallowMyFooter;
  };

  const renderTestComponent = () => {
    if (!renderedMyFooter) {
      renderedMyFooter = render(<MyFooter {...props} />);
    }
    return renderedMyFooter;
  };

  const mountTestComponent = () => {
    if (!mountedMyFooter) {
      mountedMyFooter = mount(<MyFooter {...props} />);
    }
    return mountedMyFooter;
  };  

  beforeEach(() => {
    props = {};
    shallowMyFooter = undefined;
    renderedMyFooter = undefined;
    mountedMyFooter = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
