import styled from "styled-components";

const ProductsContainer = styled.div`
padding: 30px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const PSHover = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 45vh;
height: 53vh;
position: absolute;
top: 0;
border-radius: 5%;
z-index: 3;
opacity: 0;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`

const ProductCard = styled.div`
width: 45vh;
height: 53vh;
box-shadow: 0px 3px 4px rgba(63, 63, 63, 0.479);
border-radius: 5%;
margin: 5px;
position: relative;
z-index: 2;
&:hover ${PSHover}{
    opacity: 1;
}
`
const NikeLogo = styled.img`
width: 60px;
height: 60px;
`
const Image = styled.img`
margin-top: 20px;
width: 200px;
height: 100px;
transform: rotate(18deg);
`
const Info = styled.div`
margin-top: 30px;
width: 100%;
height: 39vh;
`
const TittlePS = styled.p`
text-align: center;
margin-left: 4px;
margin-right: 4px;
margin-bottom: 4px;
font-size: 20px;
font-family: 'Poppins', sans-serif;
font-weight: 500;
color: rgb(22, 22, 22);
`
const SubTittlePS = styled.p`
text-align: center;
margin-left: 4px;
margin-right: 4px;
font-size: 15px;
font-family: 'Poppins', sans-serif;
font-weight: 450;
color: rgba(39, 39, 39, 0.918);
`

const PricePS = styled.p`
color: #00c853;
font-size: 17px;
font-weight: 700;
text-align: right;
margin-right: 5px;
margin-bottom: 4px;
`
const PriceUSDPS = styled.p`
color: #00c853;
font-size: 17px;
font-weight: 700;
text-align: right;
margin-right: 5px;
`
export {
    ProductCard, NikeLogo, Image, Info, TittlePS, PricePS, PriceUSDPS, SubTittlePS, PSHover, ProductsContainer
}