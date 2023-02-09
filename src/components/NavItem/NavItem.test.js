import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NavItem from './NavItem';

describe('NavItem', () => {
  let props;
  let shallowNavItem;
  let renderedNavItem;
  let mountedNavItem;

  const shallowTestComponent = () => {
    if (!shallowNavItem) {
      shallowNavItem = shallow(<NavItem {...props} />);
    }
    return shallowNavItem;
  };

  const renderTestComponent = () => {
    if (!renderedNavItem) {
      renderedNavItem = render(<NavItem {...props} />);
    }
    return renderedNavItem;
  };

  const mountTestComponent = () => {
    if (!mountedNavItem) {
      mountedNavItem = mount(<NavItem {...props} />);
    }
    return mountedNavItem;
  };  

  beforeEach(() => {
    props = {};
    shallowNavItem = undefined;
    renderedNavItem = undefined;
    mountedNavItem = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
