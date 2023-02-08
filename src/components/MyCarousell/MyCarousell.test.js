import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MyCarousell from './MyCarousell';

describe('MyCarousell', () => {
  let props;
  let shallowMyCarousell;
  let renderedMyCarousell;
  let mountedMyCarousell;

  const shallowTestComponent = () => {
    if (!shallowMyCarousell) {
      shallowMyCarousell = shallow(<MyCarousell {...props} />);
    }
    return shallowMyCarousell;
  };

  const renderTestComponent = () => {
    if (!renderedMyCarousell) {
      renderedMyCarousell = render(<MyCarousell {...props} />);
    }
    return renderedMyCarousell;
  };

  const mountTestComponent = () => {
    if (!mountedMyCarousell) {
      mountedMyCarousell = mount(<MyCarousell {...props} />);
    }
    return mountedMyCarousell;
  };  

  beforeEach(() => {
    props = {};
    shallowMyCarousell = undefined;
    renderedMyCarousell = undefined;
    mountedMyCarousell = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
