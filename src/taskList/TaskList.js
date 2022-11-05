import {useEffect} from "react"
import {loadTasks} from "./TaskAPI"
import {useDispatch, useSelector} from "react-redux"
import { Card, CardContent, Grid, Typography} from "@mui/material"
import {styles} from "./styles"

export const TaskList = () => {
    const customStyles = styles();
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)

    useEffect(() => {
        dispatch(loadTasks())
    }, [])

    const taskCard = (task) => (<Grid item flexGrow={1} style={customStyles.taskGrid}>
        <Card key={task.id} style={{height: 250}}>
            <CardContent>
                <Typography variant={"h6"} textOverflow={"ellipsis"} overflow={"hidden"}>{task.title}</Typography>
                <Typography variant={"body1"} style={customStyles.taskBody}>{task.description}</Typography>
                <Typography variant={"body2"}>{task.overdueDate}</Typography>
            </CardContent>
        </Card>
    </Grid>)

    return <Grid container spacing={5} style={customStyles.rootGrid}>
        {tasks && tasks.map(taskCard)}
    </Grid>
}