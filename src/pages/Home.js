import React from 'react';

import Image from 'react-bootstrap/Image';
import myEmoji from '../images/IMG_0989.jpg';

import javascript from '../images/icon/javascript.svg';
import nodejs from '../images/icon/nodedotjs.svg';
import html from '../images/icon/html5.svg';
import css from '../images/icon/css3.svg';
import bootstrap from '../images/icon/bootstrap.svg';
import springboot from '../images/icon/springboot.svg';
import tsnode from '../images/icon/tsnode.svg';

import confluence from '../images/icon/confluence.svg';
import jira from '../images/icon/jira.svg';
import mariadb from '../images/icon/mariadb.svg';
import mysql from '../images/icon/mysql.svg';
import notion from '../images/icon/notion.svg';


import { HomeContainer, EmptyDiv } from '../style/Home.style';


function Home(props) {
  return (<>
    <HomeContainer>
    <EmptyDiv></EmptyDiv>
      <Image 
        src={myEmoji} 
        fluid={true} 
        roundedCircle={true} 
        style={{width: "150px", height:"150px"}
      }/>
      <h3>결제 시스템 개발자</h3>
      <p>Payment Back-End Software Engineer</p>
      <EmptyDiv></EmptyDiv>
      <div style={{width:"100%", height:"30px", fontSize:"20px"}}>
      - Skills -
      </div>
      <div style={{width:"100%", height:"25px"}}>
      <Image src={html} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#E34F26", width:"30px", height: "20px"}}></Image>html
      <Image src={css} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#1572B6", width:"30px", height: "20px"}}></Image>css
      <Image src={javascript} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#F7DF1E", width:"30px", height: "20px"}}></Image>javascript
      <Image src={bootstrap} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#7952B3", width:"30px", height: "20px"}}></Image>bootstrap
      </div>
      <div style={{width:"100%", height:"25px"}}>
      <Image src={springboot} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#6DB33F", width:"30px", height: "20px"}}></Image>springboot
      <Image src={nodejs} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#339933", width:"30px", height: "20px"}}></Image>nodejs
      <Image src={tsnode} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#3178C6", width:"30px", height: "20px"}}></Image>tsnode
      </div>
      <div style={{width:"100%", height:"25px"}}>
      <Image src={mariadb} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#003545", width:"30px", height: "20px"}}></Image>mariadb
      <Image src={mysql} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#4479A1", width:"30px", height: "20px"}}></Image>mysql
      </div>
      <div style={{width:"100%", height:"25px"}}>
      <Image src={confluence} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#172B4D", width:"30px", height: "20px"}}></Image>confluence
      <Image src={jira} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"#0052CC", width:"30px", height: "20px"}}></Image>jira
      <Image src={notion} style={{border:"1px solid", borderRadius:"5px" ,margin: "10px", backgroundColor:"white", width:"30px", height: "20px"}}></Image>notion
      </div>
      etc...
    </HomeContainer>
  </>);
}

export default Home