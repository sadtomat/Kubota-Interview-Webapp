import './Sidebar.css'

export default function Sidebar({ selectedFilters, onToggleFilter }) {
    const filters = ["tractor", "mower", "excavator"];

    return (
        <aside className="store-sidebar">
                <h1 className="sidebar-title">Categories:</h1>
                <div className="sidebar-options-list">
                    <h1 className="sidebar-header-items">Hardware type:</h1>
                    {filters.map((filter) => (
                        <button key={filter} onClick={() => onToggleFilter(filter)} className={`sidebar-buttons ${selectedFilters.includes(filter) ? "active" : ""}`}>
                            {selectedFilters.includes(filter) ? `${filter}s ☑` : `${filter}s ☐`}
                        </button>
                    ))}
                </div>
        </aside>
    );
}