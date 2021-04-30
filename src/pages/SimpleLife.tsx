import React, { Component } from 'react';

type SimpleLifePageState = {
  title: string,
}
class SimpleLifePage extends Component<{}, SimpleLifePageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Simple Life',
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

export default SimpleLifePage;
