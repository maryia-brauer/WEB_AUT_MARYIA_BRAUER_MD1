import SelectablePage from "../pageObjects/Selectable.page";

describe('ToolsQA', () => {
  it('passes', () => {
    //Open https://demoqa.com/selectable
    SelectablePage.visit();
    //Click “Grid”
    SelectablePage.grid.click();
    //Click - “Two”, “Four”, “Six”, “Eight”
    SelectablePage.gridElements.contains("Two").click();
    SelectablePage.gridElements.contains("Four").click();
    SelectablePage.gridElements.contains("Six").click();
    SelectablePage.gridElements.contains("Eight").click();
    //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
    SelectablePage.gridElements.contains("Two").should('have.class', 'active');
    SelectablePage.gridElements.contains("Four").should('have.class', 'active');
    SelectablePage.gridElements.contains("Six").should('have.class', 'active');
    SelectablePage.gridElements.contains("Eight").should('have.class', 'active');
    //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
    SelectablePage.gridElements.contains("One").should('not.have.class', 'active');
    SelectablePage.gridElements.contains("Three").should('not.have.class', 'active');
    SelectablePage.gridElements.contains("Five").should('not.have.class', 'active');
    SelectablePage.gridElements.contains("Seven").should('not.have.class', 'active');
    SelectablePage.gridElements.contains("Nine").should('not.have.class', 'active');
  })
})