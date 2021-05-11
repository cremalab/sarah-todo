describe("App", function () {
  it("Contains a header with a title", function () {
    cy.visit("/")
    cy.get(".AppHeader").contains("My Tasks")
  })
  it("shows a modal after clicking Create New Task button and hides it after clicking cancel", function () {
    cy.visit("/")
    cy.get(".createTaskButton").click()
    cy.get(".newTaskForm").should("exist")
    cy.get("#cancelButton").click()
    cy.get(".newTaskForm").should("not.exist")
  })
  it("creates a new task with a checkbox", function () {
    cy.visit("/")
    cy.get(".createTaskButton").click()
    cy.get("#taskInput").type("make dinner")
    cy.get("#saveButton").click()
    cy.get(".checkbox > .MuiSvgIcon-root").should("exist")
  })
  it("changes an active task to completed when checkbox is clicked", function () {
    cy.visit("/")
    cy.get(".createTaskButton").click()
    cy.get("#taskInput").type("make dinner")
    cy.get("#saveButton").click()
    cy.get("[data-testid=unchecked]").click()
    cy.get("[data-testid=checked] > path").should("exist")
  })
})
