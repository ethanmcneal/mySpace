import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Card, Grid, Header, Icon, Image } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import CardContainer from "../style_components/CardContainer";

const ShowOther = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [like, setLike] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get(`/users/${id}`);
      setUser(res.data.user);
      setPosts(res.data.posts);
      setLoading(false);
    } catch (err) {
      alert("err");
      setLoading(false);
    }
  };

  if (loading) return <p>Loading</p>;
  if (posts === 0) return <span>No Posts</span>;

  function hitLike() {
    setLike((prevLike) => prevLike + 1);
  }

  const renderPosts = () => {
    return posts.map((p) => {
      return (
        <CardContainer style={{ width: "auto" }}>
          {p.subject}
          <h1>{p.body}</h1>
          <img src={p.image} />
          <Card.Content>
            <Button onClick={hitLike}>{like} 👍</Button>
          </Card.Content>
        </CardContainer>
      );
    });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={user.image} />
        <Header as="h1">Welcome to {user.nickname}'s page</Header>
      </div>

      {posts && <div style={{ display: "grid" }}> {renderPosts()} </div>}
    </div>
  );
};

export default ShowOther;
