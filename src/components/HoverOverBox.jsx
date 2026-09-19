import "./HoverOverBox.css";

export default function HoverOverBox({title, content, type}) {

    const className = `content ${type !== "phone" ? `content--${type}` : ""}`.trim();

    return (
        <div className="box">
            <h1 className="top-text">{title}</h1>
            <h1 className={className}>{content}</h1>
        </div>
    )
}