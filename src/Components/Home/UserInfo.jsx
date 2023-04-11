/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import Slider from 'react-slick'
import back2 from '../../assets/pictures/Blog/blog-1.jpg'

const details = [
  {
    picture:back2,
    name:"William Clinton",
    category:"react dev",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati delectus officiis veritatis commodi ex nisi, libero itaque rerum neque! Earum vel labore accusantium cumque corporis libero necessitatibus voluptatum sint, accusamus iusto laboriosam veniam omnis illo repellendus debitis, aspernatur officiis! Ex!",
  },
  {
    picture:back2,
    name:"William Clinton",
    category:"react dev",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati delectus officiis veritatis commodi ex nisi, libero itaque rerum neque! Earum vel labore accusantium cumque corporis libero necessitatibus voluptatum sint, accusamus iusto laboriosam veniam omnis illo repellendus debitis, aspernatur officiis! Ex!",
  },
  {
    picture:back2,
    name:"William Clinton",
    category:"react dev",
    details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati delectus officiis veritatis commodi ex nisi, libero itaque rerum neque! Earum vel labore accusantium cumque corporis libero necessitatibus voluptatum sint, accusamus iusto laboriosam veniam omnis illo repellendus debitis, aspernatur officiis! Ex!",
  }
]

const parentDiv = css `
  height: 350px;
  width:100%;
  background-color:#0e1317;
  padding:30px;
`
const divDotsContainer =css `
 ul{
  display:flex;
  gap:10px;
}
`
const noactiveDot =css `

  border-radius:50%;
  padding:5px;

  div{
    height:7px;
    width:7px;
    border-radius:50%;
    background-color:#b89146;
  }
`
const activeDot = css `
border: 1px solid white;
border-radius:50%;
padding:5px;

div{
  height:7px;
  width:7px;
  border-radius:50%;
  background-color:#b89146;
}

`
const detailDivContainer =css `
  padding:25px;
  display:flex;
  gap:40px;
`
const detailNameDiv = css `
  font-weight:600;
  color:white;
  margin-bottom:30px;
`
const detailTextDiv = css `
  font-weight:400;
  color:white;
  width:60vw;
  line-height:30px;
  font-size:20px;
`

function UserInfo() {

  const [currSlide,setCurrSlide] = React.useState(0)

  const settings ={
    dots:true,
    infinite:false,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    dotsClass:'theDotClass',
    beforeChange:(prev,next) =>{
      setCurrSlide(next)
    },
    appendDots:dots => {
      return(
        <div css={divDotsContainer}>
        <ul>
          {dots.map((item, index) => {
            return (
              <li key={index}>{item.props.children}</li>
            );
          })}
        </ul>
        </div>
      )
    },
    customPaging: index => {
      return (
        <div css={index === currSlide ? activeDot : noactiveDot}>
          <div></div>
        </div>
      )
    }
  }

  return (
    <div css={parentDiv}>
      <Slider {...settings}  >
        {details.map((detail,index)=>{
          const detailPicDiv =css`
            height:300px;
            width:200px;
            background-image:url(${detail.picture});
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
            border-radius:150px;
          `
          return(
            <div >
              <div css={detailDivContainer}>
                
              <div css ={detailPicDiv}>{/*Picture Here*/}

              </div>
              <div>{/*Details and Slick buttons here*/}
                <div css={detailNameDiv}>
                  <p css={detailTextDiv}>{detail.name}</p>
                  <p className='gold'>{detail.category}</p>
                </div>
                <div css={detailTextDiv}>
                  <p>
                    {detail.details}
                  </p>
                </div>
              </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default UserInfo
