import React from 'react'
import { createRoot } from 'react-dom/client'

import { Playground } from './src/Playground'

const App = () => {
    return (
        <Playground />
    )
}

const app = createRoot(document.getElementById('root'))
app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)