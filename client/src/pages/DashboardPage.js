import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { fetchSchedule } from '../actions';
import Sidebar from '../components/SideBar';

const DAYS = ['sun','mon','tue','wed', 'thu', 'fri', 'sat'];

class DashboardPage extends Component {
  async componentDidMount() {
    const { fetchSchedule, user, token } = this.props;
    if(user) {
      await fetchSchedule({ userId: user._id , token });
    }
  }

  renderSchedule = () => {
    const { schedule } = this.props;
    if(schedule !== undefined) {
      console.log('renderSchedule: ', schedule);
      return DAYS.map((day, index) => {
        console.log('\nmeals: ', day, schedule[day]);
        return (
          <Panel className="day__container" key={index}>
            <Panel.Heading>{`${day.substring(0,1).toUpperCase()}${day.substring(1)}`}</Panel.Heading>
            <Panel.Body className="day-body__container">
              <ListGroup>
                {
                  schedule[day].map((meal) => {
                    return (
                      <ListGroupItem key={meal._id}>
                        <div className="meal-item">
                          <img src={meal.image} className="food-img" />
                          <p>{meal.label}</p>
                        </div>
                      </ListGroupItem>
                    );
                  })
                }
              </ListGroup>
            </Panel.Body>
          </Panel>
        );
      });
    } else {
      return (
        <div>
          No Schedule :(
        </div>
      );
    }
  }

  render() {
    return (
      <div className="dashboard__container">
        <Panel className="profile__container">
          <Panel.Body className="profile-body__container">Panel content</Panel.Body>
        </Panel>
        <Panel className="schedule__container">
          <Panel.Heading className="schedule-heading__container">
            My Meal Plan
          </Panel.Heading>
          <Panel.Body className="schedule-body__container">
            {this.renderSchedule()}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, schedule }) => {
  return { 
    user: auth.user,
    token: auth.token,
    schedule: schedule.schedule
  };
};


export default connect(mapStateToProps, { fetchSchedule })(DashboardPage);