import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";
import { Link, useNavigate } from "react-router-dom"

const ShowAll = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:4000/people/all-users");
            setUsers(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    const handleEdit = (user) => {
        navigate(`/dashboard/edit/${user}`)
    };

    const handleDelete = async (username) => {
        try {
            await axios.delete(`http://localhost:4000/people/${username}`);
            alert("User Deleted!!");
            fetchUsers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>All Users</h2>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <table className="table table-striped-columns mt-3">
                        <thead className="table-info">
                            <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Company</th>
                                <th>Phone</th>
                                <th>Ip Phone</th>
                                <th>Email</th>
                                <th>Company Url</th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} className="align-middle">
                                    <td>{user.name}</td>
                                    <td>{user.designation}</td>
                                    <td>{user.company}</td>
                                    <td>{user.phone ? user.phone : "N/A"}</td>
                                    <td>{user.ipPhone ? user.ipPhone : "N/A"}</td>
                                    <td>{user.email}</td>
                                    <td>{user.companyUrl}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <img
                                            style={{ height: "80px", width: "150px" }}
                                            src={`http://localhost:4000/${user.image}`}
                                            alt=""
                                        />
                                    </td>
                                    <td>
                                        <div className="d-flex gap-3 align-items-center justify-content-center">
                                            <i
                                                className="bi bi-pencil-fill text-success"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => { handleEdit(user.username) }}
                                            ></i>
                                            <i
                                                className="bi bi-trash-fill text-danger"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => { handleDelete(user.username) }}
                                            ></i>
                                            <Link to={`/${user.username}`}><i class="bi bi-file-earmark-person-fill"></i></Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};

export default ShowAll;
