/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React, { useContext, useEffect, useState } from 'react'
import { useFindLocationsQuery } from './findSLice';
import bacPick from '../../assets/pictures/page-banner-6.jpg'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext';
import { Grid,Accordion,AccordionSummary,AccordionDetails, TextField,RadioGroup,FormControlLabel,Radio,ListItemText,Checkbox,MenuItem,OutlinedInput,Select,FormControl,InputLabel } from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGetFilteredMutation } from '../Home/LuxuryRoomSlice';
import {AiFillHome,AiFillStar} from 'react-icons/ai'
import {GiMeal} from 'react-icons/gi'
import {IoMdOptions} from 'react-icons/io'
import {BsPlugin,BsArrowDownCircleFill} from 'react-icons/bs'
import {BiSortDown} from 'react-icons/bi'
import {MdOutlineFamilyRestroom} from 'react-icons/md'
import { deleteEmptyKeys } from '../SingleItems/Other/Functions';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Loading, { Error } from '../SingleItems/Loading/Loading';
import Properties from './Properties';
import {ImFilter} from 'react-icons/im'
import { animateScroll as scroll } from 'react-scroll';
import myData from './List.json'


const amenities = [
  {RName:"FREE_AIRPORT_TRANSPORTATION",FName:"Free airport transportation"},
  {RName:"OCEAN_VIEW",FName:"Ocean View"},
  {RName:"HOT_TUB",FName:"Hot tub"},
  {RName:"PETS",FName:"Pets"},
  {RName:"CASINO",FName:"Casion"},
  {RName:"SPA_ON_SITE",FName:"On-site SPA"},
  {RName:"CRIB",FName:"Crib"},
  {RName:"BALCONY_OR_TERRACE",FName:"Balcony or Terrace"},
  {RName:"PARKING",FName:"Parking Available"},
  {RName:"ELECTRIC_CAR",FName:"Electric Cars"},
  {RName:"RESTAURANT_IN_HOTEL",FName:"Restaurant in Hotels"},
  {RName:"KITCHEN_KITCHENETTE",FName:"Kitchen Kitchenette"},
  {RName:"GYM",FName:"Gyms"},
  {RName:"POOL",FName:"Pools"},
  {RName:"WASHER_DRYER",FName:"Washer & Dryer"},
  {RName:"WATER_PARK",FName:"Water Park"},
  {RName:"AIR_CONDITIONING",FName:"Air Conditioning"},
  {RName:"WIFI",FName:"Wifi"}
];
const accessibility = [
  {RName:"SIGN_LANGUAGE_INTERPRETER",FName:"SIgn Language Interpreter"},
  {RName:"STAIR_FREE_PATH",FName:"Stair free path"},
  {RName:"SERVICE_ANIMAL",FName:"Service Animal"},
  {RName:"IN_ROOM_ACCESSIBLE",FName:"In room Accesible"},
  {RName:"ROLL_IN_SHOWER",FName:"Roll-in shower"},
  {RName:"ACCESSIBLE_BATHROOM",FName:"Accesible bathroom"},
  {RName:"ELEVATOR",FName:"Elevator"},
  {RName:"ACCESSIBLE_PARKING",FName:"Accesible parking"}
]
const mealPlan = [
  {RName:"FREE_BREAKFAST",FName:"Full breakfast"},
  {RName:"HALF_BOARD",FName:"Half board"},
  {RName:"FULL_BOARD",FName:"Full board"},
  {RName:"ALL_INCLUSIVE",FName:"All Inclusive"}
]
const lodging = [
  {RName:"VILLA",FName:"Villa"},
  {RName:"CONDO_RESORT",FName:"Condo Resort"},
  {RName:"PENSION",FName:"Pension"},
  {RName:"TOWNHOUSE",FName:"Townhouse"},
  {RName:"AGRITOURISM",FName:"Agritourism"},
  {RName:"HOTEL_RESORT",FName:"Hotel Resort"},
  {RName:"HOLIDAY_PARK",FName:"Holiday park"},
  {RName:"CONDO",FName:"Condo"}
]
const sort = [
  {RName:"PRICE_RELEVANT",FName:"Price Relevant"},
  {RName:"REVIEW",FName:"Review"},
  {RName:"DISTANCE",FName:"Distance "},
  {RName:"PRICE_LOW_TO_HIGH",FName:"Price : Low to High"},
  {RName:"PROPERTY_CLASS",FName:"Property Class"},
  {RName:"RECOMMENDED",FName:"Recommended"}
];

const rating = [
  {RName:"10",FName:"1 Star Hotels"},
  {RName:"20",FName:"2 star Hotels"},
  {RName:"30",FName:"3 star Hotels"},
  {RName:"40",FName:"4 star Hotels"},
  {RName:"50",FName:"5 star Hotels"}
]
const travelTypes = [
  {RName:"FAMILY",FName:"Family Travel"},
  {RName:"BUSINESS",FName:"Business Travel"}
]

