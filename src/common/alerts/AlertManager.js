import {useDispatch, useSelector} from "react-redux"
import alertStyles from "./alertStyles"
import {removeAlert} from "./AlertSlice"
import AutoHideAlert from "./AutoHideAlert"

const AlertManager = () => {
    const dispatch = useDispatch()
    const alertItems = useSelector(state => state.alerts.items)

    const makeAlert = (item) => <AutoHideAlert handleClose={() => dispatch(removeAlert(item.id))}
                                 message={item.message} severity={item.severity} time={item?.time}/>

    const alerts = alertItems?.map((item) => makeAlert(item), [])

    return <div style={alertStyles.alertRoot}>{alerts}</div>
}

export default AlertManager