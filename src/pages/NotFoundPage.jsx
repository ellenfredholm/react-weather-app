import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <section>
            <h1>Page not found</h1>
            <Link to="/">Go to homepage</Link>
        </section>
    )
}

export default NotFoundPage