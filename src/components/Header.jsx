import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="site-header">
            <span className="app-name"><span className="material-symbols-outlined">cloud</span><span className="material-symbols-outlined">clear_day</span><span className="material-symbols-outlined">rainy</span></span>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/locations">
                    Manage locations
                </NavLink>
            </nav>
        </header>
    )
}

export default Header