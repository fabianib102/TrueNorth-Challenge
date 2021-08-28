import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { mount } from '@cypress/react';
import ListTask from '../../src/components/ListTask/ListTask';
import dataList from '../fixtures/taskList.json';

describe('Testing ListTask component should', () => {
  const setShowValueModalStub = () => {};
  const setDataTaskStub = () => {};

  const Sut = () => {
    return (
      <ListTask
        listTask={dataList}
        setShowValueModal={setShowValueModalStub}
        setDataTask={setDataTaskStub}
      />
    );
  };

  beforeEach(() => {
    mount(<Sut />);
  });

  it('Contain a custom title', () => {
    cy.contains('Task #1');
  });

  it('Contain at least 3 card', () => {
    cy.get('.row').find('.card').should('have.length', 3);
  });

  it('Contain class custom called "bg-info"', () => {
    cy.get('div').should('have.class', 'bg-info');
  });
})