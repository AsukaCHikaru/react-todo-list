import React from 'react';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';
import List from './List';
import ListName from './ListName';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrashAlt, faCheck, faPencilAlt, faPlusCircle);

const tasks = [
  {id: 100000000, name: "task 1", time: "20190101000000", tags: []},
  {id: 200000000, name: "task 2", time: "20190101000000", tags: []},
  {id: 300000000, name: "task 3", time: "20190101000000", tags: []},
]

it('renders without crashing', () => {
  shallow(<List />);
});

it('renders list name correctly', () => {
  const wrapper = mount(<List name="test"/>); 
  expect(wrapper.props().name).to.equal("test");
  expect(wrapper.find('.listName').length).to.equal(1);
});

it('renders add task button if this is todo list', () => {
  const wrapper = mount(<List name="Todo"/>); 
  expect(wrapper.find('AddTaskBtn').length).to.equal(1);
});

it('dosent render add task button if this is done list', () => {
  const wrapper = mount(<List name="Done"/>); 
  expect(wrapper.find('AddTaskBtn').length).to.equal(0);
});

it('shows add task from when click add task button', () => {
  const wrapper = mount(<List name="Todo"/>); 
  expect(wrapper.state().showAddTaskForm).to.equal(false);
  wrapper.find('FontAwesomeIcon.addTaskBtn').simulate('click');
  expect(wrapper.state().showAddTaskForm).to.equal(true);
});