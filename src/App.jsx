import React, { Component } from 'react';
import { connect } from "react-redux";
import {addElement, deleteElement} from "./store/action_creators";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  render () {
    const { list, addElement, deleteElement } = this.props;
    const { text } = this.state;

    const handleAddElement = () => {
      addElement( text );
    };

    const handleChangeInput = (event) => {
      const { value } = event.currentTarget;
      this.setState({ text: value });
    };

    return (
      <div>
        <input type="text" value={text} onChange={handleChangeInput}/>
        <button onClick={handleAddElement}>+</button>
        <button onClick={deleteElement}>-</button>
        {
          list.map( (element, i) => {
            return <div key={i}>{ element }</div>;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    list: store.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addElement: (payload) => dispatch( addElement(payload) ),
    deleteElement: () => dispatch( deleteElement() ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
