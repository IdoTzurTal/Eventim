import { React, useContext } from "react";
import { useForm } from 'react-hook-form';
import { EventContext } from "../App";

function Events() {

    const { register, handleSubmit } = useForm()
    const { eventValues, setEventValues } = useContext(EventContext)

    function submitData(data) {
        setEventValues([...eventValues, data])
        console.log(eventValues)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitData)}>
                <div>
                    <h1>Event Scheduler</h1>
                </div>
                <div>
                    <h3>Collaborate With Us!</h3>
                    <h4>Fill out the attached form and we will get back to you within the next 3 hours</h4>
                    <h5>Event Admission Form:</h5>
                    <div>
                        <input className="forminput" type="text" placeholder="Event Name" {...register("name")} />
                    </div>
                    <div>
                        Start Date: <input className="forminput" type="date" {...register("startdate")} />
                    </div>
                    <div>
                        End Date: <input className="forminput" type="date" {...register("enddate")} />
                    </div>
                    <div>
                        <input className="forminput" type="text" placeholder="Description" {...register("description")} />
                    </div>
                    <div>
                        <input className="forminput" type="text" placeholder="Contact Name" {...register("contactname")} />
                    </div>
                    <div>
                        <input className="forminput" type="number" placeholder="Contact Number" {...register("contactnumber")} />
                    </div>
                    <div>
                        <input type="submit" />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Events