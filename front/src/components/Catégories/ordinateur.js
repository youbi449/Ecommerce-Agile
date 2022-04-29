import React from 'react';
import Img1 from '../Images/asusrob.webp';
import './ordinateur.css';
import {Tab, Tabs} from 'react-bootstrap'


import TabContainer from 'react-bootstrap/TabContainer'

export default class Ordinateur extends React.Component {

    render() {
        return (

            <div>
              <div className="cardordi">
            <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={Img1} class="card-img1" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">ASUS ROG</h5>
        <p class="card-text">Le PC de bureau GS10CS-FR285T est une arme fatale. Il offre à l'utilisateur des performances fulgurantes pour un jeu toujours plus élaboré. PC gaming d'un tout nouveau genre au design original et futuriste, il vous fera vivre une expérience de jeu hors du commun !</p>
        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Présentation"> <br></br>
  Le processeur Intel® Core i7, doté d'une technologie toujours plus performante, offre une rapidité d'exécution des tâches optimale. Le PC ASUS GS10CS-FR285T vous permettra de jouer en mode multijoueur et de profiter de toutes les fonctionnalités de vos jeux sans ralentissement. Votre PC est votre meilleur allié pour relever tous les défis !
  </Tab>
  <Tab eventKey="profile" title="Caractéristique">
    <br></br>
    <ul>

      <li> i7 7700k </li>
      <li> RTX 2060 </li>
      <li> 16go de ram </li>
      <li> 1to de SSD </li>
    </ul>
  </Tab>
 
</Tabs>
      </div>
    </div>
  </div>
</div>
            </div>
            </div>
        )
    }
}