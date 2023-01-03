import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../App";
import '../Components/EventList.css'


function EventList() {
    const { eventValues } = useContext(EventContext)
    console.log(eventValues)
    return (
        <div>
            <ul className="list">
                {eventValues.map((event, index) => <li key={index}> {event.name} <Link className="infolink" to={`/EventDetails/${event.name}`}> More Info </Link> </li>)}
            </ul>
        </div>
    )
}
export default EventList