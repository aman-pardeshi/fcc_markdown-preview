import React from 'react';
import { marked } from 'marked';
import { initialData } from './initialData';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: initialData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div className='App'>
        <div className='editor-section'>
          <h2 className='section-title'>Editor</h2>
          <textarea
            id='editor'
            className='inputArea'
            onChange={this.handleChange}
            rows='12'
            cols='150'
            value={this.state.data}
          ></textarea>
        </div>
        <div className='preview-section'>
          <h2 className='section-title'>Preview</h2>
          <div
            id='preview'
            dangerouslySetInnerHTML={{
              __html: marked(this.state.data),
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
