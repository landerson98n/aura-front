'use client'

import { motion } from "framer-motion"
import styled from "styled-components"


export const Container = styled.div `
    width: 100%;
    background-color: white;
    height:100vh;
    overflow-y: hidden;
    display: flex;
`
export const Content = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`


export const Header = styled.div `
    width: 100%;
    background-color: white;
    height: 7vw;
    box-shadow: 0.1vw 0.1vw 0.5vw #D6D6D6;
    display: flex;
    align-items: center;
    justify-content: end;
`

export const Menu = styled(motion.div) `
    width: 20%;
    height: 100%;
    background-color: green;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Animals = styled(motion.div) `
    width: 90%;
    height: 90%;
    background-color: white;
    margin-top: 2vw;
`
export const Table = styled.table `
    width: 100%;
    height: 20%;
    text-align: center;
    background-color: white;
    border: solid 1px rgba(103, 97, 97, 0.5);
    margin-top: 2vw;
`

export const TableHeader = styled.tr `
    background-color: #F9F9FB;
    border-bottom: solid 1px rgba(103, 97, 97, 0.5);
`

export const TableContent = styled.tr `
    border-bottom: solid 1px rgba(103, 97, 97, 0.5);
`

export const DropdownMenu = styled(motion.div) `
    width: 100%;
    height: 45%;
    background-color: white;
    border-radius: 0.5vw;
`





