import React from 'react'

import {Grid, Form } from 'semantic-ui-react';
import styled from "styled-components";
import { space, width as wdth, fontSize, color } from "styled-system";

const Container = styled(Grid)`
				${color}
				${fontSize}
				${space}
				${wdth}
				background: #d7d7d7;
				border-bottom: 3px solid #EEE;
				box-shadow: 3px 0px 30px 2px grey;
`

const FormContainer = styled(Form)`
				${space}
`

const Input = styled(Form.Input)`
				${space}
				${fontSize}
`

const TextArea = styled(Form.TextArea)`
				${fontSize}
`


class ContactForm extends React.Component {
	render() {


		return (
			<Container m={900} centered>
				<Grid.Column width={12} textAlign="center">
					<FormContainer  p={4}>
						<Form.Group widths="equal">
							<Input fontSize={2}  label="First Name" placeholder="First Name" />
							<Input fontSize={2} label="Last Name" placeholder="Last Name" />
						</Form.Group>
						<Form.Group widths="equal">
							<Input fontSize={2} label="Contact Number" placeholder="(631)-555-5555" />
							<Input fontSize={2} label="Email" placeholder="Email" />
						</Form.Group>
						<TextArea
							fontSize={2}
							label="Purpose Of Your Inquiry"
							placeholder="Message"
						/>
						<Form.Button size="huge">Send Message</Form.Button>
					</FormContainer>
				</Grid.Column>
			</Container>
		)
	}
}

export default ContactForm
