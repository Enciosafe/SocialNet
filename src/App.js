import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Friends from "./components/Friends/Friends";





const App = (props) => {

    return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Nav state={props.state} />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/>} />
                  <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />} />
                  <Route path='/friends' render={ () => <Friends state={props.state.friendsBar} />} />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/settings' component={Settings} />
              </div>
          </div>
      </BrowserRouter>
  );
}

 export default App;
