import {Box} from "@mui/material"
import {Header} from "./Header"
import {Sidebar} from "./sidebar/Sidebar"

export const Layout = ({children}) => {
    const drawerWidth = "15em"
    const headerHeight = "4em"

    return <Box>
        <Header drawerWidth={drawerWidth} headerHeight={headerHeight}/>
        <Sidebar drawerWidth={drawerWidth}/>
        <div style={{ maxWidth: `calc(100% - ${drawerWidth})`, marginLeft: "auto", marginTop: headerHeight}}>
            {children}
        </div>
    </Box>
}