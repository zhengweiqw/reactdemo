
import './App.css';

import React, { Component } from 'react'
import Home from './pages/home'
import About from './pages/about'
import { NavLink ,Route,Switch} from 'react-router-dom';
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MyNavLink from './component/navlink'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
export default class App extends Component {
  render() {
    return (
      <div>
          <h1>这是app组件</h1>
          <div style={{display:'flex'}}> 
            <div>
              {/* <NavLink activeClassName="accc" to="/home/a/b">
              home
              </NavLink> */}
              <NavLink activeClassName="accc" to="/home">
              home2
              </NavLink>
              <MyNavLink  to="/about" a='你好'> aboutchildren</MyNavLink>
              {/* 这个aboutchildren默认在this。props.children中 */}
            </div>
            <div style={{width:'500px',height:'500px',border:'1px solid #ccc'}}>
                    <Switch>
                      <Route path="/home" exact component={Home} />
                      {/* exact开启严格匹配，必须完美对应才行，但开启或许会导致无法跳转到二级路由问题 */}
                      <Route path="/about" component={About}/>
                      <Redirect to="/home" />
                      {/* redirect重定向，参数不用path，用to，当前路由无法匹配上时，使用to的路径， */}
                    </Switch>
            </div>
          </div>
          
      </div>
    )
  }
}


// export default App;
