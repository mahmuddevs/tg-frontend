import { Link } from "react-router-dom"
import "./css/sidebar.css"
const Sidebar = () => {
    return (
        <aside className="col-1 col-md-2 m-0 p-0 sidebar">
            <div className="row py-3">
                <img src="" alt="" />
                <h4>Logo</h4>
            </div>
            <div className="row">
                <ul className="sidebar-menu">
                    <li className="sidebar-items">
                        <Link to={"show-all"}><i className="bi bi-people-fill"></i> <span>All Users</span></Link>
                    </li>
                    <li className="sidebar-items">
                        <Link to={"add"}><i className="bi bi-person-fill-add"></i> <span>Add User</span></Link>
                    </li>
                    <li className="sidebar-items">
                        <Link to={""}><i className="bi bi-pencil-fill"></i> <span>Change Logo</span></Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar