import React, {Component} from 'react'

import MenuBar from "../components/MenuBar.js";
import Hero from "../components/Hero.js";
import IntroHeader from "../components/IntroHeader.js";

export default class extends Component {

    render () {
              return (
           <div>
               <MenuBar/>
							 <Hero/>
							 <IntroHeader/>
           </div>
       )
    }
}
