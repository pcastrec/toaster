import React from "react"

import './toast.css'

export const Toast = ({ setVisible, message, time=1000, type='default', position=['bottom', 'center'] }) => {

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, time);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`toast ${type} ${position.join(' ')}`}>{message}</div>
    )
}