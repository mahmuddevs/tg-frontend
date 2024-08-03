import { Outlet } from 'react-router-dom'
import Navbar from '../components/dashboard/Navbar'
import Sidebar from '../components/dashboard/Sidebar'

const Dashboard = () => {
    return (
        <div className="container-fluid p-0 d-flex">
            <Sidebar />
            <div className="col-11 col-md-10 ms-auto">
                <Navbar />
                <div className="m-3">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard