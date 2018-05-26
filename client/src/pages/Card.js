import React from 'react';

const Card = (props) => {
  return (
    <div className="card" style={styles.containerStyle}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text"  style={styles.contentStyle}>{props.children}</p>
        <Image source={{uri: props.url}} className="btn btn-primary"/>
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    height: '300px',
    width: "400px",
    marginLeft: "5px",
    marginRight: "10px",
  },
  contentStyle: {
    height: "150px",
  }
};

export default Card;