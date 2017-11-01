import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';

export default class extends Component {
	render () {

			const styles = {
				hero:{
					background: "black"

				}
			}

			return (
				<div style={styles.hero}>
					<Image src={require("../assets/K.Maxwell.png")} fluid/>
				</div>
   )
 }
}
