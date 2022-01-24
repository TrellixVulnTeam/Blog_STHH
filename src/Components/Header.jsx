function Header({img,title,subtitle}){
    return (
        <section id="header">
        <img id="header-image" src={img} />
        <div id="header-content">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
        </section>
    )
}

export default Header