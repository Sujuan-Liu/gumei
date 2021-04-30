import React, { Component } from 'react';

type AboutPageState = {
  title: string,
}
class AboutPage extends Component<{}, AboutPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'About Me',
    };
  }

  render() {
    const {
      title,
    } = this.state;
    return (
      <div>
        {title}
      </div>
    );
  }
}

export default AboutPage;
