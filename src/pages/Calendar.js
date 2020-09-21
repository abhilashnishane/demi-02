import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InnerNavbar from '../components/InnerNavbar';
import BottomNavbar from '../components/BottomNavbar';
import TaskCard from '../components/TaskCard';

// const taskList = [
//   {
//     "icon": "&bull;",
//     "task_name": "Meditate",
//     "subtext": "6:00 AM"
//   },
//   {
//     "icon": "&bull;",
//     "task_name": "Meditate 2",
//     "subtext": "6:00 AM"
//   }
// ];

export default class Calendar extends Component {
  state = {
    taskList: [
      {
        "icon": "&bull;",
        "task_name": "Meditate",
        "subtext": "6:50 AM"
      },
      {
        "icon": "&bull;",
        "task_name": "40 Pushups",
        "subtext": "8:00 AM"
      },
      {
        "icon": "&bull;",
        "task_name": "Push code to staging",
        "subtext": "3:00 - 4:00 PM  1hour"
      },
      {
        "icon": "&bull;",
        "task_name": "Finish Op-Ed",
        "subtext": "30%"
      },
      {
        "icon": "&bull;",
        "task_name": "Zoom meeting",
        "subtext": "7:00 - 8:00 PM  1hour"
      },
      {
        "icon": "&bull;",
        "task_name": "Bedtime",
        "subtext": "10:00 PM"
      },
      {
        "icon": "&bull;",
        "task_name": "Finish Op-Ed",
        "subtext": "30%"
      },
      {
        "icon": "&bull;",
        "task_name": "Zoom meeting",
        "subtext": "7:00 - 8:00 PM  1hour"
      },
      {
        "icon": "&bull;",
        "task_name": "Bedtime",
        "subtext": "10:00 PM"
      },
      {
        "icon": "&bull;",
        "task_name": "Finish Op-Ed",
        "subtext": "30%"
      },
      {
        "icon": "&bull;",
        "task_name": "Zoom meeting",
        "subtext": "7:00 - 8:00 PM  1hour"
      },
      {
        "icon": "&bull;",
        "task_name": "Bedtime",
        "subtext": "10:00 PM"
      }
    ]
  }
  render() {
    return (
      <div>
        <div className="dates-cont">
          <InnerNavbar />
          <Container fluid>
            <Row>
              <Col>
                <div className="dates-cont-2">
                  <div className="day-cont">
                    <div className="day">Mon</div>
                    <div>11</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Tue</div>
                    <div>12</div>
                  </div>
                  <div className="day-cont selected">
                    <div className="day">Wed</div>
                    <div>13</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Thu</div>
                    <div>14</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Fri</div>
                    <div>15</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Sat</div>
                    <div>16</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Sun</div>
                    <div>17</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Mon</div>
                    <div>18</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Tue</div>
                    <div>19</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Wed</div>
                    <div>20</div>
                  </div>
                  <div className="day-cont">
                    <div className="day">Thu</div>
                    <div>21</div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="add-task-top-col">
                <div className="add-task-top">
                  <div className="add-plus">+</div>
                  <div className="add-text">Add quick task</div>
                </div>
              </Col>
            </Row>
          </Container> 
        </div> 

        <Container fluid>  
          <Row>
            <Col>
              {
                this.state.taskList.map((task, i) => {
                  return (
                    <TaskCard task={task} />
                  )
                })
              }             
            </Col>
          </Row>
        </Container>
        <BottomNavbar />
        <div className="plus-sign-c"></div>
      </div>
    )
  }
}
