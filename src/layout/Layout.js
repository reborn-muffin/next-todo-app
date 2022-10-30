import {Box} from "@mui/material"
import {Header} from "./Header"
import {SideBar} from "./SideBar"

export const Layout = ({children}) => {
    const drawerWidth = "15em"
    const headerHeight = "4em"

    return <Box>
        <Header drawerWidth={drawerWidth} headerHeight={headerHeight}/>
        <SideBar drawerWidth={drawerWidth}/>
        <div style={{ maxWidth: `calc(100% - ${drawerWidth})`, marginLeft: "auto", marginTop: headerHeight}}>
            {children}
        </div>
    </Box>
}