import React, {Component} from 'react'

import BioMini from "../components/BioMini.js"
import MenuBar from "../components/MenuBar.js";
import Hero from "../components/Hero.js";
import PortfolioPreview from "../components/PortfolioPreview.js";
import IntroHeader from "../components/IntroHeader.js";
import ContactForm from "../components/ContactForm.js";
import Footer from "../components/Footer.js"


export default class extends Component {

    render () {
              return (
           <div>

								<MenuBar/>
								<Hero />
								<IntroHeader/>
								<BioMini/>
								<PortfolioPreview/>
								<ContactForm/>
								<Footer/>

           </div>
       )
    }
}
