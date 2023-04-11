import { Outlet } from 'react-router-dom'

import UserFooter from "./userFooter"
import UserHeader from "./userHeader"
import Slider from './slider'
import Menu from './menu'

const UserLayout = () => {
    return <>
        <UserHeader />
        {/* <Menu /> */}
        <Slider />
        <Outlet />
        <UserFooter />
    </>
}

export default UserLayout