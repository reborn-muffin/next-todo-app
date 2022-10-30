import {Provider} from "react-redux"
import {store} from "../redux-store/store"
import {Layout} from "../layout/Layout"
import {ThemeProvider} from "@mui/material"
import appTheme from "./appTheme"

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={appTheme}>
            <div className="App">
                <header className="App-header">
                    <Layout />
                </header>
            </div>
        </ThemeProvider>
      </Provider>
  )
}

export default App
