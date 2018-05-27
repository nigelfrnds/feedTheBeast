import React from 'react';

const SideBar = (props) => {
    return (
        <div style={styles.containerStyle}>
            <div>
                <div style={styles.imageStyle}>
                    NF
                </div>
            </div>
            <div style={styles.infoContainer}>
                <h3>Name</h3>
                <h4>@username</h4> 
            </div>
        </div>
    );
};

const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',  
      width: '25%',
      backgroundColor: '#eee',
      borderRight: "solid 3px black"
    },
    imageStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        height: '15rem',
        width: '15rem',
        borderRadius: '100%',
        border: 'solid 3px black'
    },
    infoContainer: {
        marginTop: '1rem',
    }
  };

export default SideBar;