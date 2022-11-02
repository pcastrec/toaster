import React from "react"
import { Toast } from "./Toast/Toast"

export const Playground = () => {

    const [style, setStyle] = React.useState('')
    const [position, setPosition] = React.useState('')

    const [visible, setVisible] = React.useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setVisible(true)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Type: <input value={style} onChange={e => setStyle(e.target.value)} /></label>
            </div>
            <div>
                <label>Positions: <input value={position} onChange={e => setPosition(e.target.value)} /></label>
            </div>
            {visible && <Toast setVisible={setVisible} time={3000} message={'Hello World'} type={style} position={position.split(' ')} />}
            <button type="submit">Toast</button>
        </form>
    )
}