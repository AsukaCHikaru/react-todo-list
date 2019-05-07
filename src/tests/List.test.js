import React from 'react';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';

import List from '../components/List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faPencilAlt, faPlusCircle, faSearch, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrashAlt, faCheck, faPencilAlt, faPlusCircle, faSearch, faMinusCircle);

const tasks = [
  {id: 190000000001, name: "task 1", time: "20190101000000", tag: []},
  {id: 190000000002, name: "task 2", time: "20190101000000", tag: []},
  {id: 190000000003, name: "task 3", time: "20190101000000", tag: []},
]

it('renders without crashing', () => {
  shallow(<List />);
});

it('renders list name correctly', () => {
  const wrapper = mount(<List name="test"/>); 
  expect(wrapper.props().name).to.equal("test");
  expect(wrapper.find('.listName').length).to.equal(1);
  expect(wrapper.find('.listName h3').text()).to.equal("test");
});

it('renders major button if this is Todo or Search list', () => {
  const wrapper1 = mount(<List name="Todo"/>); 
  const wrapper2 = mount(<List name="Search"/>); 
  expect(wrapper1.find('MajorBtn').length).to.equal(1);
  expect(wrapper2.find('MajorBtn').length).to.equal(1);
});

it('dosent render major button if this is Done list', () => {
  const wrapper = mount(<List name="Done"/>); 
  expect(wrapper.find('MajorBtn').length).to.equal(0);
});

it('renders add task from when click major button in Todo list', () => {
  const wrapper = mount(<List name="Todo"/>); 
  expect(wrapper.state().showAddTaskForm).to.equal(false);
  wrapper.find('FontAwesomeIcon.majorBtn').simulate('click');
  expect(wrapper.state().showAddTaskForm).to.equal(true);
});

it('renders search form if this is Search list', () => {
  const wrapper = mount(<List name="Search"/>); 
  expect(wrapper.find('SearchForm').length).to.equal(1);
});

it('renders tasks if there are', () => {
  const wrapper = mount(<List tasks={tasks} />); 
  expect(wrapper.props().tasks.length).to.equal(3);
  wrapper.find('.task .name').forEach((node, i) => {
    expect(node.text()).to.equal(`task ${i+1}`)
  });
});

it('renders search summary if this is Search list with search executed', () => {
  const wrapper = mount(<List name="Search" tasks={tasks} keyword={"task"} />); 
  expect(wrapper.find('SearchSumm').length).to.equal(1);
});
