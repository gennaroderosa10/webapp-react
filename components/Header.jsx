export default function Header({ nomeApp }) {
    const headerLinks = [{ title: "Home", path: "/" }, { title: "Film", path: "/movies" }]
    return (
        <header><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">{nomeApp || "Default App"}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {headerLinks.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <a className="nav-link" aria-current="page" href={link.path}>
                                {link.title}
                            </a>
                        </li>
                    ))}


                </ul>
            </div>
        </nav> </header>
    )
}