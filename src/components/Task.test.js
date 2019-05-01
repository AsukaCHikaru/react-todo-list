import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';
import Task from './Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrashAlt, faCheck, faPencilAlt);

it('renders without crashing', () => {
  shallow(<Task />);
});

it('renders task name', () => {
  const wrapper = mount(<Task task={{name: "test"}}/>);
  expect(wrapper.props().task.name).to.equal("test");
  expect(wrapper.contains(<h6>test</h6>)).to.equal(true);
});