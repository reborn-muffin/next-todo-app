import {useDispatch, useSelector} from "react-redux"
import useAlertStyles from "./alertStyles"
import {removeAlert} from "./AlertSlice"
import AutoHideAlert from "./AutoHideAlert"
import {useTheme} from "@mui/styles"
import {Box} from "@mui/material"

const AlertManager = () => {
    const dispatch = useDispatch()
    const alertItems = useSelector(state => state.alerts.items)

    const theme = useTheme()
    const customStyles = useAlertStyles(theme)

    const makeAlert = (item) => <AutoHideAlert handleClose={() => dispatch(removeAlert(item.id))}
                                 message={item.message} severity={item.severity} time={item?.time} key={item.id}/>

    const alerts = alertItems?.map((item) => makeAlert(item), [])

    return <Box sx={customStyles.alertRoot}>{alerts}</Box>
}

export default AlertManager