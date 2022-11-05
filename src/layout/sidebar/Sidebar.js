import {Divider, Drawer} from "@mui/material"
import FilterMenu from "./FilterMenu"
import ControlMenu from "./ControlMenu"

export const Sidebar = ({drawerWidth}) => {
    return <Drawer variant={"permanent"} ModalProps={{keepMounted: true}} open={true} anchor={"left"}
                   PaperProps={{sx: {width: drawerWidth}}}>
        <FilterMenu/>
        <Divider/>
        <ControlMenu/>
    </Drawer>
}