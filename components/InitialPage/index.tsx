import React from "react";
import Image from "next/image";
import {Text} from '../Text'
import {
    Container,
    Content,
} from './style'
import { Header } from "../Header/Header";
import { colors } from "@/utils/colors";
import { border, emblema, shirts } from "@/assets";
import { motion } from "framer-motion";

export function InitialPage(){
    return (
       <Container>
        <motion.div  style={{width:'100%', height:'100%', position:'absolute', pointerEvents:'none'}}>
            <Image src={border} alt="border" layout="responsive"/>
        </motion.div>
            <Header page="Home"/>
            <Content>
                <div style={{width:'20vw', marginLeft:'-20vw'}}>
                    <Image alt="shirts" src={shirts} layout="responsive"></Image>
                </div>
                <div style={{width:'50%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Text color={colors.secondary} fontWeight="700" textAlign="center" text="Todo mundo tem uma única aura" size="6vw"></Text>
                    <div style={{width:'20vw'}}>
                        <Image alt="auraEmblema" src={emblema} layout="responsive"></Image>
                    </div>
                </div>

            </Content>
       </Container>
    )
}