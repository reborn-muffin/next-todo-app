import {useLayoutStyles} from "./layoutStyles"
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material"

export const Header = () => {
    const styles = useLayoutStyles();
    return <Box className={styles.header} sx={{ flexGrow: 1 }}>
        <AppBar position={"static"} >
            <Toolbar>
                <Typography variant={"h5"} sx={{ flexGrow: 1 }}>
                    Todo App
                </Typography>
                <Button variant={"outlined"} color={"inherit"}>Logout</Button>
            </Toolbar>
        </AppBar>
    </Box>
}