import {useLayoutStyles} from "./layoutStyles"
import {Box, Button, Typography} from "@mui/material"

export const Header = () => {
    const styles = useLayoutStyles();
    return <Box className={styles.header} display={"flex"} justifyContent={"space-between"} padding={2} marginTop={2}>
        <Typography variant={"h5"}>
            Todo App
        </Typography>
        <Button variant={"outlined"} color={"inherit"}>Logout</Button>
    </Box>
}