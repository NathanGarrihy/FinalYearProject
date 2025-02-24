import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Homepage from "./components/homepage.component";
import Navagation from "./components/navagation.componant";
import AddItem from "./components/addItem.component";
import AvailableItems from './components/availableItems.component';
import ContactForm from './components/ContactForm';
import AddWantedItem from "./components/addWantedItem.component";
import WantedItems from "./components/wantedItems.component";
import Account from "./components/account.component";
import MyAvailable from './components/myAvailable.component';
import MyWanted from "./components/myWanted.component";
import EditAvailable from './components/editAvailableItem';
import ViewAvailable from './components/viewAvailable.component';
import ViewWanted from './components/viewWanted.component';
import SavedParent from './components/savedParent.component';
import EmailOut from './components/emailOut.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <Navagation />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/addItem" component={AddItem}/>
          <Route exact path="/addWantedItem" component={AddWantedItem}/>
          <Route exact path="/availableItems" component={AvailableItems}/>
          <Route path='/availableItems/:id' component={ViewAvailable}></Route>
          <Route path='/wantedItems/:id' component={ViewWanted}></Route>
          <Route exact path="/wantedItems" component={WantedItems}/>
          <Route exact path="/contact" component={ContactForm}/>
          {/* <Route exact path="/send" component={EmailOut}/> */}
          <Route exact path="/account" component={Account}/>
          <Route exact path="/myAvailable" component={MyAvailable}/>
          <Route exact path="/myWanted" component={MyWanted}/>
          <Route path="/edit/" component={EditAvailable}/>
          <Route path="/mySaved/" component={SavedParent}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;