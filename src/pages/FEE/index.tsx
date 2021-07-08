import React, { Component } from 'react';

type FEEPageState = {
  title: string,
}
class FEEPage extends Component<{}, FEEPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Front-End Engineer',
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

export default FEEPage;
