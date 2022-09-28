import './Card.css';
import girl from '../../Images/girl.webp';

function Card(props) {
    let badgeText
    if (props.cardItem.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.cardItem.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {/* below it should be <img src={`../../images/${props.img}`}
                instead for it to work now i've replaced with <img src={girl}
            */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* ABOVE: If badgeText is truthy(if the text will be rendered) the right part will be run and viceversa*/}
            <img src={girl} className="card--image" alt="user"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="a star"/>
                <span>{props.cardItem.stats.rating}</span>
                <span className="gray">({props.cardItem.stats.reviewCount}) • </span>
                <span className="gray">{props.cardItem.location}</span>
            </div>
            <p className="card--title">{props.cardItem.title}</p>
            <p className="card--price"><span className="bold">From ${props.cardItem.price}</span> / person</p>
        </div>
    )
}

export default Card;