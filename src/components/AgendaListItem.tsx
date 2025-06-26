type AgendaListItemProps = {
    time: string;
    section: string;
    idx: number;
};

function AgendaListItem({ time, section, idx }: AgendaListItemProps) {
    return (
        <li
            key={idx}
            className="agenda-item"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                fontFamily: 'inherit',
                padding: '2px 0',
            }}
        >
            <strong className="agenda-time" style={{ minWidth: '3em', textAlign: 'right', display: 'inline-block' }}>
                {time}
            </strong>
            <span className="agenda-separator">—</span>
            <span className="agenda-section">{section}</span>
        </li>
    );
}

export default AgendaListItem;