import {Provider} from "react-redux"
import {store} from "../redux-store/store"
import {Layout} from "../layout/Layout"
import {TaskList} from "../taskList/TaskList"
import {ThemeProvider} from "@mui/styles"
import appTheme from "./appTheme"

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={appTheme}>
                <div className="App">
                    <Layout children={<TaskList />}/>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App
