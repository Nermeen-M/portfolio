export default function ContactItem({imgName, label }){
    return <div className="contact-item">
        <span className="icon">
            <img src={require(`../assets/images/icons/${imgName}`)} />
        </span>
        <p>{label}</p>
    </div>
}