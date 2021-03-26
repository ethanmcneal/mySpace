import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { Button, Card, Grid, Header, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CardContainer from '../style_components/CardContainer'

const UserShow = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    const {user} = useContext(AuthContext)
    const [like, setLike] = useState(0)

    useEffect(()=> {
        getData()
    },[])

    const deletePost = async(id) => {
        try {
            await axios.delete(`/users/${user.id}/posts/${id}`)
            window.location.reload()
            
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async()=> {
        try{
            let res = await axios.get(`/users/${user.id}/posts`)
            setPosts(res.data)
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

    const renderPosts = () => {
        return posts.map(p => {
            return (
            <CardContainer style={{width: 'auto'}} >
                {p.subject}
                <h1>{p.body}</h1>
                <img src={p.image}/>
                <Card.Content>
                    <Button onClick={hitLike}>
                        {like} 👍
                    </Button>
                    <Link to='/posts/edit'>
                    <Button>Edit</Button>
                    </Link>
                    <Button color='red' onClick={()=>{deletePost(p.id)}}>Delete</Button>
                </Card.Content>
            </CardContainer> )
        })


    }




    return(
        <div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <Header as='h1'>Welcome to {user.nickname}'s page</Header>
            <Link to='/createPost'>
            <Button color='google plus'>New Post</Button>
            </Link>
            </div>
            
               {posts && <div style={{display: 'grid'}}> {renderPosts()} </div> }
               
            
        </div>

    )
}

export default UserShow