/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Grid,Accordion,AccordionSummary,AccordionDetails,Stack,Chip } from '@mui/material'
import myBacgrPic from '../../assets/pictures/myPics/pankaj-patel-_SgRNwAVNKw-unsplash.jpg'
import myPic1 from '../../assets/pictures/myPics/myPic2.JPG'
import React,{useContext} from 'react'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'
import {AiFillHtml5} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {DiCss3,DiJava} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {SiMui} from 'react-icons/si'
import {SiJquery} from 'react-icons/si'
import {TbBrandRedux} from 'react-icons/tb'
import {SiAntdesign} from 'react-icons/si'
import { IconContext } from 'react-icons'
import { SiSpring,SiSpringboot,SiReactquery } from 'react-icons/si'


const myStack =[
    {icon:<FaReact/>, name:"REACT"},
    {icon:<IoLogoJavascript/>, name:"JAVASCRIPT"},
    {icon:<DiCss3/>, name:"CSS"},
    {icon:<AiFillHtml5/>, name:"HTML"},
    {icon:<SiRedux/>, name:"REDUX"},
    {icon:<SiMui/>, name:"MATERIAL UI"},
    {icon:<SiAntdesign/>, name:"ANT DESIGN"},
    {icon:<SiJquery/>, name:"JQUERY"},
    {icon:<TbBrandRedux />, name:"RTK-QUERY"},
    {icon:<SiSpringboot />,name:"SPRING-BOOT"},
    {icon:<SiSpring />,name:"SPRING"},
    {icon:<SiReactquery />,name:"REACT-QUERY"},
    {icon:<DiJava />,name:"JAVA"}
]

