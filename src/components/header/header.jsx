import styles from './header.css'


function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">

                    <a href="https://urfu.ru" className="urfu_logo" target="_blank"></a>

                    <div className="phone_links">
                        <a href="/" className="phone_link lk">Личный кабинет</a>
                        <a className="phone_link" href="tel: +7 (800) 100-50-44">+7(800)100-50-44</a>
                        <a className="phone_link" href="tel: +7 (343) 375-44-44">+7(343)375-44-44</a>
                    </div>
                    
                </nav>
            </div>

            <div class="para">
                <div class="text">Абитуриент</div>
                <div class="par"></div>
            </div>

            <div className="header__pic_abi"></div>

        </header>
    )
}

export default Header