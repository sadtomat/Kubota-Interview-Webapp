import "./HistoryItem.css";

export default function HistoryItem({info}) {
    const date = new Date(info.OrderDate).toISOString().split("T")[0];

    return (
        <div className="historyitem-outerbox">
            <div className="historyitem-groupedtext">
                <h1 className="historyitem-header">ID:</h1>
                <h1 className="historyitem-answer">{info.OrderId}</h1>
            </div>
            <div className="historyitem-groupedtext">
                <h1 className="historyitem-header">Date:</h1>
                <h1 className="historyitem-answer">{date}</h1>
            </div>
            <div className="historyitem-groupedtext">
                <h1 className="historyitem-header">Total:</h1>
                <h1 className="historyitem-answer">${info.Total}</h1>
            </div>
        </div>
    )
}