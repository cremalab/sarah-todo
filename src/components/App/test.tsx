import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "../../redux/store"
import { App } from "."

describe("App", () => {
  it("renders", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
