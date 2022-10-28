import PropTypes from "prop-types";
import React, { Component } from "react";

const scrollStyle = (
  width,
  height = "3",
  bgColor = "#c68afc",
  duration = "0.25"
) => ({
  margin: 0,
  padding: 0,
  position: "fixed",
  top: 70,
  zIndex: "1001 ",
  backgroundColor: `${bgColor}`,
  height: `${height}px`,
  width: `${width}`,
  transitionProperty: "width",
  transitionDuration: `${duration}s`,
  transitionTimingFunction: `ease-out`,
});

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
    };
    this.Scrolling = this.Scrolling.bind(this);
  }

  Scrolling() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (height > 0) {
      this.setState({ width: `${scrolled}%` });
    } else {
      this.setState({ width: null });
    }
  }

  componentDidMount() {
    try {
      window.addEventListener("scroll", this.Scrolling);
    } catch (oError) {
      console.log(oError);
    }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener("scroll", this.Scrolling);
    } catch (oError) {
      console.log(oError);
    }
  }

  render() {
    const { width } = this.state;
    const { height, bgColor, duration } = this.props;
    return <div style={scrollStyle(width, height, bgColor, duration)} />;
  }
}

ProgressBar.propTypes = {
  height: PropTypes.number,
  duration: PropTypes.number,
};

export default ProgressBar;
