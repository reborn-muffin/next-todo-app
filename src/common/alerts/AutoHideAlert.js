import useAlertStyles from "./alertStyles"
import {Alert, Typography} from "@mui/material"
import {useEffect} from "react"
import {useTheme} from "@mui/styles"

const AutoHideAlert = ({time, handleClose, severity, id, message}) => {
    const theme = useTheme()
    const customStyles = useAlertStyles(theme)

    const timeout = time ? time : 3000
    
    useEffect(() => {
        setTimeout(() => {
            handleClose(id)
        }, timeout)
    }, [])

    return <Alert severity={severity} key={id} style={customStyles.alert}>
        <Typography variant={"body1"}>{message}</Typography>
    </Alert>
}

export default AutoHideAlert