import ContactItem from "./ContactItem";

import Linkedin from "../assets/images/icons/linkedin.svg";
import GitHub from "../assets/images/icons/github.svg";
import Instagram from "../assets/images/icons/instagram.svg";

export default function(){
    function openInNewTab(url){
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return<section id="contact">
        <div className="contact-list">
            <h2>Contact me</h2>
            <p className="description">Here are my contact informtion if you are interested in starting a collaboration.</p>
            <ContactItem label={"nermeen.mamdouh.nm@gmail.com"} imgName={"mail.svg"} />
            <ContactItem label={"+46 700233994"} imgName={"phone.svg"} />
            <ContactItem label={"Stockholm, Sweden"} imgName={"location.svg"} />
        </div>
        <div className="networking">
            <div className="social-media">
                <button onClick={() => openInNewTab("https://www.linkedin.com/in/nermeen-mamdouh/")}><img src={Linkedin} /></button>
                <button><img src={GitHub} onClick={() => openInNewTab("https://github.com/Nermeen-M")} /></button>
                <button><img src={Instagram} onClick={() => openInNewTab("https://www.instagram.com/")} /></button>
            </div>
            <span className="copyright">&copy; 2022 - Nermeen Ibrahim</span>
        </div>
    </section>
}