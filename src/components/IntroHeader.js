import React from "react";

import {Grid, Header, Icon} from "semantic-ui-react";

export default function () {
		const styl = {
			container: {
				margin: "80px 0px"
			}
		}

        return (
						<Grid padded="horizontally" style={styl.container}>
							<Grid.Row  centered>
								<Grid.Column  width={8}>
									<Header as="h2" textAlign="center" icon>
										<Icon size="massive" name="photo"  circular inverted/>
										Multimedia Artist
										<Header.Subheader>
										Elit similique consectetur nihil iure libero harum. Perferendis aperiam velit maxime fugit quas Ipsa quis facere consequatur et id! Quam
										</Header.Subheader>
									</Header>
								</Grid.Column>
							</Grid.Row>
						</Grid>
        )
 }




