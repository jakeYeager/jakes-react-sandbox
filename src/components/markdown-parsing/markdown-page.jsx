import { Component } from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "./content.md";

export default class MarkdownPage extends Component {
  constructor(props) {
    super(props)
    this.state = { markdown: "" }
  }

  componentDidMount() {
    fetch(Markdown)
      .then((resp) => resp.text())
      .then((text) => this.setState({ markdown: text }))
  }
  render(){
    // console.log(process.env.NODE_ENV);
    return (
      <div className="row">
        <div className="col-sm-12">
          <ReactMarkdown children={this.state.markdown} linkTarget={"_blank"} />
        </div>
      </div>
    )
  }
}