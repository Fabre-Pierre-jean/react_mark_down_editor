import React, {Component, Fragment} from 'react';
import {sampleText} from './sampleText';
import marked from 'marked';

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount() {
      const text = localStorage.getItem('text')
      if (text){
          this.setState({text})
      }else{
          this.setState({sampleText})
      }

  }

  componentDidUpdate() {
      const { text } = this.state
      localStorage.setItem('text', text)
  }

    handleChange = event => {
    const text = event.target.value
    this.setState({text})

  }

  isMarked = text => marked(text, {sanitize: true})

    render() {
        return (
            <Fragment>
                <div className="container py-3">
                    <div className="row">

                      <div className="col-sm-6">
                          <textarea
                              onChange={this.handleChange}
                              value={this.state.text}
                              rows="35"
                              className="form-control">

                          </textarea>
                        </div>

                        <div className="col-sm-6">
                          <div dangerouslySetInnerHTML={{ __html : this.isMarked(this.state.text)}}>

                          </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App;