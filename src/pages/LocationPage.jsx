import { useParams } from "react-router-dom"

function LocationPage() {
    const { id } = useParams()
    return <h1>Location: {id}</h1>
}

export default LocationPage