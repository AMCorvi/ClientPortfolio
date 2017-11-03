import React from "react";

import { Card
				,Grid
				,Header
				,Button
			} from "semantic-ui-react";

export default function () {

	const styl = {
		hr: {
			margin: "0px 30px"
		}
		,content: {
			padding: "5em 0px"
			,border: " 3px solid #EEE"
			,borderTop: 0
			,borderRight: 0
			,borderLeft: 0
		}
		,label: {
			marginBottom: "1em"
		}
		,button: {
			marginTop: "3em"
		}
  }

  return (
		<div style={Object.assign({},styl.hr,styl.content)}>

			<Grid style={styl.label}>
				<Grid.Column width={4} floated="left">
					<Header content="My Work" as="h3"/>
				</Grid.Column>
				<Grid.Column width={4} floated="right" textAlign="right">
					<span>More than just something to see</span>
				</Grid.Column>
			</Grid >

			<Card.Group itemsPerRow={3} doubling stackable centered>
				<Card color="blue" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="blue" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="blue" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="blue" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="blue" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="blue" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
			</Card.Group>

		<Grid textAlign="center">
			<Grid.Column>
				<Button size="huge" color="google plus" style={styl.button}>
					Full Portfolio
				</Button>
			</Grid.Column>
		</Grid>

		</div>
  )
}
