import React from "react";
import PropTypes from 'prop-types';

export default function Task({ task: {id, title, state}, onArchiveTask, onPinTask }){

    return (
        <div className={`list-item ${state}`}>
            <label htmlFor="title" aria-label="title" className="checkbox">
                <input type="checkbox" disabled={true} name="checked" checked= {state == "TASK_ARCHIED"} id={`archiveTask-${id}`} />
                <span className="checkbox-custom" onClick={ ()=>onArchiveTask(id) }></span>
            </label>
            <label htmlFor="title" aria-label={title} className="title">
                <input type="text" value={title} readOnly={true} name="title" placeholder="Input title" />
            
            </label>
            {state !== "TASK_ARCHIVED" && (
                <button
                className="pin-button"
                onClick={() => onPinTask(id)}
                id={`pinTask-${id}`}
                aria-label={`pinTask-${id}`}
                key={`pinTask-${id}`}
                >
                <span className={`icon-star`} />
                </button>
            )}
        </div>
    )

}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        state:PropTypes.string.isRequired
    }),
    onArchiveTask:PropTypes.func,
    onPinTask: PropTypes.func
}