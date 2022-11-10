import axios from "axios"
import {setTasks} from "./taskSlice"
import {generateAlert} from "../common/alerts/AlertSlice"

const ALERT_SHOW_TIME = 5000
const ERROR_MESSAGE_PREFIX = "Ohh, we have follow error: "

const getAlertAction = (errorMessage) => generateAlert({
    message: errorMessage, severity: "error", time: ALERT_SHOW_TIME
})

export const loadTasks = () => {
    return async (dispatch) => {
        axios.get("http://localhost:3000/tasks").then(response => {
            dispatch(setTasks(response?.data))
        }).catch((error) => {
            const message = ERROR_MESSAGE_PREFIX + error.message
            dispatch(getAlertAction(message))
        })
    }
}

export const createTodo = (title, description, overdueDate) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/tasks", {title, description, overdueDate}).then(() => {
            dispatch(loadTasks())
            dispatch(generateAlert({message: "Todo created successful ^-^", severity: "success"}))
        }).catch((error) => {
            const message = ERROR_MESSAGE_PREFIX + error.message
            dispatch(getAlertAction(message))
        })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
            dispatch(loadTasks())
            dispatch(generateAlert({message: "Todo deleted successful ^-^", severity: "success"}))
        }).catch((error) => {
            const message = ERROR_MESSAGE_PREFIX + error.message
            dispatch(getAlertAction(message))
        })
    }
}

export const editTodo = (todo) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3000/tasks/${todo.id}`, todo).then(() => {
            dispatch(loadTasks())
            dispatch(generateAlert({message: "Todo edited successful ^-^", severity: "success"}))
        }).catch((error) => {
            const message = ERROR_MESSAGE_PREFIX + error.message
            dispatch(getAlertAction(message))
        })
    }
}

export const changeTodoStatus = (todoId, status) => {
    return (dispatch) => {
        axios.patch(`http://localhost:3000/tasks/${todoId}`, { isCompleted: status}).then(() => {
            dispatch(loadTasks())
        }).catch((error) => {
            const message = ERROR_MESSAGE_PREFIX + error.message
            dispatch(getAlertAction(message))
        })
    }
}