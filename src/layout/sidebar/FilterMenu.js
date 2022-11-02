import {Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from "@mui/material"
import {
    AssignmentLateOutlined,
    CalendarMonthOutlined,
    CalendarTodayOutlined,
    DoneOutlineOutlined,
} from "@mui/icons-material"

const FilterMenu = () => {
    return <List>
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
}

export default FilterMenu;