import React from 'react'

import {Grid} from 'semantic-ui-react'

const Footer = (props) => {

	const styl = {
		container: {
				background: "slategray"
				,height: "30vh"
		}
	 }

	return (
		<div style={styl.container}>
			<Grid verticalAlign="middle" centered>
				<Grid.Column verticalAlign="middle">
					<span>function</span>
				</Grid.Column >
				<Grid.Column >
					<span>function</span>
				</Grid.Column >
				<Grid.Column >
					<span>function</span>
				</Grid.Column >
			</Grid>
		</div>
	)
}

export default Footer
