import React from 'react';
import {Image} from 'semantic-ui-react';

export default function (props) {
	const styles = {
		hero:{
			backgroundColor: props.bgcolor,
			boxShadow: "inset 0px 10px 30px 40px white"

		}
	}

	return (
		<div style={styles.hero}>
			<Image src={require("../assets/K.Maxwell.png")} fluid/>
		</div>
	)

}
