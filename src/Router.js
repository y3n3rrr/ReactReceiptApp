import React, { Component } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Unauthorized } from "./components/Unauthorized";
import { Dashboard } from "./components/Dashboard";


const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#81b71a' }}>
      <Scene key="root" hideNavBar>
      <Scene key="Unauthorized" component={Unauthorized} title="401 Yetkisiz Erisim!"  />
        <Scene key="Home" initial>
          <Scene key="HomePage" component={Home} title="Ana Sayfa"  initial hideNavBar/>
          <Scene key="Login" component={Login} title="Oturum Aç"  />
        </Scene>

        <Scene key="DashboardScene">
          <Scene 
          rightTitle="Dashboard ->"
            onRight={() => Actions.DashboardPage()} 
            key="ProfilePage" 
            component={Profile} 
            title="Hoşgeldiniz :)" 
            />
          <Scene 
          rightTitle="Profile ->"
            onRight={() => Actions.ProfilePage()} 
            key="DashboardPage" 
            component={Dashboard} 
            title="Dashboard" 
            />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;