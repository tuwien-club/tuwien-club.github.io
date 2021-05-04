import {BrowserRouter as Router, Route} from 'react-router-dom'

import {HomePageContainer as HomePage} from '@containers/HomePage'

import './_app.scss'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} id={'3'} name={'HomePage'} />}
        />
        {/* <Route exact path="/pages/:pageId" component={WTPagesPage} /> */}
        {/* <Route exact path="/pages/:pageId/edit" component={WTPagePage} /> */}
      </Router>
    </div>
  )
}

export default App
