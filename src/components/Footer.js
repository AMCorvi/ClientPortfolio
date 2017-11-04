import React from "react";
import {Grid, Icon} from "semantic-ui-react";

const Footer = props =>
	<div
		style={{
			background: "slategray",
			minHeight: 200,
			borderTop: "3px groove grey"

		}}
	>
		<Grid
			style={{
				padding: "32px 0px"
			}}
			stackable
			centered
		>
				< h4>
					{" "}<Icon size="large" circular name="marker" color="grey" inverted/>Sheridan Wyoming
				</h4>

				<h4 style={{margin: "0px 0px 0px 32px"}}>
					{" "}<Icon size="large" circular name="phone" color="grey" inverted/>631-555-5555
				</h4>

				<h4 style={{margin: "0px 0px 0px 32px"}}>
					{" "}<Icon size="large" circular name="mail" color="grey" inverted/>Name@gmail.com
				</h4>

		</Grid>

		<Grid columns={4} centered>
			<Icon  size="big" circular color="grey" name="mail outline"  inverted/>
			<Icon style={{marginLeft:16}} size="big" circular color="grey" name="youtube"  inverted/>
			<Icon style={{marginLeft:16}} size="big" circular color="grey" name="photo"  inverted/>
			<Icon style={{marginLeft:16}} size="big" circular color="grey" name="twitter"  inverted/>
		</Grid>

		<Grid style={{padding: "32px 0px "}} centered>
			{" "}&copy; K. Maxwell 2017. All Rights Reserved{" "}
		</Grid>
	</div>;

export default Footer;
