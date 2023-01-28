import React from "react";
import "./Aboutme.css";
import { Row, Col, Container } from "react-bootstrap";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LanguageIcon from '@mui/icons-material/Language';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WindowIcon from '@mui/icons-material/Window';
export default function AboutMe(props) {
  return (
    <div className="AboutMe-container">
      <Container>
        <Row>
          <Col className="AboutMeRowSides" md={12} xl={4}>
            <div
              onMouseEnter={props.testPassFunction}
              onMouseLeave={props.Leave}
              className="infoBox"
            >
                <ViewInArIcon/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro asperiores error voluptates quam debitis laudantium laborum odit. Quos, quis beatae.</div>
          </Col>
          <Col className="AboutMeRowSides" md={12} xl={4}>
            <div
              onMouseEnter={props.Enter}
              onMouseLeave={props.Leave}
              className="infoBox"
            >
                <LanguageIcon/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro asperiores error voluptates quam debitis laudantium laborum odit. Quos, quis beatae.</div>
            <div
              className="infoBox"
              onMouseEnter={props.Enter}
              onMouseLeave={props.Leave}
            >
             <PersonalVideoIcon/>   
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro asperiores error voluptates quam debitis laudantium laborum odit. Quos, quis beatae.</div>
          </Col>
          <Col className="AboutMeRowSides" md={12} xl={4}>
            <div
              onMouseEnter={props.testPassFunction}
              onMouseLeave={props.Leave}
              className="infoBox"
            >
                <WindowIcon/>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro asperiores error voluptates quam debitis laudantium laborum odit. Quos, quis beatae.</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
