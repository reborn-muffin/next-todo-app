const styles = (theme) => ({
    taskBody: {
        wordWrap: "break-word",
        hyphens: "auto",
        msHyphens: "auto",
    },
    taskGrid: {
        width: "100%",
        maxWidth: "33%",
        [theme.breakpoints.down("md")]: {
            maxWidth: "100%",
            paddingX: "0 !important"
        }
    },
    rootGrid: {
        width: "80%",
        margin: "5% auto",
        [theme.breakpoints.down("md")]: {
            width: "90%",
            marginX: "auto 0"
        }
    },
    cardContent: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between"
    },
    dateString: {
        display: "block",
        textAlign: "right",
        marginTop: "1em"
    },
    mainContent: {
        overflow: "hidden",
        boxSizing: "border-box",
    },
    todoTitle: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    editDialogRoot: {
        [theme.breakpoints.down("md")]: {
            width: "90%",
            margin: 0
        }
    },
    dialogContent: {
        marginTop: "1em",
        width: "30em",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            margin: "1em 0 0 0",
        }
    }
})

export default styles