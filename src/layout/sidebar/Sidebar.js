import {Divider, Drawer} from "@mui/material"
import FilterMenu from "./FilterMenu"

export const Sidebar = ({drawerWidth}) => {
    return <Drawer variant={"permanent"} ModalProps={{keepMounted: true}} open={true} anchor={"left"}
                   PaperProps={{sx: {width: drawerWidth}}}>
        <FilterMenu/>
        <Divider/>
    </Drawer>
}