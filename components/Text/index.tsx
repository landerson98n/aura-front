import React from "react";
import { Sen } from 'next/font/google'
import Image from "next/image";

const sen = Sen({weight:['400'], subsets:['latin']})

type TextAlign = 'left' | 'center' | 'right' | 'justify';

interface TextProps {
    size: string,
    text: string,
    color: string,
    fontWeight: string,
    widthImage?: string,
    src?: string,
    textAlign?: TextAlign;
    
}

export function Text(props: TextProps){
    const {  size, text, color, fontWeight,textAlign, widthImage, src } = props;
    return (
        <>  
            {src? <div style={{width:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{width:`${widthImage}`, marginTop:'0.3vw'}}>
                    <Image src={src} alt="Logo" layout='responsive' objectFit='contain' /> 
                </div>
                <h1 style={{fontSize:`${size}`, color, fontWeight, textAlign:`${textAlign ? textAlign : 'justify'}`}} className={sen.className}>{text}</h1>
            </div> :   <h1 style={{fontSize:`${size}`, color, fontWeight, textAlign:`${textAlign ? textAlign : 'justify'}`}} className={sen.className}>{text}</h1>
 }
        </>
        
    )
}