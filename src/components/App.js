import React, { Component } from 'react';

class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0,
    };
  }

  // Move to the next slide
  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex: Math.min(prevState.currentSlideIndex + 1, this.props.slides.length - 1),
    }));
  };

  // Move to the previous slide
  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlideIndex: Math.max(prevState.currentSlideIndex - 1, 0),
    }));
  };

  // Restart from the first slide
  restartSlide = () => {
    this.setState({ currentSlideIndex: 0 });
  };

  render() {
    const { slides } = this.props;
    const { currentSlideIndex } = this.state;
    const currentSlide = slides[currentSlideIndex];

    return (
      <div>
        <h1 id="title">{currentSlide.title}</h1>
        <p id="text">{currentSlide.text}</p>
        <button id="button-prev" onClick={this.prevSlide} disabled={currentSlideIndex === 0}>
          Prev
        </button>
        <button id="button-next" onClick={this.nextSlide} disabled={currentSlideIndex === slides.length - 1}>
          Next
        </button>
        <button id="button-restart" onClick={this.restartSlide} disabled={currentSlideIndex === 0}>
          Restart
        </button>
      </div>
    );
  }
}

export default SlideShow;
