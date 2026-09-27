import { Link } from "react-router-dom"

function HomePage() {
    return (
        <section>
            <h1>My locations</h1>
            <Link to="/location/test">Go to test location</Link>
        </section>
    )
}

export default HomePage