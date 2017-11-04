import React from "react";

import {Grid, Header, Icon} from "semantic-ui-react";
import scale from "../utils/scale.js";

export default function() {
	const styl = {
		container: {
			margin: "80px 0px"
		}
	};

	return (
		<Grid padded="horizontally" style={styl.container}>
			<Grid.Row centered>
				<Grid.Column width={8}>
					<Header
						textAlign="center"
						style={{
							fontSize: scale[6]
							,color: "slategrey"
						}}
						icon
					>
						<Icon size="massive" color="red" name="photo" circular inverted />
						Multimedia Artist
						<Header.Subheader
							style={{
								fontSize: scale[4]*1.5
								,paddingTop: 8*2
							}}
						>
							Elit similique consectetur nihil iure libero harum.
							Perferendis aperiam velit maxime fugit quas Ipsa
							quis facere consequatur et id! Quam
						</Header.Subheader>
					</Header>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
