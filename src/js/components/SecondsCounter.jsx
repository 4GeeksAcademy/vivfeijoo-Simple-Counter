import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="big-counter d-flex justify-content-center align-items-center fs-1">
            <div className="bg-dark text-white p-3 m-1 rounded">
                <i className="fas fa-clock"></i>
            </div>
            <div className="bg-dark text-white p-3 m-1 rounded">{Math.floor(seconds / 100000) % 10}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{Math.floor(seconds / 10000) % 10}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{Math.floor(seconds / 1000) % 10}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{Math.floor(seconds / 100) % 10}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{Math.floor(seconds / 10) % 10}</div>
            <div className="bg-dark text-white p-3 m-1 rounded">{seconds % 10}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};

export default SecondsCounter;
