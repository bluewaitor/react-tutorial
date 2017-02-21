import React, { Component } from 'react';

const suffix = '被调用, this指向: ';

export default class App extends Component {

    constructor(props) {
        super(props);
        // this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        console.log(`componentDidMount${suffix}`, this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps${suffix}`, this);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdate${suffix}`, this);
        return true;
    }
    
    componentWillUnmount() {
        console.log(`componentWillUnmount${suffix}`, this);
    }

    handler() {
        console.log(`handler${suffix}`, this);
    }
    

    render() {
        console.log(`render${suffix}`, this);

        this.handler();
        window.handler = this.handler;
        window.handler();

        return (
            <div>
                <h1 onClick={this.handler}>Hello world</h1>
                <p>不清楚组件、ReactElement、组件实例以及组件中的this是什么？ 打开控制台看看就明白了！</p>
            </div>
        );
    }
}