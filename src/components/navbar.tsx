import Link from "next/link"

async function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" href="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/employee">Employee</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link href='/signin' className="btn btn-outline-success">Sign In</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar