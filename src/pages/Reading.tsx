import React, { Component } from 'react';

type ReadingPageState = {
  title: string,
}
class ReadingPage extends Component<{}, ReadingPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Reading',
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

export default ReadingPage;
