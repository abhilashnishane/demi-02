import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {

    let { task } = this.props;
    return (
      <div className="task-container">
        <div className="icon-cont">&bull;</div>
        <div>
          <div>{task.task_name}</div>
          <div className="time">{task.subtext}</div>
        </div>
      </div>
    )
  }
}
