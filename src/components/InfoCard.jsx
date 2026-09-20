import "./InfoCard.css";

export default function InfoCard({title, info}){

    return (
        <div className="infocard-ind">
            <h1 className="infocard-title">{title}</h1>
            <p className="infocard-body">{info}</p>
        </div>
    )
}