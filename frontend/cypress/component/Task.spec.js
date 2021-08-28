import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { mount } from '@cypress/react';
import Task from '../../src/components/Task/Task';
import dataList from '../fixtures/taskList.json';
const data = dataList[1];

describe('Testing Task component should', () => {

  const setShowValueModalStub = () => {};
  const setDataTaskStub = () => {};

  const Sut = () => {
    return (
      <Task
        data={data}
        setShowValueModal={setShowValueModalStub}
        setDataTask={setDataTaskStub}
      />
    );
  };

  beforeEach(() => {
    mount(<Sut />);
  });

  it('Contain a custom title', () => {
    cy.get('.card-header').contains('Task #2');
  });

  it('Contain a custom sub-title', () => {
    cy.get('.card-title').contains('The Title 2');
  });

  it('Contain a done label', () => {
    cy.get('.task-badge').contains('Done');
  });
})