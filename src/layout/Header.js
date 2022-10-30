import {useLayoutStyles} from "./layoutStyles"
import {AppBar, Button, Toolbar, Typography} from "@mui/material"

export const Header = () => {
    const styles = useLayoutStyles()
    return <AppBar className={styles.header}>
        <Toolbar>
            <Typography variant={"h5"} sx={{flexGrow: 1}}>
                Todo App
            </Typography>
            <Button variant={"outlined"} color={"inherit"}>Logout</Button>
        </Toolbar>
    </AppBar>
}