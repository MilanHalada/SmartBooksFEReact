import React from "react";


interface ProgressInterface{
    value: number;
}

const Progress : React.FC<ProgressInterface> = ({value = 0}) => {

    if (value >= 1) {
        return (
            <span className="badge rounded-pill bg-primary">Dokoncene: {Intl.NumberFormat('sk-SK', { style: 'percent' }).format(value)}</span>
        )
    }
    if (value > 0) {
        return (
            <span className="badge rounded-pill bg-warning">In progress: {Intl.NumberFormat('sk-SK', { style: 'percent' }).format(value)}</span>
        )
    }

    return (
        <span className="badge rounded-pill bg-danger">Nezacate: {Intl.NumberFormat('sk-SK', { style: 'percent' }).format(value)}</span>
    )
};

export default Progress;