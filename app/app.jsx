import React, { Component } from "react";
import { Forms } from "./form/form";
import { Graph } from "./graph/graph";
import { Comment } from "./comment/comment";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

   onChange(value) {
      this.setState(value)
    };
  
    render() {
        return (
            <main>
                <Forms onFormChange={this.onChange} />
                <Graph Rating={this.state.Rating} />
                <Comment Message={this.state.Comment} Name={this.state.Name} Rating={this.state.Rating} />
            </main>
        );
    }
};

export default App;
