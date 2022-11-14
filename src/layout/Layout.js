import {Box} from "@mui/material"
import {Header} from "./header/Header"
import {Sidebar} from "./sidebar/Sidebar"
import AlertManager from "../common/alerts/AlertManager"
import useStyles from "./layoutStyles"
import {useTheme} from "@mui/styles"

export const Layout = ({children}) => {
    const drawerWidth = "15em"
    const headerHeight = "4em"

    const theme = useTheme()
    const layoutStyles = useStyles(theme, drawerWidth, headerHeight)

    return <Box>
        <Header drawerWidth={drawerWidth} headerHeight={headerHeight}/>
        <Sidebar drawerWidth={drawerWidth} headerHeight={headerHeight}/>
        <Box sx={layoutStyles.children}>
            {children}
        </Box>
        <AlertManager />
    </Box>
}