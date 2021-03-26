import axios from "axios"
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { Form } from "semantic-ui-react"
import UserShow from "../components/UserShow"
import { AuthContext } from "../providers/AuthProvider"
import Button from "../style_components/Button"
import CardContainer from "../style_components/CardContainer"
import Input from "../style_components/Input"

const NewPost = () => {
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const history = useHistory()

    const {user} = useContext(AuthContext)

    const handlePost = async() => {
        try {
            let res = await axios.post(`/users/${user.id}/posts`, {subject, body, image})
            console.log(res)
            history.push(`/currentUserShow/${user.id}`)

            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <CardContainer>
            <Form>
                <p>Subject</p>
                <Input 
                name='subject'
                value={subject}
                onChange={(e)=> setSubject(e.target.value)}/>
                <p>Body</p>
                <Input 
                name='body'
                value={body}
                onChange={(e)=> setBody(e.target.value)}/>
                <p>Image</p>
                <Input 
                name='image'
                value={image}
                onChange={(e)=> setImage(e.target.value)}/>

                <Button onClick={handlePost}>Post</Button>

            </Form>

        </CardContainer>
    )
}

export default NewPost
