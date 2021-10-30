import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    background-color: #f5f5f5;
    
`

export const SectionOurTaxi = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: #161c1e;
    margin-top: 4em;
    padding-bottom: 3em;
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    margin: 6em 0em 4em 0em;
`

export const Title = styled.h2`
    font-size: 3em;
    color: #fff;

`

export const BoxCarsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0em 6em;
    @media (max-width: 992px) {
        padding: 0em 3em;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        padding: 0em 1em;
    }
`

export const Car = styled.div`
    display: flex;
    width: 25vw;
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #fff;
    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 4em;

    }
`

export const round = styled.div`
    position: relative;
    bottom: 8%;
    background: #f8ca11;
    width: 3.1em;
    padding: 1em;
    border-radius: 60px;
    color: #fff;
    font-size: 1.5em;
    @media (max-width: 992px) {
        width: 2.6em;
        padding: 0.7em;
        border-radius: 60px;
        bottom: 6%;
    }
`
export const CarTitle = styled.h3`
    font-size: 1.5em;
    font-weight: 200;
    margin: 1em 0em 1em 0em;
    opacity: 0.9;
    @media (max-width: 768px) {
        margin: 0em 0em 1em 0em;
    }
    @media (max-width: 576px) {
        margin: 1em 0em 1em 0em;
    }
`

export const CarParagraph = styled.p`
    font-size: 1.2em;
    width: 100%;
    padding: 0em 2.5em 0em 2.5em;
    opacity: 0.7;
    @media (max-width: 768px) {
        font-size: 1em;
        padding: 0em 1em 0em 1em;
    }
    @media (max-width: 576px) {
        font-size: 1.2em;
        width: 220px;
    }

`

export const img = styled.img`
    width: 100%;
    padding: 1em;
    @media (max-width: 576px) {
        width: 380px;
        padding: 1em 3em 0em 3em;
    }
`
