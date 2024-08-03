import { useNavigate, useParams } from "react-router-dom"
import AddUser from "../../components/dashboard/AddUser"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import Spinner from "../../components/Spinner"


const Edit = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { username } = useParams();

    const fetchUser = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/people/${username}`);
            setUser(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUser()
    }, [])

    const onSubmit = (data) => {
        axios.put(`http://localhost:4000/people/edit/${username}`, {
            ...data,
            'image': data.image[0]
        }, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((res) => {
                alert("User Edited Successfully.")
                console.log(res);
                navigate(`/${res.data.username}`)
            })
            .catch((err) => { console.log("something went wrong on edit page") })
    }

    return (
        <>
            <h2>Edit User</h2>
            {loading ?
                <Spinner />
                :
                <AddUser register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} user={user} />
            }
        </>
    )
}

export default Edit