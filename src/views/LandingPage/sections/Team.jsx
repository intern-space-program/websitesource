import React from "react";
// nodejs library that concatenates classes
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx";


// Summer Team
import Waylon from "assets/img/faces/Waylon.jpg";
import Adrian from "assets/img/faces/Adrian.jpg";
import Carson from "assets/img/faces/Carson.jpg";
import Dani from "assets/img/faces/Dani.jpg";
import Denny from "assets/img/faces/Denny.jpg";
import Grant from "assets/img/faces/Grant.jpg";
import Jack from "assets/img/faces/Jack.jpg";
import Jacob from "assets/img/faces/Jacob.jpg";
import Khaled from "assets/img/faces/Khaled.jpg";
import Matt from "assets/img/faces/Matt.jpg";
import Precious from "assets/img/faces/Precious.jpg";
import Ronnie from "assets/img/faces/Ronnie.jpg";
import Sadie from "assets/img/faces/Sadie.jpg";
import Alina from "assets/img/faces/Alina.jpg";
import RonnieH from "assets/img/faces/RonnieH.jpg";
import Mike from "assets/img/faces/Mike.jpg";
import Robb from "assets/img/faces/Robb.jpg";
import Carlos from "assets/img/faces/Carlos.jpg";
import Jessica from "assets/img/faces/Jessica.jpg";
import JohnMark from "assets/img/faces/JohnMark.png";
import Caitlin from "assets/img/faces/Caitlin.jpg";
import Zac from "assets/img/faces/Zac.jpg";
import Ryan from "assets/img/faces/Ryan.jpg";
import Tyler from "assets/img/faces/Tyler.jpg";
import Alexander from "assets/img/faces/Alexander.jpg";