const curerrentDate = new Date()

const picHeader = css`
  
  height:400px;
  background-position:center;

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
margin:140px auto;
width:100vw;
position:absolute;
color:white;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
height:50vh;

`
const flxDivCss =css `
  margin-top:20px;
  margin:0px auto;
  width:fit-content;
  padding:30px;
`


function FindProperty() {

  const [searchTerm,setSearchTerm] = useState("");
  const [giaIds,setGid] = useState("")
  const medias = useContext(MediaQueryContext);
  const [getData,{data,status,error,isLoading,isError,isSuccess,isUninitialized}] = useGetFilteredMutation()
  const [isFetching,setFetching] = useState(false)

  const [chossedAmenities,setChoosedAmenities] = useState([])
  const [choosedAccesibility,setChoosedAccesibility] = useState([])
  const [choosedMealPlan,setChoosedMealPlan] = useState([])
  const [choosedLodging,setChoosedLodging] = useState([])
  const [choosedSort,setChoosedSort] = useState([])
  const [choosedRating,setChoosedRating] = useState([])
  const [trvType,setTrvType] = useState([]);
  const [checkInDate,setCheckinDate] = useState(dayjs())
  const [checkOutDate,setCheckOutDate] = useState(dayjs())
  


  const filtersContainer =css`
  border:1px solid #E7E7E8;
  padding:20px;
  margin:auto;

`

  const hotelTypeBody = {
    currency: "USD",
    locale: "en_US",
    destination: {
      regionId: giaIds
  },
    checkInDate: {
      day: checkInDate.$d.getDate(),
      month: checkInDate.$d.getMonth() + 1,
      year: checkInDate.$d.getFullYear()
    },
    checkOutDate: {
      day: checkOutDate.$d.getDate() + 2,
      month: checkOutDate.$d.getMonth() + 1,
      year: checkOutDate.$d.getFullYear()
    },
    rooms: [
        {
            adults: 1,
            children: [
                {
                    age: 5
                }
            ]
        }
    ],
    resultsStartingIndex: 0,
    resultsSize: 200,
    sort: "PRICE_LOW_TO_HIGH",
    filter:{
      travelerType:trvType,
      mealPlan:choosedMealPlan,
      lodging:choosedLodging,
      amenities:chossedAmenities,
      accessibility:choosedAccesibility,
      sort:choosedSort,
      star:choosedRating
    }
  }
  let content = <p>Enter a search term</p>;
  const contentContainer = css `
  margin:${medias.DT || medias.TB? "100px 20px": "100px 10px"};

  & h1{
    text-align:center;
    font-size:25px;
    color:#0E1317;
    font-weight:500;
  }
`

useEffect(()=>{
  let isUnfetched = true

  if(giaIds == null || giaIds == "" || giaIds == undefined){
    return()=>{
      isUnfetched = false
    }
  }

  getData(deleteEmptyKeys(hotelTypeBody))

  return()=>{
    isUnfetched = false
  }
},[giaIds])

const fetchData =async ()=>{
  (()=>{
    setFetching(true)
    scroll.scrollTo(400)
  })()
  
  console.log("Lol")
  const options = {
    method: 'GET',
   url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
    params: {q: searchTerm},
    headers: {
      'X-RapidAPI-Key': '7d266fe8e5mshaa6c100f384b6efp1fea46jsn72d95cb12846',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };

  try{
    const response = await axios.request(options);
    (()=>{setFetching(false)})()
    setGid(response.data.sr[0].gaiaId)
  }
  catch(e){
    console.log(e)
  }

}

const radioStyles ={
  '&.Mui-checked':{color:"#b89146"}
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  }
};

const handleTravelChange = (e) =>{
  setTrvType(e.target.value)
}
const handelLodgingChange = (e) =>{
  setChoosedLodging(e.target.value)
}
const handleMealChange =(e)=>{
  setChoosedMealPlan(e.target.value)
}
const handleAccChange =(e)=>{
  setChoosedAccesibility(e.target.value)
}
const handleAmenChange =(e)=>{
  setChoosedAmenities(e.target.value)
}
const handleSortChange =(e)=>{
  setChoosedSort(e.target.value)
}
const handleRatingChange =(e)=>{
  setChoosedRating(e.target.value)
}


if(isLoading || isFetching){
  content = <Loading />
}
else if (isUninitialized && giaIds.length < 1 && !isFetching){
  content = <h1>Enter Location to get Started</h1>

}else if(data && data!=null && data?.data?.propertySearch?.properties.length > 0 ){

  content = <Properties properties = {data.data.propertySearch.properties} />
}

else if(isError){
  content = <Error />
}

  return (
    <div>
  <div css={picHeader}>
    <div css={picContent}>
       <h1>Where are you headed to ?</h1>
       <Grid container spacing={1} css={flxDivCss}>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          <DatePicker value={checkInDate} slotProps={{ textField: { variant: 'filled',error: checkInDate.$d.getDate() <dayjs().$d.getDate() } }} sx={{background:"#f0f0f0",width:"99%"}} label="Check-In" onChange={(e)=>{setCheckinDate(e)}} />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          
          <DatePicker value={checkOutDate} slotProps={{ textField: { variant: 'filled',error:checkOutDate < checkInDate } }} sx={{background:"#f0f0f0",width:"99%"}} label="Check-Out"  onChange={(e)=>{setCheckOutDate(e)}}/>  
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          <TextField 
            id="outlined-basic" 
            label="Location" 
            variant="filled"
            style={{background:"white",width:"99%"}}
            onChange={e=>setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
          <button onClick={fetchData} 
                  style={{width:"100%",height:"100%"}}
                  disabled={checkOutDate < checkInDate || checkInDate.$d.getDate() <dayjs().$d.getDate() || searchTerm.length < 3}
                  >SEARCH</button>
        </Grid>
       </Grid>
    </div>
  </div>

  <div css={contentContainer}>
  <div style={{width:"fit-content",margin:"20px auto",display:"flex",alignItems:"center",flexDirection:"column",gap:"20px"}}>
    <h1>Filters are all optional</h1>
  <h1>Make sure you select filters if any, before searching</h1>
  <BsArrowDownCircleFill color='#b89146' size={50}/>
  </div>
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <div style={{display:"flex",gap:"15px"}}>
                        <ImFilter size={30} color='#b89146'/>
                        <h1 style={{marginBottom:"0px"}}>Filters</h1>
                    </div>
    </AccordionSummary>
    <AccordionDetails >

    
<Grid container css={filtersContainer} spacing={1}>
  {/*TRAVEL TYPE SETTING*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Travel Type <MdOutlineFamilyRestroom color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={trvType} 
              onChange={handleTravelChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                const realValues =[];
                selected.forEach(s=>realValues.push(travelTypes.find(r=>r.RName === s).FName))
                    return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {travelTypes.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={trvType.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
  {/*LODGING TYPE SETTING*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Logding Type <AiFillHome color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={choosedLodging} 
              onChange={handelLodgingChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                const realValues =[];
                selected.forEach(s=>realValues.push(lodging.find(r=>r.RName === s).FName))
                    return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {lodging.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={choosedLodging.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
  {/*MEAL PLAN SELECTOR*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Meal Plan <GiMeal color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={choosedMealPlan} 
              onChange={handleMealChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                    const realValues =[];
                    selected.forEach(s=>realValues.push(mealPlan.find(r=>r.RName === s).FName))
                        return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {mealPlan.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={choosedMealPlan.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
  {/*USER ACCESIBILITY SETTINGS*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Accessibility Options <IoMdOptions color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={choosedAccesibility} 
              onChange={handleAccChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                const realValues =[];
                selected.forEach(s=>realValues.push(accessibility.find(r=>r.RName === s).FName))
                    return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {accessibility.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={choosedAccesibility.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
  {/*Amenities Options*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Amenity Included <BsPlugin color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={chossedAmenities} 
              onChange={handleAmenChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                const realValues =[];
                selected.forEach(s=>realValues.push(amenities.find(r=>r.RName === s).FName))
                    return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {amenities.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={chossedAmenities.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
  {/*SORT OPTION*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Sort Options <BiSortDown color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={choosedSort} 
              onChange={handleSortChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                const realValues =[];
                selected.forEach(s=>realValues.push(sort.find(r=>r.RName === s).FName))
                    return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {sort.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={choosedSort.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
  {/*RATING OPTIONS*/}
  <Grid item xl={2} lg={2} md={4} sm={6} xs={12}>
    <div>
      <p>Rating <AiFillStar color='#b89146'/></p>
      <FormControl sx={{mt:1}} classes={{root:'mui-form-control'}}>
        <InputLabel>type</InputLabel>
          <Select 
              size="small" 
              multiple 
              value={choosedRating} 
              onChange={handleRatingChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                const realValues =[];
                selected.forEach(s=>realValues.push(rating.find(r=>r.RName === s).FName))
                    return realValues.join(',')
                    }} MenuProps={MenuProps}>
          {rating.map((name,index) => (
            <MenuItem key={index} value={name.RName}>
              <Checkbox checked={choosedRating.includes(name.RName)} />
              <ListItemText primary={name.FName} />
            </MenuItem>))}
        </Select>
      </FormControl>
    </div>
  </Grid>
</Grid>
</AccordionDetails>
  </Accordion>
    <Grid container spacing={1}>
        <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
          <div>
            <h1></h1>
          </div>
        </Grid>
        <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
          <div style={{padding:"30px"}}>
            {content}
          </div>
        </Grid>
    </Grid>
  </div>
    </div>
  )
}

export default FindProperty
