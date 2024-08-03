import { useForm } from "react-hook-form"
import AddUser from "../../components/dashboard/AddUser"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Add = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        axios.post("http://localhost:4000/people/add", {
            ...data,
            'image': data.image[0]
        }, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then((res) => {
                alert("User Added Successfully.")
                console.log(res);
                navigate(`/${res.data.username}`)
            })
    }
    return (
        <>
            <h2>Add A User</h2>
            <AddUser register={register} handleSubmit={handleSubmit(onSubmit)} errors={errors} />
        </>
    )
}

export default Add