import {useEffect, useState} from "react"
import {deleteTodo, loadTasks} from "./taskAPI"
import {useDispatch, useSelector} from "react-redux"
import {Box, Card, CardContent, Grid, IconButton, Stack, Typography} from "@mui/material"
import customStyles from "./styles"
import {DeleteOutline, EditOutlined} from "@mui/icons-material"
import {formatDate} from "../common/DateTimeUtility"
import EditTodoDialog from "./EditTodoDialog"

export const TaskList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.tasks.tasks)
    const [selectedTodoId, setSelectedTodoId] = useState(null)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const actions = (todo) =>
        (<Stack direction={"row"} marginLeft={"auto"}>
            <IconButton component={"label"} onClick={() => handleEditTodo(todo)}>
                <EditOutlined color={"primary"}/>
            </IconButton>
            <IconButton component={"label"} onClick={() => dispatch(deleteTodo(todo.id))}>
                <DeleteOutline color={"primary"}/>
            </IconButton>
        </Stack>)

    const handleEditTodo = (todo) => {
        setSelectedTodoId(todo.id)
        setIsEditDialogOpen(true)
    }

    useEffect(() => {
        dispatch(loadTasks())
    }, [])

    const taskCard = (task) => (<Grid item flexGrow={1} style={customStyles.taskGrid}>
        <Card key={task.id} style={{height: 250}}>
            <CardContent style={customStyles.cardContent}>
                <Box style={customStyles.mainContent}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Typography variant={"h6"} style={customStyles.todoTitle}>{task.title}</Typography>
                        {actions(task)}
                    </Stack>
                    <Typography variant={"body1"} style={customStyles.taskBody}>{task.description}</Typography>
                </Box>
                <Typography variant={"caption"}
                            style={customStyles.dateString}>{formatDate(task.overdueDate)}</Typography>
            </CardContent>
        </Card>
    </Grid>)

    return <Grid container spacing={5} style={customStyles.rootGrid}>
        {todos && todos.map(taskCard)}
        <EditTodoDialog isOpen={isEditDialogOpen} todoId={selectedTodoId} setIsOpen={setIsEditDialogOpen}/>
    </Grid>
}