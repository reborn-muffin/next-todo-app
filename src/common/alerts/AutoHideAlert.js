import alertStyles from "./alertStyles"
import {Alert, Typography} from "@mui/material"
import {useEffect} from "react"

const AutoHideAlert = ({time, handleClose, severity, id, message}) => {
    const timeout = time ? time : 3000
    
    useEffect(() => {
        setTimeout(() => {
            handleClose(id)
        }, timeout)
    }, [])

    return <Alert severity={severity} key={id} style={alertStyles.alert}>
        <Typography variant={"body1"}>{message}</Typography>
    </Alert>
}

export default AutoHideAlert