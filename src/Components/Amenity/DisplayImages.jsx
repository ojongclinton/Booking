/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Grid } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../Hooks/MediaQueryContext';

export const DisplayImages =({imgList})=>{
const medias = useContext(MediaQueryContext)
    const parentStyle = css `
        margin-bottom:25px;

    `
    const selectedImgs = [1,7,10,2];

    // while(selectedImgs.length < 4){
    //     let num = generateRandom(0,imgList.length);
    //     if(selectedImgs.includes(num)){
    //         continue
    //     } else{
    //         selectedImgs.push(num)
    //     }
    // }

    return (
        <Grid container spacing={2}>
            {selectedImgs.map((img,index)=>{
                    const image = imgList[img].image.url.split('?')[0];
                const picStyle = css `
                    background-image:url(${image});
                    width:100%;
                    height:300px;
                    margin:10px 0px;
                    background-position:center;
                    background-size:cover;
                `
                return (
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12} key={index}>
                        <div css={picStyle}>

                        </div>
                    </Grid>
                )
            })}
        </Grid>
    )
}
