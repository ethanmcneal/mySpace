import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import CardContainer from '../style_components/CardContainer'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () =>{

    const [posts, setPosts] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        getPosts()
    },[])
    const getPosts = async() => {
        try { 
        let res = await axios.get('/all_posts')
        setPosts(res.data)
        console.log(res.data)
            
        } catch (error) {
            alert(error)
            
        }
    }

    const renderPosts = () => {
        return posts.map(p => {
            return (
            <CardContainer style={{width: 'auto'}} >
                {p.subject}
                <h1>{p.body}</h1>
                <img src={p.image}/>
                {/* <Card.Content>
                    <Button onClick={hitLike}>
                        {like} 👍
                    </Button>
                    </Card.Content> */}
            </CardContainer> )
        })
    }


    return(
        <div>
        <h1>DashBoard</h1>
       {user && <div>
           <CardContainer>
            <h1>Welcome back!</h1>
            <h3>How are you today {user.nickname}?</h3>
            
         </CardContainer> 
         <h1>Posts:</h1>
        <div>
        {renderPosts()}
        </div>
        </div>}
        
        </div>
    )

}

export default Home