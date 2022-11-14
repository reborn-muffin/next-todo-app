import {useHeaderStyles} from "./headerStyles"
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material"
import {useTheme} from "@mui/styles"

export const Header = ({headerHeight}) => {
    const theme = useTheme()
    const styles = useHeaderStyles(theme)

    return <AppBar sx={{ ...styles.header, height: headerHeight}}>
        <Toolbar>
            <Box id={"mobile-menu-button"} sx={styles.mobileMenu}></Box>
            <Typography variant={"h5"} sx={{flexGrow: 1}}>
                {"Todo App"}
            </Typography>
            <Button variant={"outlined"} color={"inherit"}>Logout</Button>
        </Toolbar>
    </AppBar>
}