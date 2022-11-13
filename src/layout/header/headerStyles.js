export const useHeaderStyles = (theme) => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        zIndex: theme.zIndex.drawer + 1,
    },
    mobileMenu: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
})