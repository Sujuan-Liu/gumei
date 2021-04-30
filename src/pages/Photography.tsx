import React, { Component } from 'react';

type PhotographyPageState = {
  title: string,
}
class PhotographyPage extends Component<{}, PhotographyPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Photography',
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

export default PhotographyPage;
