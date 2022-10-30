import {Header} from "./Header"
import {Box} from "@mui/material"
import {SideBar} from "./SideBar"

export const Layout = ({children}) => {
    return <Box display={"flex"} justifyContent={"space-between"}>
            <Header />
            <SideBar />
            {children}
    </Box>
}