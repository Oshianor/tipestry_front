class ProgressBarExample extends React.Component {
  render() {
		const { percent } = this.props;
    return <ProgressBar percentage={percent} />;
  }  
}

export default ProgressBarExample;

const ProgressBar = (props) => {
	const bar = {
		position: "relative",
		height: 20,
		// width: "100%",
		// minWidth: 200,
		// maxWidth: 300,
		borderRadius: 5,
		// border: "1px solid #333"
		boxShadow: "2px 4px 10px -6px"
	}
  return (
		<div style={bar} >
			<Filler percentage={props.percentage} />
		</div>
	)
}

const Filler = (props) => {
	const err = {
		// background: "#1DA598",
		background: props.percentage === 100 ? "rgb(25, 162, 23)" : "#1F7BD8",
		height: "100%",
		borderRadius: "inherit",
		transition: "width .2s ease-in",
		textAlign: 'center',
		fontSize: 'smaller',
		padding: '2px 0px',
    fontWeight: 800,
		color: props.percentage > 5 ? 'whitesmoke' : '#1F7BD8',
		width: `${props.percentage}%`
	}
  return <div style={err} > {props.percentage}% </div>
}