import {BrowserRouter as Router, Route} from 'react-router-dom'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" />
        {/* <Route exact path="/pages/:pageId" component={WTPagesPage} /> */}
        {/* <Route exact path="/pages/:pageId/edit" component={WTPagePage} /> */}
      </Router>
    </div>
  )
}

export default App
