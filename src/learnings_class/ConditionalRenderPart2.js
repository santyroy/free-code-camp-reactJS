import React from "react";

class ConditonalRenderPart2 extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        "Call your Mom",
        "New Spam mail available. All links are definitely safe to click",
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages</h2>
        )}
      </div>
    );
  }
}

export default ConditonalRenderPart2;
