import React, { Component } from 'react';

type MusicPageState = {
  title: string,
}
class MusicPage extends Component<{}, MusicPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Music',
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

export default MusicPage;
