import React from "react";
import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import TodoList from "./containers/TodoList/TodoList";
import MainState from "./context/MainContext/mainState";
import WatchList from "./containers/WatchList/WatchList";
import Blog from "./containers/Blog/Blog";
import CreatePost from "./containers/CreateForm/CreateForm";
import Post from "./containers/Post/Post";
import Template from "./containers/Template/Template";
import AdminPanel from "./containers/AdminPanel/AdminPanel";


function App() {
  return (
    <MainState>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/todo" component={TodoList} />
            <Route path="/films" component={WatchList}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/post/edit/:id' render={(props)=> <CreatePost edit={true} {...props}/>} />
            <Route path='/post/:id' component={Post}/>
            <Route path='/createPost' component={CreatePost}/>
            <Route path='/pages/admin' component={AdminPanel}/>
            <Route path='/pages/:id' component={Template}/>
            <Redirect to='/'/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </MainState>
  );
}

export default App;
