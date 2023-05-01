/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'

export const DisplayImages =({imgList})=>{

    const parentStyle = css `
        display:grid;
        grid-template-columns:1fr 1fr;
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
        <div css={parentStyle}>
            {selectedImgs.map(img=>{
                    const image = imgList[img].image.url.split('?')[0];
                const picStyle = css `
                    background-image:url(${image});
                    width:403px;
                    height:300px;
                    margin:10px 0px;
                    background-position:center;
                    background-size:cover;
                    
                `
                return (
                    <div css={picStyle}>

                    </div>
                )
            })}
        </div>
    )
}
