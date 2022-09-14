const ProgressBar = (props) => {
  const completed = props.completed;

  const containerStyles = {
    height: 30,
    width: '90%',
    backgroundColor: "#e0e0de",
    borderRadius: 30,
    margin: 50

  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#10842A",
    borderRadius: 'inherit',
    textAlign: 'right'

  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22

  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;