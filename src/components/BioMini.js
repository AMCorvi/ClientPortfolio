import React from "react";

import { Grid,Header } from "semantic-ui-react";
import scale from "../utils/scale.js";

export default function () {
	const styl = {
		hr: {
			margin: "0px 30px"
		}
		,content: {
			padding: "5em 0px"
			,border: " 3px solid #EEE"
			,borderRight: 0
			,borderLeft: 0
		}
  }
  return (
		<div style={styl.hr}>
				<Grid style={styl.content} centered padded='horizontally'>
					<Grid.Column textAlign="center" width={8}>
								<Header
									as="h3"
									style = {{
										fontSize: scale[5]
									}}
								>
								Adipisicing eius fugit necessitatibus doloremque vel?
								</Header >
									<div>
										Adipisicing vero lorem maxime autem tempora minus hic repudiandae? Excepturi aspernatur aperiam quos quaerat deserunt ipsam voluptatem Consequatur maxime ipsa autem facilis nam nam labore possimus. Beatae quia soluta eaque?
									</div>
					</Grid.Column >
				</Grid>
		</div>
  )
}
