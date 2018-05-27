import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel, Panel, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux';

import { fetchSchedule, createSchedule } from '../actions';
import DayCard from '../components/DayCard';
import { isNumber } from "util";

const DAYS = ['sun','mon','tue','wed', 'thu', 'fri', 'sat'];

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dailyCalorieGoal: 0
    };
  }

  componentDidMount() {
    const { fetchSchedule, user, token, schedule } = this.props;
    if(user !== undefined && user.active && schedule === undefined) {
      this.setState({ loading: true });
      fetchSchedule({ userId: user._id, token },
        () => this.setState({ loading: false })
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('reveive props: ', nextProps);
    const { fetchSchedule, user, token, schedule } = nextProps;
    if(user.active && schedule === undefined) {
      this.setState({ loading: true });
      fetchSchedule({ userId: user._id , token },
        () => this.setState({ loading: false })
      );
    }
  }

  renderSchedule = () => {
    const { schedule } = this.props;
    const { loading } = this.state;
    if(loading) {
      return (
        <div>
          ...loading
        </div>
      );
    } else {
      if(schedule !== undefined) {
        return (
            <Panel className="schedule__container">
              <Panel.Heading className="schedule-heading__container">
                My Meal Plan
              </Panel.Heading>
              <Panel.Body className="schedule-body__container">
                {DAYS.map((day, index) => {
                  return (
                    <DayCard day={day} meals={schedule[day]} key={index} />
                  );
                })}
              </Panel.Body>
          </Panel>
        );
     } else {
       return (
         <div>
           No Schedule :(
         </div>
       );
     }
    }
  }

  validateForm() {
    return this.state.dailyCalorieGoal > 1000;
  }

  onSubmit = e => {
    e.preventDefault();
    const { token, user, createSchedule } = this.props;
    const { dailyCalorieGoal } = this.state;
    this.setState({ loading: true });
    createSchedule({ userId: user._id, token, dailyCalorieGoal }, () => 
      this.setState({ loading: false })
    );
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  renderForm = () => {
    const { loading } = this.state;
    if(loading) {
      return (
        <div>
          ...loading
        </div>
      );
    } else {
      return (
        <Panel className="preference__container">
          <Panel.Heading className="preference-heading__container">
            My Preferences
          </Panel.Heading>
          <Panel.Body className="preference-body__container">
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="dailyCalorieGoal" bsSize="large">
                  <ControlLabel>What's you daily calorie goal?</ControlLabel>
                  <FormControl
                    value={this.state.dailyCalorieGoal}
                    onChange={this.handleChange}
                    type="number"
                  />
                </FormGroup>
                <Button
                  block
                  bsSize="large"
                  type="submit"
                  disabled={!this.validateForm()}
                >
                  Submit
                </Button>
              </form>
          </Panel.Body>
        </Panel>
      );
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="dashboard__container">
        <Panel className="profile__container">
          <Panel.Body className="profile-body__container">Panel content</Panel.Body>
        </Panel>
        {user !== undefined && user.active ? this.renderSchedule() : this.renderForm() }
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


export default connect(mapStateToProps, { fetchSchedule, createSchedule })(DashboardPage);