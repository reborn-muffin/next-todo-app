import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material"
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers"
import {useState} from "react"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {createTodo} from "../../taskList/taskAPI"
import {useDispatch} from "react-redux"
import useStyles from "./styles"
import {useTheme} from "@mui/styles"

const CreateTodoDialog = ({isOpen, handleClose}) => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const customStyles = useStyles(theme)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [overdueDate, setOverdueDate] = useState(null)

    const clearState = () => {
        setTitle("")
        setDescription("")
        setOverdueDate(null)
    }

    const closeDialog = () => {
        handleClose()
        clearState()
    }

    const createHandle = () => {
        dispatch(createTodo(title, description, overdueDate))
        closeDialog()
    }

    const applyOverdueDate = (date) => {
        const formattedDate = new Date(date).getTime()
        setOverdueDate(formattedDate)
    }

    return <Dialog open={isOpen} onClose={closeDialog} maxWidth={"sm"} PaperProps={{sx: customStyles.createDialogRoot}}>
        <DialogTitle id={"create-task-dialog-title"}>
            {"Create task"}
        </DialogTitle>
        <DialogContent id={"create-task-dialog-content"}>
            <Stack spacing={3} sx={customStyles.createDialog}>
                <Stack spacing={2}>
                    <TextField autoFocus id={"title"} label={"title"} value={title} inputProps={{maxLength: 30}}
                               onChange={(event) => setTitle(event.target.value)}/>
                    <TextField id={"description"} label={"description"} value={description} multiline maxRows={5}
                               minRows={5} onChange={(event) => setDescription(event.target.value)}
                               inputProps={{maxLength: 220}}/>
                </Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker label={"Overdue date"}  value={overdueDate} onChange={applyOverdueDate}
                                       renderInput={(params) => <TextField {...params}/>} />
                </LocalizationProvider>
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={createHandle} variant={"contained"} color={"primary"}>Create</Button>
        </DialogActions>
    </Dialog>
}

export default CreateTodoDialog