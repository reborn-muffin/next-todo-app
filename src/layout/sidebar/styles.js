const styles = (theme) => ({
    createDialog: {
        marginTop: "1em",
        width: "30em"
    },
    drawerRoot: {
        [theme.breakpoints.down("md")]: {
            zIndex: theme.zIndex.drawer + 1
        }
    },
})

export default styles