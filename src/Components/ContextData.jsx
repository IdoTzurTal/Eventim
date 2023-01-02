import { useState } from "react"

export function ContextData() {
    const [eventValues, setEventValues] = useState([{
        name: "Josh's Barmitzvah",
        startdate: "2023-12-14",
        enddate: "2023-12-14",
        description: "Our little Josh has turned 13 and the excitement is at its peak! Come join our simcha!",
        contactname: "Darren",
        contactnumber: "0546789743"
    },
    {
        name: "Inbal's 24th Birthday",
        startdate: "2022-11-05",
        enddate: "2022-11-06",
        description: "The most beautiful Inbal, aka 'Inbalon' is turning 24 and you know what time it is...",
        contactname: "Yarden",
        contactnumber: "0523268909"
    }])
    console.log(eventValues)
    return {
        eventValues,
        setEventValues
    }
}