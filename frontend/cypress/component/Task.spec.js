import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { mount } from '@cypress/react';
import Task from '../../src/components/Task/Task';
import dataList from '../fixtures/taskList.json';
const data = dataList[0];

describe('Testing Task component should', () => {

  const Sut = () => {
    return (
      <Task data={data} />
    );
  };

  beforeEach(() => {
    mount(<Sut />);
  });

  it('Contain a custom title called "Task #"', () => {
    cy.contains('Task #');
  });
})