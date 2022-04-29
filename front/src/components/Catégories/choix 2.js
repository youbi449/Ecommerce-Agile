import React from 'react';
import './choix.css';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import Img1 from '../Images/ordinateurmsi.png'

class App extends React.Component {

  render() {

  return (
    <div className="contain">
            <center><h1 className="cateh1">Catégories </h1></center>
   	
     <section class="wrapper">
    <div class="container-fostrap">
        <div>
            
            
        </div>
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="/Informatique">
                            <img src="data:image/webp;base64,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" className="Img1"/>
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="#"> <center>Objets connectés</center>
                                  </a>
                                </h4>
                                <p class="">
                                <center>Les smartphones et internet permettent d'apporter de l'intelligence et de l'interactivité aux objets les plus courants. </center>


                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="#" class="btn btn-link btn-block">
                                    Voir la catégorie 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src={Img1} />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html"> <center>Ordinateur Fixe/Portable</center>
                                  </a>
                                </h4>
                                <p class="">
                                    <center>Vous souhaitez acheter un ordinateur mais vous ne savez pas lequel choisir ? Demandez-vous d'abord si vous pensez l'utiliser chez vous ou si vous avez besoin d'un ordinateur portable pour l'avoir à portée de main où que vous soyez. </center>
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="https://codepen.io/wisnust10/full/ZWERZK/" class="btn btn-link btn-block">
                                Voir la catégorie 
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-4">
                        <div class="card">
                            <a class="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYNxoThUtgyIjQNZmOQm4C79O4qkYDjx-T8dxWbr-OEX_ejkE0w&s" />
                          </a>
                            <div class="card-content">
                                <h4 class="card-title">
                                    <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"><center> Télévision/Ecran </center>
                                  </a>
                                </h4>
                                <p class="">
                                    <center>onnecté à une box internet, un téléviseur smart-tv permet d'accéder à des contenus différents des chaînes de télévision habituelles: Netflix, Deezer, Youtube, OCS....</center>
                                </p>
                            </div>
                            <div class="card-read-more">
                                <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" class="btn btn-link btn-block">
                                Voir la catégorie 
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

	
  
                </div>
                
              
  );
  
}


}

export default App;