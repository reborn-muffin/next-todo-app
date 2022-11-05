import {useLayoutStyles} from "./headerStyles"
import {AppBar, Button, Toolbar, Typography} from "@mui/material"

export const Header = ({headerHeight}) => {
    const styles = useLayoutStyles()
    return <AppBar className={styles.header} sx={{ height: headerHeight}}>
        <Toolbar>
            <Typography variant={"h5"} sx={{flexGrow: 1}}>
                Todo App
            </Typography>
            <Button variant={"outlined"} color={"inherit"}>Logout</Button>
        </Toolbar>
    </AppBar>
}