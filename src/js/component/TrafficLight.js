import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

export class TrafficLight extends React.Component {
	state = {
		active: false,
		active2: false,
		active3: false
	};

	render() {
		return (
			<div className="main">
				<div className="trafficBody rounded">
					<div className="red">
						<div
							className={this.state.active ? "glow" : "red"}
							onClick={() =>
								this.setState({ active: !this.state.active })
							}
						/>
					</div>
					<div className="orange">
						<div
							className={this.state.active2 ? "glow" : "orange"}
							onClick={() =>
								this.setState({ active2: !this.state.active2 })
							}
						/>
					</div>
					<div className="green">
						<div
							className={this.state.active3 ? "glow" : "green"}
							onClick={() =>
								this.setState({ active3: !this.state.active3 })
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}
