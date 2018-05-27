import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class DayCard extends Component {
    render() {
        const { day, meals } = this.props;
        return (
            <Panel className="day__container">
                <Panel.Heading>
                  {`${day.substring(0,1).toUpperCase()}${day.substring(1)}`}
                </Panel.Heading>
                <Panel.Body className="day-body__container">
                    <ListGroup>
                        {
                            meals.map((meal) => {
                                return (
                                    <ListGroupItem key={meal._id}>
                                        <div className="meal-item">
                                            <div className="meal-center">
                                                <img src={meal.image} className="food-img" />
                                            </div>
                                            <div className="meal-center">
                                                {meal.label}
                                            </div>
                                            <div onClick={() => window.open(meal.url)} className="meal-item-button">
                                                <i className="fas fa-external-link-alt" />
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                );
                            })
                        }
                    </ListGroup>
                </Panel.Body>
            </Panel>
        );
    }
}

export default DayCard;