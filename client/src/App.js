import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import About from "./components/About";
import StyledComponents from "./style_components/StyledComponents";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import UserShow from "./components/UserShow";
import NewPost from "./pages/NewPost";
import UpdatePost from "./pages/UpdatePost";
import AllUsers from "./components/AllUsers";
import ShowOther from "./components/User";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#E4DFE0" }}>
        <NavBar />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route
              exact
              path="/currentUserShow/:user_id"
              component={UserShow}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/createPost" component={NewPost} />
            <Route exact path="/styled" component={StyledComponents} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/posts/edit" component={UpdatePost} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/user/:id" component={ShowOther} />
          </Switch>
        </FetchUser>
      </div>
    </>
  );
}

export default App;
