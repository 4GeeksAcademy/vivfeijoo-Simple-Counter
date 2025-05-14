import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
    const digit6 = Math.floor(seconds / 100000) % 10;
    const digit5 = Math.floor(seconds / 10000) % 10;
    const digit4 = Math.floor(seconds / 1000) % 10;
    const digit3 = Math.floor(seconds / 100) % 10;
    const digit2 = Math.floor(seconds / 10) % 10;
    const digit1 = seconds % 10;

    return (
        <div className="big-counter d-flex justify-content-center align-items-center fs-1">
            <div className="bg-dark text-white p-3 m-1 rounded">
                <i className="fas fa-clock"></i>
            </div>
            <div className="bg-dark text-white p-3 m-1 rounded">{digit6}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{digit5}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{digit4}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{digit3}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{digit2}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{digit1}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};

export default SecondsCounter;
