import { useEffect, useState } from "react";

// where the ISS at api url
const API_URL = 'https://api.wheretheiss.at/v1/satellites/25544'

const useIssTrackedProps = () => {
    // *** Required states and func ***
    const [center,setCenter] = useState([0,0])
    const [issMarker,setIssMarker] = useState({
        geocode: [0,0], 
        popUp: 'ISS position'
    })

    const getISS = async()=>{
        try {
            const response = await fetch(API_URL)
            if(!response.ok) throw Error ('Did not receive ISS data')
            const data = await response.json()
            const {latitude, longitude} = data
            // set marker on ISS position
            setIssMarker({
                geocode: [latitude,longitude], 
                popUp: 'ISS position'
            })
            // set map center
            setCenter([latitude,longitude])

        } catch (error) {
            throw Error (error.message)
        }
    }

    // once screen loads :getISS every 3sec 
    useEffect(() => {
        setInterval(getISS,3000)

        return () => {
            clearInterval();
        };
    }, []);

    return [center,issMarker]
}

export default useIssTrackedProps