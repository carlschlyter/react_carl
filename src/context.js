import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [
            { track: { track_name: '123'}},
            { track: { track_name: 'abc'}}
        ],
        heading: 'Top ten Tracks'
    };

    componentDidMount() {
        
    }

    render() {
        return (
            <Context.Provider value={this.state}> 
              {this.props.children}  
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;