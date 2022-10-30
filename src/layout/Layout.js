import {Box} from "@mui/material"
import {Header} from "./Header"
import {SideBar} from "./SideBar"

export const Layout = ({children}) => {
    const drawerWidth = "10%"
    return <Box>
        <Header drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/>
        <div style={{ maxWidth: `calc(100% - ${drawerWidth})`, marginLeft: "auto"}}>
            {children}
        </div>
    </Box>
}