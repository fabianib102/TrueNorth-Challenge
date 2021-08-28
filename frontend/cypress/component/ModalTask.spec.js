import "bootstrap/dist/css/bootstrap.min.css";
import { mount } from "@cypress/react";
import ModalTask from "../../src/components/ModalTask/ModalTask";
import dataList from "../fixtures/taskList.json";
const data = dataList[0];

describe("Testing ModalTask component should", () => {
  const setShowValueModalStub = () => {};

  const Sut = () => {
    return <ModalTask showValue={true} dataTask={data} setShowValueModal={setShowValueModalStub} listTask={dataList} />;
  };

  beforeEach(() => {
    mount(<Sut />);
  });

  it("Contain a custom title", () => {
    cy.get('.modal-title').contains("Task #1 - The Title");
  });

  it("Contain 'Complete' and Close buttons", () => {
    cy.get('.btnComplete').contains('Complete');
    cy.get('.btnClose').contains('Close')
  });
});
