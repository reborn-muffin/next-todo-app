import {makeStyles} from "@mui/styles"

export const useLayoutStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        zIndex: theme.zIndex.drawer + 1,
    },
}))