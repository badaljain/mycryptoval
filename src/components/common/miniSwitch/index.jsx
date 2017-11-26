import React from 'react'
import Switch from 'react-bootstrap-switch'
import styles from './style.css'

const MiniSwitch = (props) => {
    return(
        <div className={styles.switch}>
            <Switch 
                onChange={(el, state) => props.handleSwitch(el, state)}
                bsSize='mini'
                onColor='success'
                offColor='warning'
                labelText='Refresh'
            />
        </div>
    )
}

export default MiniSwitch