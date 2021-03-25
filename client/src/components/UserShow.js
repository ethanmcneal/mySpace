import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { Button, Card, Header, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const UserShow = () => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const {user} = useContext(AuthContext)
    const [like, setLike] = useState(0)

    useEffect(()=> {
        getData()
    },[])

    const getData = async()=> {
        try{
            let res = await axios.get(`/users/${user.id}/posts`)
            setPost(res.data)
            setLoading(false)
        } catch(err) {
            alert('err')
            setLoading (false)
        }
    }

    if(loading) return <p>Loading</p>
    if(user.posts === 0) return <span>No Posts</span>

    function hitLike(){
        setLike(prevLike => prevLike +1)
    }





    return(
        <div>
            <Header as='h1'>Welcome to {user.nickname}'s page</Header>
            <div>
                <Card.Content>
                    <Button onClick={hitLike}>
                        {like} 👍
                    </Button>
                </Card.Content>

            </div>
               
            
        </div>

    )
}

export default UserShow