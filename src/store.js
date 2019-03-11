import {createStore, compose} from 'redux'
import reducer from './reducer'


// Redux Devtools
const enhancer = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducer, enhancer)

export default store