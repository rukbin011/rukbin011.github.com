import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './helpers'
import { App } from './containers/App'

import { configureFakeBackend } from './helpers'

configureFakeBackend()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)