import React, { useState, useEffect } from 'react';
import './App.scss';
import SideNav from './components/sidenav';
import Home from './pages/home';
import { FaBars } from 'react-icons/fa';
import Content from './components/content';
import { Switch, Route } from 'react-router-dom'
import About from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
export const PersonContext = React.createContext({});


function App() {
  // const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [person, setPerson] = useState({});

  useEffect(() => {
    // Run! Like go get some data from an API.
    fetch('data/cv.json').then((r) => r.json())
    .then((data) => {
      setPerson(data);
    })
  }, []);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <PersonContext.Provider value={person}>
    <div className="App">
      <SideNav
        collapsed={false}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <div className="mainBody">
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars color="#adadad" style={{ width: 35, height: 35 }} />
        </div>
        <Content>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/blog' component={() => {
              window.open(person.blogUrl);
              return (<div>      
                <h1 className="pageTitle">BLOG</h1>
              </div>);
            }} />
          </Switch>
        </Content>
      </div>
    </div>
    </PersonContext.Provider>
  );
}

export default App;
