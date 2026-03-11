import "./Card.css";
import { type FC } from 'react';
import noImg from "../../../public/no-img.jpg";
import { type Report } from '../../interfaces/report.interfaces';


const Card : FC<Report> = ({category, urgency, message, filePath, createdAt, userId})=>{

    return (
        <div className='card'>
            <section className='img-section'>
                <img className="img" src={filePath ? "http://localhost:3000/" + filePath : noImg} />
            </section>
            <section className='info-section'>
                <ul>
                    <li><span className="name">Agent Id :</span> {userId}</li>
                    <li><span className="name">Category :</span> {category}</li>
                    <li><span className="name urgency">Urgency :</span> {urgency.toUpperCase()}</li>
                    <li><span className="name">Created At :</span> {new Date(createdAt).toDateString()}</li>
                    <li><span className="name">Message :</span> {message}</li>
                </ul>
            </section>
        </div>
    )
};

export default Card;