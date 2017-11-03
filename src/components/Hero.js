import React from 'react';
import {Image} from 'semantic-ui-react';

export default function (props) {
	const styles = {
		hero:{
			backgroundColor: props.bgcolor

		}
	}

	return (
		<div style={styles.hero}>
			<Image src={require("../assets/K.Maxwell.png")} fluid/>
		</div>
	)

}
