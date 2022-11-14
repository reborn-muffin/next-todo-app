const styles = (theme, drawerWidth, headerHeight) => ({
    createDialog: {
        marginTop: "1em",
        width: "30em",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            margin: 0,
        }
    },
    drawerRoot: {
        width: drawerWidth,
        marginTop: headerHeight,
        [theme.breakpoints.down("md")]: {
            zIndex: theme.zIndex.drawer + 1
        }
    },
    createDialogRoot: {
        [theme.breakpoints.down("md")]: {
            width: "90%",
            margin: 0
        }
    }
})

export default styles