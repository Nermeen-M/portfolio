import logo from "../assets/images/logo.svg";

export default function Header(){
    const scrollHandler = (scrollToId) => {
        var element = document.getElementById(scrollToId);
        window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
        });
    };

    return(<header>
        <img src={logo} alt="NI initials for Nermeen Ibrahim" width="70" height="60" className="logo" onClick={() => scrollHandler("hero")} />
        <nav>
            <button onClick={() => scrollHandler("about")}>About</button>
            <button onClick={() => scrollHandler("projects")}>Projects</button>
            <button onClick={() => scrollHandler("tech")}>Tech</button>
            <button onClick={() => scrollHandler("contact")}>Contact</button>
        </nav>
    </header>);
}