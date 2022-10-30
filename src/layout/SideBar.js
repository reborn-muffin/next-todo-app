import {
    Divider,
    Drawer,
    List,
    ListItem, ListItemButton,
    ListItemIcon, ListItemText, Toolbar,
} from "@mui/material"
import {
    CalendarTodayOutlined,
    CalendarMonthOutlined,
    DoneOutlineOutlined,
    AssignmentLateOutlined,
} from "@mui/icons-material"

export const SideBar = ({drawerWidth}) => {
    return <Drawer variant={"permanent"} ModalProps={{keepMounted: true}} open={true} anchor={"left"}
                   PaperProps={{ sx: { width: drawerWidth } }}
    >
        <List>
            <Toolbar/>
            <Divider />
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <CalendarTodayOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={"Today"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <CalendarMonthOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={"Upcoming"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <DoneOutlineOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={"Completed"}/>
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <AssignmentLateOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={"Overdue"}/>
                </ListItemButton>
            </ListItem>
        </List>
        <Divider/>
    </Drawer>
}