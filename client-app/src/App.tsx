import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {
  // USE STATE HOOK BREAK DOWN:
  // 1) open an instance: const[]  2) var storing state: activities 3) func to set state: setActivities 4) use reactHook to useState: useState()! import {useState}
  // 5) var intitial state: useState([]) *** var == empty arr *** 
  const [activities, setActivites] = useState([]);
  // 6) fetch activities from API Server: useEffect
  // provide useEffect with a function with no parameters: syntax () => { statements } ***es6 => {} shorter syntax for function** 
  //axios is promise based -> proxy for a value not necessarily known | get(promise) **when recv** .then(axios resp)
  // passing data from response to Actvities *** data is a property of response
  // !!! useEffect can be an infinate loop. Reasoning -> will update activities - then rerenders occur, thus calling useffect again
  // add an array of dependencies: , []
  useEffect(() =>{
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivites(response.data)
    })
  }, [])

  return (
    <div >
      <Header as='h2' icon='users' content='Reactivities' />

      <List>
      {activities.map( (activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
      </List>


    </div>
  );
}

export default App;
