'use client'

import styled from "styled-components"
import { colors } from "@/utils/colors" 

export const Container = styled.div `
    width: 100%;
    height:111vh;
    background-color: ${colors.primary};
    overflow: hidden;
`

export const Content = styled.div `
    width: 100%;
    height: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vw;
`
export const GreenBackground = styled.div `
    width: 100%;
    height: 30vw;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AboutSecond = styled.div `
    width: 100%;
    height: 60vw;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`