const layoutStyles = (theme, drawerWidth, headerHeight) => ({
    children: {
        maxWidth: `calc(100% - ${drawerWidth})`,
        marginLeft: "auto",
        marginTop: headerHeight,
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
        }
    }
})

export default layoutStyles