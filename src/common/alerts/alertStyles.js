const alertStyles = (theme) => ({
    alertRoot: {
        width: "60%",
        position: "fixed",
        zIndex: "100000",
        top: "85%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
            width: "90%"
        }
    },
    alert: {
        marginTop: "1em"
    }
})

export default alertStyles