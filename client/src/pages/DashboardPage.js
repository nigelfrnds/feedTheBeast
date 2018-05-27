import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { fetchSchedule } from '../actions';
import DayCard from '../components/DayCard';

const DAYS = ['sun','mon','tue','wed', 'thu', 'fri', 'sat'];

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    const { fetchSchedule, user, token } = this.props;
    if(user) {
      await fetchSchedule({ userId: user._id , token });
    }
  }

  renderSchedule = () => {
    const { schedule } = this.props;
    if(schedule !== undefined) {
      return DAYS.map((day, index) => {
        return (
          <DayCard day={day} meals={schedule[day]} key={index} />
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