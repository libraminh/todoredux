import React, { Component } from "react";
import { withRouter } from "react-router";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
            $(".navbar-collapse")
                .removeClass("in")
                .attr("aria-expanded", "false");
        }
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default withRouter(ScrollToTop);
