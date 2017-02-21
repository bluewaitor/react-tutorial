import React, { Component } from 'react';
import Counter from './Counter';
import MessageList1 from './MessageList1';
import MessageList2 from './MessageList2';

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>state与props</h2>
                <Counter />
                <br/>
                
                <MessageList1 />
                <MessageList2 />
            </div>
        );
    }
}