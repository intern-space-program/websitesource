import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

import elliot from "assets/img/summer_team/Ell.JPG";
import mateo from "assets/img/summer_team/Mat.jpeg";
import joe from "assets/img/summer_team/Joe.jpg";
import mikaela from "assets/img/summer_team/Mikaela.jpg";
import morgan from "assets/img/summer_team/Morgan.jpg";
import noah from "assets/img/summer_team/Noah.jpg";
import reed from "assets/img/summer_team/Reed.jpg";
import kath from "assets/img/summer_team/Kath.jpg";
import amanda from "assets/img/summer_team/Amanda.jpg";
import kolten from "assets/img/summer_team/kolten.jpg";
import alex from "assets/img/summer_team/alex.jpg";
import ralph from "assets/img/summer_team/Ralph.jpg";
import shaun from "assets/img/summer_team/Shaun.jpg";
import lee from "assets/img/summer_team/Lee.jpg";
import dani from "assets/img/summer_team/daniela.jpg";
import michael from "assets/img/summer_team/michael.jpeg";


function SectionTeams({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div id="Team" className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>Meet our team</h2>
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
                  <a href="www.linkedin.com/in/mateoatwi" onClick={e => e.preventDefault()}>
                    <img src={mateo} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Mateo Atwi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Team Leader</h6>
                  </Muted>
                  <p className={classes.description}>
                  Mateo is an aspiring rocket scientist. He studies Mechanical Engineering at Georgia Institute of Technology.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="www.linkedin.com/in/mateoatwi"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/joe-amar" onClick={e => e.preventDefault()}>
                    <img src={joe} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Joe Amar</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Team Co-Leader & Propulsion Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  A former USAF Staff Sgt with Craftsman skill-level in Aerospace Propulsion, 
                  Joe’s long-time love of space travel led him to engineering at NASA.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="https://www.linkedin.com/in/joe-amar"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/mikaela-peters-bb2b1281/" onClick={e => e.preventDefault()}>
                    <img src={mikaela} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Mikaela Peters</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Safety & Mission Assurance Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Mikaela study Business Analytics & Information Technology and Russian at Rutgers University in New Jersey. 
                  This semester was her first time working with a team to build a rocket.
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                <Button
                    href="https://www.facebook.com/mikaela.peters"
                    justIcon
                    simple
                    color="facebook"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/mikaela-peters-bb2b1281/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="#"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/reed-villarreal-605022151/" onClick={e => e.preventDefault()}>
                    <img src={reed} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Reed Villarreal</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Procurement Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Reed studies Finance at Texas A&M University, and work in the Resource Integration Office.  
                  He is responsible for obtaining all materials necessary for launch and acquiring the proper funding to cover the costs.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.twitter.com/reedvilla "
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/reed-villarreal-605022151/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://www.instagram.com/r.e.e.d"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 2 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/morgannovak/" onClick={e => e.preventDefault()}>
                    <img src={morgan} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Morgan Novak</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Avionics & Payload Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Morgan is an Electrical Engineer majoring in dork at the University of North Texas. Morgan has worked on multiple Avionics and Flight Operations Teams. Morgan's favorite and inspiring quote is: “Lezz go launch this boi!!".
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.linkedin.com/in/morgannovak/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://www.instagram.com/morganthadork"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/briantoliveira/" onClick={e => e.preventDefault()}>
                    <img src={elliot} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Elliot Briant</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Avionics & Payload - Software Developer</h6>
                  </Muted>
                  <p className={classes.description}>
                  Elliot is a Senior at Make School majoring in Applied Computer Science and Data Science.
                  He is a creative and ambitious software developer. Elliot approaches any environment as an opportunity to learn and utilize his experience with computer programming.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.twitter.com/theastrohacker"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/briantoliveira"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://www.instagram.com/the_social_hacker"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/kathrynrobertson21/" onClick={e => e.preventDefault()}>
                    <img src={kath} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Kathryn Robertson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Avionics & Payload - Software Testing & Development</h6>
                  </Muted>
                  <p className={classes.description}>
                  Kathryn is a sophomore majoring in Electrical Engineering at Virginia Tech. 
                  This spring semester was her first tour at JSC, and she is excited for many more challenging and fun experiences to come!
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.linkedin.com/in/kathrynrobertson21/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/kolten-knesek-37b3a817a/" onClick={e => e.preventDefault()}>
                    <img src={kolten} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Kolten Knesek</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Avionics & Payload, Flight & Launch Operations - Software Testing & Development</h6>
                  </Muted>
                  <p className={classes.description}>
                    Kolten studies ESET at Texas A&M University. Strong and silent cowboy type with traditional values. Kolten loves reparing hardware and soldering.
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                <Button
                    href="https://www.linkedin.com/in/kolten-knesek-37b3a817a/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 3 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/michael-boazzo-00b21410a/" onClick={e => e.preventDefault()}>
                    <img src={michael} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Michael Boazzo</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Safety & Mission Assurance - Integration Analyst</h6>
                  </Muted>
                  <p className={classes.description}>
                  Michael is studying Aerospace Engineering at the Ohio State University. He is currently working in the Inventory and Stowage Group in the Flight Operations Directorate. Michael works on Stow Track, a new application the astronauts will use to assist them in packing and unpacking items on-board the ISS. 
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.linkedin.com/in/michael-boazzo-00b21410a/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={shaun} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Shaun Quinn</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Flight & Launch Operations Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                    Shaun is studing Engineering at Orange Coast College. With his years of experience in solar photovoltaic design, he brings experience in project 
                    management and concept realization to the team.  He is excited to use his education and background to deploy 
                    successful electronics and procedures as Flight and Launch Operations system lead. 
                  </p>
                </CardBody>
                <CardFooter profile plain className={classes.justifyContent}>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/alex-kafer-01614147/" onClick={e => e.preventDefault()}>
                    <img src={alex} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Alex Kafer</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Graphic Designer</h6>
                  </Muted>
                  <p className={classes.description}>
                  Alex is majoring in Computer Science at the University of Minnesotta. He is a driven and ambitious developer, with interest in autonomous systems. 
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.twitter.com/mealexkafer"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="https://www.linkedin.com/in/alex-kafer-01614147/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://www.instagram.com/alexkafer"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/rafael-gonzalez-097816131/" onClick={e => e.preventDefault()}>
                    <img src={ralph} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Rafael Gonzalez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Airframe Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Rafael is a senior at The Citadel The Military College of South Carolina, majoring Mechanical Engineering. Rafael is extremely passionate about sports and bodybuilding. 
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="https://www.linkedin.com/in/rafael-gonzalez-097816131/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          {/* ROW 4 */}
          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://www.linkedin.com/in/lee-cantu-7b2286173/" onClick={e => e.preventDefault()}>
                    <img src={lee} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Lee Cantu</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Airframe - CAD Manager</h6>
                  </Muted>
                  <p className={classes.description}>
                  Lee Cantu is a Senior at The University of Texas Rio Grande Valley, with his intuition and creativity he’s able to excel through his skills of Computer Aided Design and Fluid Dynamics.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="https://www.linkedin.com/in/lee-cantu-7b2286173/"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://instagram.com/leebonbon23"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="/" onClick={e => e.preventDefault()}>
                    <img src={dani} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Daniela Rocca Bejar</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Airframe & Analyst Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Daniela is originally from Peru. She obtained her bachelor's degree in Mechanical Engineering at Florida International University (FIU). Currently, she is pursuing her Master's in Mechanical Engineering at The Pennsylvania State University. Model Rocketry is one of her hobbies. 
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="https://instagram.com/mandalu30" onClick={e => e.preventDefault()}>
                    <img src={amanda} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Amanda Graziosi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Recovery Lead</h6>
                  </Muted>
                  <p className={classes.description}>
                  Amanda is  currently pursuing my Master’s Degree in Business Administration at University of Houston Clear Lake.
                  She is responsible for leading and executing the recovery system of the rocket.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://instagram.com/mandalu30"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={noah} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Noah Vasquez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Flight & Launch Operations </h6>
                  </Muted>
                  <p className={classes.description}>
                  Noah is majoring in Mechanical Engineering at University of Houston. 
                  He is currently interning with LZ Technology as an Engineering Technician 
                  with experience as an OCC specialist. Noah is interested in the space program 
                  and he is also passionate about cars and flights.

                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                <Button
                    href="https://www.twitter.com/__Novh"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="instagram"
                    href="https://www.instagram.com/VasquezNovh"
                    className={classes.btn}
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  );
}

export default withStyles(teamsStyle)(SectionTeams);
