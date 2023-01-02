import React from "react";


interface ScoreInterface{
    value: number;
}

const Score : React.FC<ScoreInterface> = ({value = 0}) => {

    if (value >= 1) {
        return (
            <span className="badge rounded-pill bg-primary">{value}%</span>
        )
    }
    if (value > 0) {
        return (
            <span className="badge rounded-pill bg-warning">{value}%</span>
        )
    }

    return (
        <span className="badge rounded-pill bg-danger">{value}%</span>
    )
};

export default Score;