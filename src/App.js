import { React, useState } from 'react';
import './App.css';
import Events from './Components/EventForm'
import { createContext } from 'react';
import { ContextData } from './Components/ContextData';
import  EventList  from './Components/EventList';
import { NavLink, Route, Routes } from 'react-router-dom';
import EventDetails from './Components/EventDetails';
import Home from './Pages/Home'
import Error from './Pages/Error';


export const EventContext = createContext()
function App() {
  const {eventValues, setEventValues} = ContextData()
  const contextValues = {eventValues, setEventValues}
  console.log(eventValues)
  return (
    <EventContext.Provider value={contextValues}>
    <div className="App">
      <div className='navbar'>
      <NavLink className='navlogo' to='/Home'>EVENTIM</NavLink>
      <NavLink className="navbar" to='/Home'>Home</NavLink>
      <NavLink className="navbar" to='/EventForm'>Submission Form</NavLink>
      <NavLink className="navbar" to='/EventList'>List of Events</NavLink>
      <NavLink className="navbar" to='/EventDetails'>Event Info</NavLink>
      </div>
      <Routes>
      <Route path='/EventForm' element={<Events/>}/>
      <Route path='/EventList' element={<EventList/>}/>
      <Route path='/EventDetails/:id' element={<EventDetails/>}/>
      <Route path='/EventDetails' element={<EventDetails/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
      </EventContext.Provider>
  );
}

export default App;
