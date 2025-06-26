import AgendaListItem from './AgendaListItem';
import React from 'react';

type AgendaItem = {
    time: string;
    section: string;
};

type AgendaListProps = {
    agenda: AgendaItem[];
};

function AgendaList({ agenda }: AgendaListProps) {
    return (
        <ul style={{ width: '840px', margin: '0 auto', padding: 0, listStylePosition: 'inside' }}>
            {agenda.map(({ time, section }, idx) => (
                <AgendaListItem key={idx} time={time} section={section} idx={idx} />    
            ))}
        </ul>
    );
}

export default AgendaList;