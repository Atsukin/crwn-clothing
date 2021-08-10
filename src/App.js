import './App.css';
import {Route, Link} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'


const TopicsList = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Topic List</h1>
        </div>
    )
}
const TopicDetail = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Topic Detail Page: {props.match.params.topicId}</h1>
        </div>
    )
}

function App() {
  return (
      <div>
        <Route path='/' component={HomePage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </div>
  );
}

export default App;
