import { Link } from 'react-router-dom'

function Missing() {
    return (
        <main>
            <h1>404</h1>
            <h2>Error</h2>
            <div className="missing-message">Page is not found</div>
            <Link to='/'><button className="missing-btn">Back to main page</button></Link>

        </main>
    )
}

export default Missing;