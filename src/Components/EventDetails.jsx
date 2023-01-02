import { useContext } from "react"
import { useParams } from "react-router-dom"
import { EventContext } from "../App";

function EventDetails() {
    const params = useParams()
    const { eventValues, setEventValues } = useContext(EventContext)
    function deleteEvent(eventIndex) {
        setEventValues(eventValues.filter(item => eventValues[eventIndex] !== item ))
    }
    const specificEvent = eventValues.filter(event => params.id === event.name )
    return (
        <div>
            <ul className="list">
                {eventValues.map((event, index) => <li> {event.name} | From {event.startdate} | To {event.enddate} <button onClick={() => deleteEvent(index)}>Delete</button> <br /> {event.description} <br /> <hr /> Contact Details: <br /> {event.contactname} <br /> {event.contactnumber} </li>)}
            </ul>
            <ul className="list">
                {specificEvent.map((event, index) => <li> {event.name} | From {event.startdate} | To {event.enddate} <button onClick={() => deleteEvent(index)}>Delete</button> <br /> {event.description} </li>)}
            </ul>
        </div>
    )
}

export default EventDetails