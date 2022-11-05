import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import {CreateOutlined} from "@mui/icons-material"
import {useState} from "react"
import CreateTodoDialog from "./CreateTodoDialog"

const ControlMenu = () => {
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

    return <>
        <List>
            <ListItem>
                <ListItemButton onClick={() => setIsCreateDialogOpen(true)}>
                    <ListItemIcon>
                        <CreateOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={"Create todo"}/>
                </ListItemButton>
            </ListItem>
        </List>
        <CreateTodoDialog isOpen={isCreateDialogOpen} handleClose={() => setIsCreateDialogOpen(false)}/>
    </>
}

export default ControlMenu