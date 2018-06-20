class HelloWorld extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 jumbotron text-center">
            <h1>Hello World from React, hosted by Golang & Gin</h1>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));