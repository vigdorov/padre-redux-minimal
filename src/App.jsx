import React, { Component } from 'react';
import { connect } from "react-redux";
import {addElement, deleteElement, editElement} from "./store/action_creators";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
        text: '',
        index: ''
    }
  }

  render () {
    const { list, addElement, deleteElement, editElement } = this.props;
    const { text, index } = this.state;

    const handleAddElement = () => {
        if (index === ''){
            addElement( text );
        } else {
            editElement(text, index);
            console.log('start');
        }

    };

    const handleChangeInput = (event) => {
      let { value } = event.currentTarget;
      this.setState({ text: value });
    };

    const handleTakeIndex = (element, i) => {
        this.setState({index: i});
        this.setState({text: element});
    };

    const handleChangeIndex = (event) => {
        let { value } = event.currentTarget;
        if (value <= list.length -1) {
            this.setState({index: value});
        }
    };

    const handleDeleteElement = () => {
      deleteElement( index );
    };

    return (
      <div>
          <input type="tel" value={index} min="0" style={{width: "40px"}} onChange={handleChangeIndex}/>
          <input type="text" value={text} onChange={handleChangeInput}/>
        <button onClick={handleAddElement}>+</button>
        <button onClick={handleDeleteElement}>-</button>
        {
          list.map( (element, i) => {
            return <div key={i} onClick={() => handleTakeIndex(element, i)}>{ element }</div>;
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
    deleteElement: (payload) => dispatch( deleteElement(payload) ),
    editElement: (payload , index) => dispatch( editElement(payload, index) ),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
