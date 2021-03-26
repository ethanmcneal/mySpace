import axios from "axios"
import { useEffect, useState } from "react"
import CardContainer from "../style_components/CardContainer"

const AllUsers = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        getData()
    }, [])


    const getData = async()=> {
        try{
            let res = await axios.get(`/users`)
            setUsers(res.data)
            console.log(users)
        } catch(err) {
            alert('err')
        }
    }

    const renderUser = () =>{
        return users.map(user => {
            return(
                <CardContainer>
                    <p>{user.email}</p>
                    <h1>{user.nickname}</h1>
                    <img src={user.image}/>
                    
                </CardContainer>

            )})
    }
    return (
        <div>
        <h1>all users</h1>
       {users && <div>{renderUser()}</div>}
        </div>
    )
}
export default AllUsers