function Headers({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  const dark = {
    color: "#3C4858",
    marginTop: ".625rem",
    minHeight: "auto",
    fontWeight: 700,
    fontFamily: "Roboto Slab, Times New Roman",
    marginBottom: "0.75rem",
    textDecoration: "none",
    fontSize: "1.125rem",
    lineHeight: "1.5em"
}

  const color = {
    color: "#6c757d"
  }

  const bio = {
    color: "#999",
    fontSize: "14px",
    margin: "0 0 10px"
  }

  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <Carousel {...settings}>
     {/* Carousel 1 START */}
     <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div>
      <div id="Team" className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
              <h2 className={classes.title} style={{color: "#3C4858"}}>Team Summer 2019</h2>
              <h5 className={classes.description}>
              We are a team of creative problem solvers. Our team brings a wealth of experience from some of the world’s most formidable organizations, agencies and startups.
              </h5>
            </GridItem>
          </GridContainer>
          {/* ROW 1 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/waylon-lee-851798153/" onClick={e => e.preventDefault()}>
                    <img  src={Waylon} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Waylon Lee</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Senior Aerospace engineer major at Texas A&M with minors in Astrophysics and Math. Outside of work, Waylon enjoys participating in collegiate acapella and playing instruments
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/ronaldankner/" onClick={e => e.preventDefault()}>
                    <img src={Ronnie} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Ronnie Ankner</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics Team Lead & Payload</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Masters student at Stevens Institute of Technology in Electrical Engineering, current Pathways intern at Johnson Space Center, and aspiring Astronaut. Experience runs the gambit of SLAM, embedded systems, robotics, image processing, and RF engineering.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/carson-hula" onClick={e => e.preventDefault()}>
                    <img src={Carson} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Carson Hula</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Business & Procurement Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Carson is a junior Aeronautical Engineering student at Rensselaer Polytechnic Institute, in his first USRA internship working in XM on Artemis mission analysis & integrated assessments. Leveraging Rensselaer Rocket Society experience, he’s excited for ISP’s funds and efforts to soar. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
        
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/dani-meyer/" onClick={e => e.preventDefault()}>
                    <img src={Dani} alt="..." className={classes.img}/>
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Dani Dorn-Meyer</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Auxiliary Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Dani is graduating this December with a Bachelor's of Computer Science and Software Engineering from North American University. This is her second semester interning in the ISS Safety & Reliability Engineering Branch.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 2 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Denny} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Denny Reed</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics - Ground Station</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                 
                  </p>
                </CardBody>                
              </Card>
            </GridItem>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/grant-hevia-2b344314b/" onClick={e => e.preventDefault()}>
                    <img src={Grant} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Grant Hevia</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe & Propulsion</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Grant is a senior at the University of Wisconsin - Madison studying Aerospace Engineering. He works in the Safety & Mission Assurance directorate and moderates the local intern social committee meetings. Pretty cool, huh? Yeah, we think so too.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/jack-steilberg-554957135/" onClick={e => e.preventDefault()}>
                    <img src={Jack} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Jack Steilberg</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Recovery Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Jack is a fourth year studying Computer Science and Mathematics at Northeastern University. He loves linguistics, natural language processing, and Artificial Intelligence, and hopes to be a major contributor to the eventual Skynet.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/jacob-nunez-kearny-281b23121/" onClick={e => e.preventDefault()}>
                    <img src={Jacob} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Jacob Nunez-Kearny</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsions Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Pathways Co-op in Propulsion and Power Division of Engineering at JSC. Aerospace engineering student at Purdue University. Currently responsible for propulsion, airframe, and payload integration of ISP's rocket.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 3 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/khaledallen/" onClick={e => e.preventDefault()}>
                    <img src={Khaled} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Khaled Allen</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight Operations Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Khaled is returning to school as a mathematics undergrad at CU Boulder, changing careers after working 9 years as a freelance tutor and developer. He has always been fascinated with flying machines and learned about orbital dynamics by playing too much Kerbal Space Program, which has enabled him to convince several people at NASA that he knows what he's talking about. He lives in Boulder, CO with his wife Anna and cat Jaeger.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Matt} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Matt Busch</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics - Ground Station</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Matt is a senior at Georgia Tech where he is studying Computer Science. He was a member of the Yellow Jacket Space Program at Georgia Tech and enjoys building drones.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

              <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/precious-fadimiroye-93b0b79a/" onClick={e => e.preventDefault()}>
                    <img src={Precious} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Precious Fadimiroye</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Safety & Mission Assurance Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Precious is a junior at the University of Houston-Clear Lake studying computer science. She received her AS in Computer Science from Houston Community College. She enjoys singing, going to church, and athletic activities.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/abjuarez/" onClick={e => e.preventDefault()}>
                    <img src={Adrian} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Adrian Juarez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Payload Integration Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Adrian has a B.S. in Aerospace Engineering and is currently pursuing a Master's Degree in Guidance, Navigation, and Control at San Diego State University. Outside of space and engineering, Adrian enjoys surfing, scuba diving, hiking, reading, running, working out, and trying fun things like sky diving.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

          </GridContainer>
          {/* ROW 4 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/tyler-fedrizzi-46170685/" onClick={e => e.preventDefault()}>
                    <img src={Tyler} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Tyler Fedrizzi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Assistant to the Solder-er Supreme - Its a bunch of sensors</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  I am a 3 year old dog, adopted in Fayetteville, North Carolina and I really, really like to chase bunnies.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/alexander-h-91418b9a/" onClick={e => e.preventDefault()}>
                    <img src={Alexander} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Alexander Hillstrom</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Mechanical Engineering Student at the University of Texas at El Paso. 
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                </CardFooter>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/alina-rai/" onClick={e => e.preventDefault()}>
                    <img src={Alina} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Alina Rai</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Alina is currently a senior at the University of California, Berkeley where she is pursuing her bachelor's degree in Mechanical Engineering. She decided to join the Inter Space Program in hopes of fulfilling her curiosity about how rocket systems work and. Outside of school and work, Alina enjoys sleeping as well as soaking in the outdoors, whether its hiking, camping, or backpacking. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/jessica-krenzel-8325b0105/" onClick={e => e.preventDefault()}>
                    <img src={Jessica} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Jessica Krenzel</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Media Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Recent grad from The State University of New York at New Paltz she majored in Digital Media Production and Communications with a concentration in public relations. She is currently interning as a media/communications intern under SMA
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          {/* ROW 5 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Caitlin} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Caitlin Becker</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics - Raspi Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Zac} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Zac Carico</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}></h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Zac grew up in Friendswood Texas and went to Brigham Young University- Idaho for a B.A. in Computer Engineering. He is so much into engineering and space, that he spent too much time working on projects and is throwing this bio together at last minute. He enjoys exploring and hiking when he isn't busy trying to solve world hunger, or designing a machine to deliver snacks to you at a moments notice. Zac also likes Pina Coladas and getting caught in the rain (Rupert Holmes, 1979).
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Carlos} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Carlos Amaya</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics - Ground Station</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Carlos is a senior at the University of Houston pursuing a degree in Computer Science with a minor in Mathematics. He is working as an intern for the Space Radiation Analysis Group, and is helping build a web application to monitor the effects of radiation on astronauts beyond low-Earth orbit.
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/john-mark-readle-31946278/" onClick={e => e.preventDefault()}>
                    <img src={JohnMark} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>John-Mark Readle</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics - Teensy Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  My name is John Mark Readle and I am the Avionics Teensy Team Lead, and electrical engineering at University if Colorado at Denver
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          {/* ROW 6 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/ryan-krull/" onClick={e => e.preventDefault()}>
                    <img src={Ryan} alt="..." className={classes.img}/>
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Ryan Krull</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion, Airframe & Vehicle Assembly</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Ryan Krull is studying aerospace engineering at the Illinois Institute of Technology. He works in the Exploration Mission Planning Office with the Mars Integration Group at JSC. He conducts mission-concept analysis along with design of crewed surface/space systems and vehicles for Mars. He also works on the Artemis to integrate the Lunar and Mars systems. Ryan has also interned at Langley where he fabricated a prototype design of an electric aircraft motor. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/ronnie-hutchison/" onClick={e => e.preventDefault()}>
                    <img src={RonnieH} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Ronnie Hutchison</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Ronnie is a junior at The University of Alabama, majoring in Aerospace Engineering and Mechanics. He is a Navy veteran with 10 years of experience in nuclear power plant operations and electrical systems. 
                  </p>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/robb-rodenberg-61864b1a/" onClick={e => e.preventDefault()}>
                    <img src={Robb} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Robb Rodenberg</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion & Airframe</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Robert is a senior at the University of Houston, majoring in mechanical engineering.  Robert enjoys skiing, travel, and working on challenging projects.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          {/* ROW 7 */}
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/mike-bernard-a151a3104/" onClick={e => e.preventDefault()}>
                    <img src={Mike} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Mike Bernard</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics - Navigation Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Mechanical Engineering Undergraduate at UConn, Pathways Co-op in Orion Backup Flight Software Navigation Team.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={Sadie} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Sadie McCarthy</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Propulsion Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Sadie is a senior studying Mechanical Engineering at NC State University where she is also a member of her school's High-Powered Rocketry Club. At JSC this fall, Sadie works with the Propulsion Systems group of the Flight Operations Directorate.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
    {/* Carousel 1 END */}
    {/* Carousel 2 START */}
    </div>
    {/* Team 1 END */}
 </Carousel>
  );
}

export default withStyles(headersStyle)(Headers);
