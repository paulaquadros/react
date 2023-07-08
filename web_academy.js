"use strict";

const e = React.createElement;

class WebAcademy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "Hello World";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

const domContainer = document.querySelector("#web_academy_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(WebAcademy));
