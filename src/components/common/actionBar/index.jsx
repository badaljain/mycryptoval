import React from 'react'

const ActionBar = (props) => {
    return (
        <div>
            <span> { props.title } </span>
            { props.children }
            <hr />
        </div>
    )
}

export default ActionBar