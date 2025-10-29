import React from 'react';

interface Alert {
    id: number;
    message: string;
    timestamp: string;
}

interface AlertasListProps {
    alerts: Alert[];
}

const AlertasList: React.FC<AlertasListProps> = ({ alerts }) => {
    return (
        <div>
            <h2>Alertas</h2>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.id}>
                        <strong>{alert.message}</strong> - <em>{alert.timestamp}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertasList;
