import {useEffect} from "react"
import {deleteTodo, loadTasks} from "./taskAPI"
import {useDispatch, useSelector} from "react-redux"
import {Card, CardContent, Grid, IconButton, Stack, Typography} from "@mui/material"
import customStyles from "./styles"
import {DeleteOutline} from "@mui/icons-material"

export const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(loadTasks())
    }, [])

    const taskCard = (task) => (<Grid item flexGrow={1} style={customStyles.taskGrid}>
        <Card key={task.id} style={{height: 250}}>
            <CardContent style={customStyles.cardContent}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant={"h6"} textOverflow={"ellipsis"} overflow={"hidden"}>{task.title}</Typography>
                    <IconButton component={"label"} onClick={() => dispatch(deleteTodo(task.id))} style={{marginLeft: "auto"}}>
                        <DeleteOutline color={"primary"}/>
                    </IconButton>
                </Stack>
                <Typography variant={"body1"} style={customStyles.taskBody}>{task.description}</Typography>
                <Typography variant={"body2"}>{task.overdueDate}</Typography>
            </CardContent>
        </Card>
    </Grid>)

    return <Grid container spacing={5} style={customStyles.rootGrid}>
        {tasks && tasks.map(taskCard)}
    </Grid>
}