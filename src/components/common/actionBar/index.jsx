import React from 'react'

const ActionBar = (props) => {
    return (
        <div>
            <span> { props.title } </span>
            { props.children }
            <div className='clearfix' />
            <hr />
        </div>
    )
}

export default ActionBar