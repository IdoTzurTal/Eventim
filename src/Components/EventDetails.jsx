import { useContext } from "react"
import { useParams } from "react-router-dom"
import { EventContext } from "../App";

function EventDetails() {
    const params = useParams()
    // const [render, setRender] = useState(false)
    const { eventValues, setEventValues } = useContext(EventContext)
    const specificEvent = eventValues.filter(event => params.id === event.name )
    function deleteEvent(eventIndex) {
        setEventValues(eventValues.filter(item => eventValues[eventIndex] !== item ))
    }
    // function edit(key){
    //     events[index] [key] = change;
    //     setEventValues(eventValues)
    //     setRender(!render)
    // }
    return (
        <div>
            <ul className="list">
                {eventValues.map((event, index) => <li key={index}> {event.name} | From {event.startdate} | To {event.enddate} <button onClick={() => deleteEvent(index)}>Delete</button> <br /> {event.description} <br /> <hr /> Contact Details: <br /> {event.contactname} <br /> {event.contactnumber} </li>)}
            </ul>
            <ul className="list">
                {specificEvent.map((event, index) => <li key={index}> {event.name} | From {event.startdate} | To {event.enddate} <button onClick={() => deleteEvent(index)}>Delete</button> <br /> {event.description} </li>)}
            </ul>
        </div>
    )
}

export default EventDetails