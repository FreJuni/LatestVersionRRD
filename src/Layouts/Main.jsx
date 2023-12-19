import Nav from "../components/Nav"
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
        <Nav />
        <Outlet />
    </div>
  )
}

export default Main