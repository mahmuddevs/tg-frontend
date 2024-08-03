import axios from "axios"
import { useParams } from "react-router-dom"

const Person = () => {
    const { username } = useParams()
    if (username) {
        axios.get(`http://localhost:4000/${username}`)
            .then((res) => { console.log(res.data) })
            .catch((err) => { console.log(err) })
    }
    return (
        <div>Person</div>
    )
}

export default Person