import { NewTaskForm } from "./NewTaskForm"
import { render } from "@testing-library/react"
import React from "react"

describe("NewTaskForm", () => {
  it("name prop is rendered", () => {
    // Arrange
    const name = "NewTaskForm"

    // Act
    const { getByText } = render(<NewTaskForm />)
    const received = getByText(name)

    // Assert
    expect(received).toBeDefined()
  })
})
