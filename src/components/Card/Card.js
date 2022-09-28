import './Card.css';
import girl from '../../Images/girl.webp';

function Card(props) {
    return (
        <div className="card">
            {/* below it should be <img src={`../../images/${props.img}`}
                instead for it to work now i've replaced with <img src={girl}
            */}
            <img src={girl} className="card--image" alt="user"/>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="a star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;