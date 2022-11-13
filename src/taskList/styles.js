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
        marginTop: "5%",
        [theme.breakpoints.down("md")]: {
            width: "90%",
            marginX: "auto"
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
})

export default styles