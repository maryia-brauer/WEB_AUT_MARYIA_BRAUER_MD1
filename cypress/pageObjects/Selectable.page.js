class SelectablePage {
    static get url() {
        return "/selectable";
    }
    static visit() {
        cy.visit(this.url);
    }

    static get grid() {
        return cy.get('#demo-tab-grid');
    }

    static get gridElements() {
        return cy.get('.list-group-item');
    }
}

export default SelectablePage;