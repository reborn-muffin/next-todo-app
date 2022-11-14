import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material"
import useStyles from "./styles"
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {useDispatch, useSelector} from "react-redux"
import {useEffect, useState} from "react"
import {editTodo} from "./taskAPI"
import {useTheme} from "@mui/styles"

const EditTodoDialog = ({isOpen, todoId, setIsOpen}) => {
    const dispatch = useDispatch()

    const theme = useTheme()
    const customStyles = useStyles(theme)

    const todo = useSelector(state => state.tasks.tasks?.find(item => item.id === todoId))
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [overdueDate, setOverdueDate] = useState(null)

    const clearState = () => {
        setTitle("")
        setDescription("")
        setOverdueDate(null)
    }

    const closeDialog = () => {
        setIsOpen(false)
        clearState()
    }

    const applyOverdueDate = (date) => {
        const formattedDate = new Date(date).getTime()
        setOverdueDate(formattedDate)
    }

    useEffect(() => {
        if (todo) {
            setTitle(todo.title)
            setDescription(todo.description)
            setOverdueDate(todo.overdueDate)
        }
    }, [todo, todoId])

    const handleEdit = () => {
        dispatch(editTodo({id: todo.id, title, description, overdueDate}))
        closeDialog()
    }

    return <Dialog open={isOpen} maxWidth={"sm"} PaperProps={{sx: customStyles.editDialogRoot}}>
        <DialogTitle>{"Edit todo"}</DialogTitle>
        <DialogContent id={"create-task-dialog-content"}>
            <Stack spacing={3} sx={customStyles.dialogContent}>
                <Stack spacing={2}>
                    <TextField autoFocus id={"title"} label={"title"} value={title} inputProps={{maxLength: 30}}
                               onChange={(event) => setTitle(event.target.value)}/>
                    <TextField id={"description"} label={"description"} value={description} multiline maxRows={5}
                               minRows={5} onChange={(event) => setDescription(event.target.value)}
                               inputProps={{maxLength: 220}}/>
                </Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker label={"Overdue date"} value={overdueDate} onChange={applyOverdueDate}
                                    renderInput={(params) => <TextField {...params}/>}/>
                </LocalizationProvider>
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button onClick={closeDialog}>Cancel</Button>
            <Button variant={"contained"} color={"primary"} onClick={handleEdit}>Save</Button>
        </DialogActions>
    </Dialog>
}

export default EditTodoDialog