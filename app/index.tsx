import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
    public render() {
        return (
            <div>
                Hello Typescript!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
