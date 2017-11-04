import React from "react";

import { Card
				,Grid
				,Button
			} from "semantic-ui-react";
import styled from "styled-components";
import { space, fontSize } from "styled-system";
import scale from "../utils/scale.js";


Grid.Column = styled(Grid.Column)`
				${fontSize}
`

const Button1 = styled(Button)`
			${space}
`

const Container = styled.div`
			${space}
			border: 3px solid #EEE;
			border-top: 0;
			border-right: 0;
			border-left: 0;
`

const LabelGrid = styled(Grid)`
			${space}
`



export default function () {

  return (
		<Container my={scale[8]} mx={30} py={4}>

			<LabelGrid mx={4}  style={{marginBottom:8}} floated>
				<Grid.Column width={4} floated="left">
					<span><h2>My Work</h2></span>
				</Grid.Column>
				<Grid.Column fontSize={2} width={4} floated="right" textAlign="right">
					<span>More than just something to see</span>
				</Grid.Column>
			</LabelGrid >

			<Card.Group itemsPerRow={3} doubling stackable centered>
				<Card color="red" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="red" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="red" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="red" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="red" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
				<Card color="red" image={"https://picsum.photos/200/300?image="+ Math.ceil(Math.random() * 300)} />
			</Card.Group>

		<Grid textAlign="center">
			<Grid.Column>
				<Button1 style={{marginTop:8*2}} size="huge" color="google plus" >
					Full Portfolio
				</Button1>
			</Grid.Column>
		</Grid>

		</Container>
  )
}
