const styles = {
    taskBody: {
        wordWrap: "break-word",
        hyphens: "auto",
        msHyphens: "auto",
    },
    taskGrid: {
        width: "100%",
        maxWidth: "33%",
    },
    rootGrid: {
        width: "80%",
        margin: "5% auto",
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
        textOverflow: "ellipsis"
    }
}

export default styles