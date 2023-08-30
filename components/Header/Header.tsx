import {Container} from './style'
import Image from "next/image";
import {Text} from '../Text'
import { Button } from '../Button';
import { colors } from "@/utils/colors";
import { auraLogo } from '@/assets';

interface HeaderProps{
    page: string
}


export function Header(props: HeaderProps){
    const {page} =  props

    return (
    <Container>
        <div style={{display:'flex', marginLeft:'3vw',justifyContent:'space-between', width:'25%'}}>
            <Text color={colors.secondary} fontWeight="400" textAlign="center" text="Home" size="2vw"></Text>
            <Text color={colors.secondary} fontWeight="400" textAlign="center" text="Sobre" size="2vw"></Text>
            <Text color={colors.secondary} fontWeight="400" textAlign="center" text="Ajuda" size="2vw"></Text>
        </div>

        <div style={{width:'100%', position:'absolute', display:'flex', justifyContent:'center', pointerEvents:'none'}}>
            <div style={{width:'8vw'}}>
                <Image src={auraLogo} alt='auraLogo' layout='responsive' />
            </div>
        </div>
        
        <div style={{marginRight:'3vw'}}>
            <Button border='1px solid #BE4C0C' colorButton={colors.primary} heightButton='3vw' widthButton='7vw' textButton='Entrar' textColor={colors.secondary}></Button>

        </div>
    </Container>)
}   