function AboutMe() {

    const medias = useContext(MediaQueryContext)
    const picHeader = css`
    background-image:url(${myBacgrPic});
    height:400px;
    background-position:center;
    background-size:cover;
  
    & h1{
      text-align:center;
      font-size:45px;
      color:white;
      font-weight:500;
    }
  
    &::after{
      content:'';
      width:100%;
      height:400px;
      position:absolute;
      left:0px;
      right:0px;
      background-color:#0E1317;
      opacity:0.8;
    }
  `
  const picContent = css`
  z-index:100;
  left:0px;
  right:0px;
  margin:230px auto;
  width:fit-content;
  position:absolute;
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  `

  const picDiv = css `
    background-image:url(${myPic1});
    height:${medias.DT?"100%":"400px"};
    
    background-size:contain;
    background-repeat:no-repeat;
    margin:auto;
  `

  const contentContainer = css `
  margin:${medias.DT || medias.TB? "100px 50px": "10px"};
  font-family: 'Roboto Mono', monospace !important;
  background-color:#f7f7f7;
  padding:0px 0px;

    & legend{
        color:#d0021b;
        font-weight:700;
    }

  & p{
    line-height:27px;
    color:#333334;
  }

  & h1{
    color:#d0021b;
    font-size:25px;
    letter-spacing: .2rem;
  }

  & h2{
    font-size:20px;
    font-weight:700;
    letter-spacing: .2rem;
    color:#0e1317;
  }

  & fieldset{
    margin-bottom:10px;
    padding:30px;
  }

  & div.flexDetDiv{
        display:flex;
        gap:10px;

        & a{
            color:#b89146;
        }


  }

  & ul,ol,li{
    list-style-type:disc;
  }

`


  return (
    <div>
    <div css={picHeader}>
      <div css={picContent}>
        <h1>About Me</h1>
      </div>
    </div>
    <div css={contentContainer}>
      <div>
            <fieldset>
                <Grid container spacing={1} >
                    <Grid item xl={2} lg={2} md={4} sm={12} xs={12}>
                        <div css={picDiv} >

                        </div>
                    </Grid>
                    <Grid item xl={10} lg={10} md={8} sm={12} xs={12}>
                        <div>
                            <h1>Ojong Clinton</h1>
                            <h2>Full Stack Dev</h2>
                            <p>As a React developer, I am highly skilled in creating dynamic and engaging user interfaces for web applications. With expertise in React.js, Redux, and other related technologies, I have developed a strong foundation in front-end development principles and am constantly exploring new ways to enhance user experience.
Whether it's building new features, optimizing performance, or debugging code, I approach each task with a meticulous attention to detail and a commitment to delivering high-quality work that exceeds expectations. Overall, I am a dedicated and motivated developer who is eager to take on new challenges and contribute to the success of any organization.</p>
                        </div>
                    </Grid>
                </Grid>
            </fieldset>
            <fieldset>
                <div className='flexDetDiv'>
                    <h3>Email :</h3> <p>Sheyenoh123@gmail.com</p>
                </div>
                <div className='flexDetDiv'>
                    <h3>Address :</h3> <p>Yaounde, Cameroon</p>
                </div>
                <div className='flexDetDiv'>
                    <h3>Phone :</h3> <p>+237 652303943</p>
                </div>
                <div className='flexDetDiv'>
                    <h3>Nationality :</h3> <p>Sheyenoh123@gmail.com</p>
                </div>
                <div className='flexDetDiv'>
                    <h3>Link :</h3> <a href="https://github.com/ojongclinton">github.com/ojongclinton</a>
                </div>
            </fieldset>
            <fieldset>
                <legend>Experience</legend>
                <Grid container>
                    <Grid item xl={2} lg={2} md={4} sm={12} xs={12}>
                        <h3>2022 - Feb 2023</h3>
                    </Grid>
                    <Grid item xl={10} lg={10} md={8} sm={12} xs={12}>
                        <ul>
                        <li>Oriented a team of 5 web development interns  and trained them in internal web functions , how to detect faults in failing code and how to properly communicate with backend API.</li>
                        <li>Collaborated with the senior web developer to clean up processes, boost performance, and increased website performance  by great amount.</li>
                        <li>
                        Studied and implemented complete Redux life cycle for state management , react toolkit and redux rtkQuery for communication with backend server
                        </li>
                        <li>
                        Traced and fixed bugs occurring in website about displays, data caching and page responsiveness 
                        </li>
                        </ul>
                    </Grid>
                </Grid>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                
                <Grid container>
                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                        <h3>2020 - JUL 2022</h3>
                    </Grid>
                    <Grid item xl={10} lg={10} md={8} sm={8} xs={12} style={{marginBottom:"20px"}}>
                        <div>
                            <h3>HND</h3>
                            <p>Siantou University Institute , Yaounde</p>
                        </div>
                    </Grid>
                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                        <h3>2022 - PRESENT</h3>
                    </Grid>
                    <Grid item xl={10} lg={10} md={8} sm={8} xs={12}>
                        <div>
                            <h3>Bachelor's Degree</h3>
                            <p>University of Yaounde I</p>
                        </div>
                    </Grid>
                </Grid>
                
            </fieldset>
            <div>
                <Grid container spacing={1}>
                    <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
                        <fieldset>
                            <legend>Languages</legend>

                            <div style={{marginBottom:"20px"}}>
                                <h3>FRENCH</h3>
                                <p>Advanced</p>
                            </div>
                            <div>
                                <h3>ENGLISH</h3>
                                <p>Native</p>
                            </div>
                        </fieldset>
                    </Grid>
                    <Grid item xl={10} lg={10} md={8} sm={8} xs={12}>
                    <IconContext.Provider value={{size: 20, color:'#b89146'}}>
                    <fieldset>
                            <legend>My Stack</legend>
                            <Grid container spacing={2}>
                                {myStack.map((stack,index)=>{
                                    return(
                                        <Grid item xl={1} lg={2} md={3} sm={3} xs={4}>
                                            <Chip label={stack.name} avatar={stack.icon}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </fieldset>
                        </IconContext.Provider>
                    </Grid>
                </Grid>
            </div>
            <div>
                <fieldset>
                    <legend>This project</legend>
                    <p>
                    As a Front-end web developer, I designed and built a hotel booking website from scratch. This involved creating a user-friendly interface for customers to search for available hotels based on their preferred location, dates, and room type.
The filter was deeply extended and the user given possibility to select the type of hotel with amenities and/or services he/she desires. Additionally, I implemented a section that automatically fetches the location a user is accessing the website from and gives Hotel recommendations based on the User's location.
                    </p>
                </fieldset>
            </div>
      </div>
    </div>
</div>
  )
}

export default AboutMe
