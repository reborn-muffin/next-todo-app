import {ClickAwayListener, Divider, Drawer, IconButton} from "@mui/material"
import FilterMenu from "./FilterMenu"
import ControlMenu from "./ControlMenu"
import styles from "./styles"
import {useTheme} from "@mui/styles"
import {MenuOutlined} from "@mui/icons-material"
import {useEffect, useState} from "react"
import {createPortal} from "react-dom"

export const Sidebar = ({drawerWidth, headerHeight}) => {
    const theme = useTheme()
    const customStyles = styles(theme, drawerWidth, headerHeight)

    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    const [isDomReady, setIsDomReady] = useState(false)

    useEffect(() => {
        setIsDomReady(true)
    }, [])

    const menuButtonElement = <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuOutlined/>
    </IconButton>
    const portalContainer = document.getElementById("mobile-menu-button")
    const menuButton = isDomReady ? createPortal(menuButtonElement, portalContainer) : []

    const handleCloseMenu = (event) => {
        if(event.type === "touchend"){
            setIsDrawerOpen(false)
        }
    }

    return <ClickAwayListener onClickAway={handleCloseMenu}>
        <Drawer variant={"persistent"} open={isDrawerOpen} anchor={"left"}
                PaperProps={{sx: customStyles.drawerRoot}}>
            <>
                {menuButton}
                <FilterMenu/>
                <Divider/>
                <ControlMenu/>
            </>
        </Drawer>
    </ClickAwayListener>
}