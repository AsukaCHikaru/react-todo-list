import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';
import Task from '../components/Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrashAlt, faCheck, faPencilAlt);

it('renders without crashing', () => {
  shallow(<Task />);
});

it('renders task name', () => {
  const wrapper = mount(<Task task={{name: "test", tag: []}}/>);
  expect(wrapper.props().task.name).to.equal("test");
  expect(wrapper.find('h5.name').length).to.equal(1);    
});

it('renders 3 svg buttons', () => {
  const wrapper = mount(<Task />);
  expect(wrapper.find('FontAwesomeIcon.checkBtn').length).to.equal(1);
  expect(wrapper.find('FontAwesomeIcon.editBtn').length).to.equal(1);
  expect(wrapper.find('FontAwesomeIcon.delBtn').length).to.equal(1);
});

it('toggles task detail when click task name', () => {
  const wrapper = mount(<Task />);
  expect(wrapper.state().showDetail).to.equal(false);
  wrapper.find('h5.name').simulate('click');
  expect(wrapper.state().showDetail).to.equal(true);
  wrapper.find('h5.name').simulate('click');
  expect(wrapper.state().showDetail).to.equal(false);
});

it("shows task's create time", () => {
  const time = new Date().toLocaleString();
  const wrapper = mount(<Task task={{tag: [], time: time}} />);
  expect(wrapper.find('h6.time').text()).to.equal(`Time: ${time}`);
});

it("shows task's tags", () => {
  const tag = ["uno", "dos", "tres"];
  const wrapper = mount(<Task task={{tag: tag}} />);
  expect(wrapper.find('h6.tag').text()).to.equal(`Tags: ${tag.join(", ")}`);
});

it('toggles edit mode when click edit button', () => {
  const wrapper = mount(<Task />);
  expect(wrapper.state().showEdit).to.equal(false);
  wrapper.find('FontAwesomeIcon.editBtn').simulate('click');
  expect(wrapper.state().showEdit).to.equal(true);
  wrapper.find('FontAwesomeIcon.editBtn').simulate('click');
  expect(wrapper.state().showEdit).to.equal(false);
});

it('shows task name input instead of name in edit mode', () => {
  const wrapper = mount(<Task />);
  wrapper.find('FontAwesomeIcon.editBtn').simulate('click');
  expect(wrapper.find('h5.name').length).to.equal(0);    
  expect(wrapper.find('TaskNameInput').length).to.equal(1);
});

it("has task's current name in task name input", () => {
  const wrapper = mount(<Task />);
  let name = wrapper.props().task.name;
  wrapper.find('FontAwesomeIcon.editBtn').simulate('click');
  expect(wrapper.find('TaskNameInput').props().value).to.equal(name);
});

it('shows task tag input instead of tag in edit mode', () => {
  const wrapper = mount(<Task />);
  wrapper.find('FontAwesomeIcon.editBtn').simulate('click');
  expect(wrapper.find('h5.tag').length).to.equal(0);    
  expect(wrapper.find('TaskTagInput').length).to.equal(1);
});

it("has task's current tag in task tag input", () => {
  const wrapper = mount(<Task />);
  let tag = wrapper.props().task.tag.join(", ");
  wrapper.find('FontAwesomeIcon.editBtn').simulate('click');
  expect(wrapper.find('TaskTagInput').props().value).to.equal(tag);
});