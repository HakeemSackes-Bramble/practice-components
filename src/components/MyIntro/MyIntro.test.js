import React from 'react';
import { shallow, render, mount } from 'enzyme';
import MyIntro from './MyIntro';

describe('MyIntro', () => {
  let props;
  let shallowMyIntro;
  let renderedMyIntro;
  let mountedMyIntro;

  const shallowTestComponent = () => {
    if (!shallowMyIntro) {
      shallowMyIntro = shallow(<MyIntro {...props} />);
    }
    return shallowMyIntro;
  };

  const renderTestComponent = () => {
    if (!renderedMyIntro) {
      renderedMyIntro = render(<MyIntro {...props} />);
    }
    return renderedMyIntro;
  };

  const mountTestComponent = () => {
    if (!mountedMyIntro) {
      mountedMyIntro = mount(<MyIntro {...props} />);
    }
    return mountedMyIntro;
  };  

  beforeEach(() => {
    props = {};
    shallowMyIntro = undefined;
    renderedMyIntro = undefined;
    mountedMyIntro = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
