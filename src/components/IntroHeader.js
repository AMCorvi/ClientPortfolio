import React, {Component} from "react";

import {Grid, Header, Icon} from "semantic-ui-react";

export default class extends Component {
cool

	render () {
		const styl = {
			container: {
					position:"relative",
					top:80
			}
  }
        return (
					<div style={styl.container}>
						<Grid padded="horizontally">
							<Grid.Row  centered>
								<Grid.Column  width={8}>
									<Header as="h2" textAlign="center" icon>
										<Icon size="massive" name="photo"/>
										Multimedia Artist
										<Header.Subheader>
										Elit similique consectetur nihil iure libero harum. Perferendis aperiam velit maxime fugit quas Ipsa quis facere consequatur et id! Quam
										</Header.Subheader>
									</Header>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</div>
        )
 }
}




