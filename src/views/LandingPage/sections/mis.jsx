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
              <h2 className={classes.title}>Spring 2019 team</h2>
              {/* <h5 className={classes.description}>
              We are a team of creative problem solvers. Our team brings a wealth of experience from some of the world’s most formidable organizations, agencies and startups.
              </h5> */}
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
                  <h4 className={classes.cardTitle} style={dark}>Mateo Atwi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Team Leader</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Mateo is an aspiring rocket scientist. He studies Mechanical Engineering at Georgia Institute of Technology.
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Joe Amar</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Team Co-Leader & Propulsion Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  A former USAF Staff Sgt with Craftsman skill-level in Aerospace Propulsion, 
                  Joe’s long-time love of space travel led him to engineering at NASA.
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Mikaela Peters</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Safety & Mission Assurance Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Mikaela study Business Analytics & Information Technology and Russian at Rutgers University in New Jersey. 
                  This semester was her first time working with a team to build a rocket.
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Reed Villarreal</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Procurement Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Reed studies Finance at Texas A&M University, and work in the Resource Integration Office.  
                  He is responsible for obtaining all materials necessary for launch and acquiring the proper funding to cover the costs.
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
                  <a href="https://www.linkedin.com/in/morgannovak/" onClick={e => e.preventDefault()}>
                    <img src={morgan} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Morgan Novak</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Morgan is an Electrical Engineer majoring in dork at the University of North Texas. Morgan has worked on multiple Avionics and Flight Operations Teams. Morgan's favorite and inspiring quote is: “Lezz go launch this boi!!".
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Elliot Briant</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload - Software Developer</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Elliot is a Senior at Make School majoring in Applied Computer Science and Data Science.
                  He is a creative and ambitious software developer. Elliot approaches any environment as an opportunity to learn and utilize his experience with computer programming.
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Kathryn Robertson</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload - Software Testing & Development</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Kathryn is a sophomore majoring in Electrical Engineering at Virginia Tech. 
                  This spring semester was her first tour at JSC, and she is excited for many more challenging and fun experiences to come!
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Kolten Knesek</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Avionics & Payload, Flight & Launch Operations - Software Testing & Development</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                    Kolten studies ESET at Texas A&M University. Strong and silent cowboy type with traditional values. Kolten loves reparing hardware and soldering.
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
                  <a href="https://www.linkedin.com/in/michael-boazzo-00b21410a/" onClick={e => e.preventDefault()}>
                    <img src={michael} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Michael Boazzo</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Safety & Mission Assurance - Integration Analyst</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Michael is studying Aerospace Engineering at the Ohio State University. He is currently working in the Inventory and Stowage Group in the Flight Operations Directorate. Michael works on Stow Track, a new application the astronauts will use to assist them in packing and unpacking items on-board the ISS. 
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Shaun Quinn</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
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
                  <h4 className={classes.cardTitle} style={dark}>Alex Kafer</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Graphic Designer</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Alex is majoring in Computer Science at the University of Minnesotta. He is a driven and ambitious developer, with interest in autonomous systems. 
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Rafael Gonzalez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Rafael is a senior at The Citadel The Military College of South Carolina, majoring Mechanical Engineering. Rafael is extremely passionate about sports and bodybuilding. 
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
                  <a href="https://www.linkedin.com/in/lee-cantu-7b2286173/" onClick={e => e.preventDefault()}>
                    <img src={lee} alt="..." className={classes.img} />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle} style={dark}>Lee Cantu</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe - CAD Manager</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Lee Cantu is a Senior at The University of Texas Rio Grande Valley, with his intuition and creativity he’s able to excel through his skills of Computer Aided Design and Fluid Dynamics.
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Daniela Rocca Bejar</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Airframe & Analyst Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Daniela is originally from Peru. She obtained her bachelor's degree in Mechanical Engineering at Florida International University (FIU). Currently, she is pursuing her Master's in Mechanical Engineering at The Pennsylvania State University. Model Rocketry is one of her hobbies. 
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Amanda Graziosi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Recovery Lead</h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Amanda is  currently pursuing my Master’s Degree in Business Administration at University of Houston Clear Lake.
                  She is responsible for leading and executing the recovery system of the rocket.
                  </p>
                </CardBody>
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
                  <h4 className={classes.cardTitle} style={dark}>Noah Vasquez</h4>
                  <Muted>
                    <h6 className={classes.cardCategory} style={color}>Flight & Launch Operations </h6>
                  </Muted>
                  <p className={classes.description} style={bio}>
                  Noah is majoring in Mechanical Engineering at University of Houston. 
                  He is currently interning with LZ Technology as an Engineering Technician 
                  with experience as an OCC specialist. Noah is interested in the space program 
                  and he is also passionate about cars and flights.

                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>