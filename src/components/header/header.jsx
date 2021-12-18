import styles from './header.css'


function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="https://urfu.ru" className="urfu_logo" target="_blank"></a>
                    <a className="phone_link" href="tel: +7 (343) 375-44-44">+7 (343) 375-44-44</a>
                </nav>
            </div>
        </header>
    )
}

export default Header