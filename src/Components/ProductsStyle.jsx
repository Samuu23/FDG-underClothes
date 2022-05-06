import styled from 
"styled-components";

//Cards styles

const ProductsContainer = styled.div`
padding: 30px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const PSHover = styled.div`
background-color: rgba(0, 0, 0, 0.5);
width: 45vh;
height: 65vh;
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
height: 65vh;
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
//Detail Styles

const ItemDetailDiv = styled.div`
width: 180vh;
height: 85vh;
margin-top: 20px;
`

const DetailPhotoDiv=styled.img`
width: 600px;
height: 400px;`

const ItemDetailInfoDiv=styled.div`
width: 500px;
height: 500px;`

const DetailH2=styled.h2`
text-align: center;
margin-top: 30px;
margin-left: 10px;
margin-right: 4px;
margin-bottom: 4px;
font-size: 35px;
font-family: 'Poppins', sans-serif;
font-weight: 500;
color: rgb(22, 22, 22);`

const DetailSubtittle = styled.p`
text-align: center;
margin-left: 10px;
margin-right: 4px;
font-size: 20px;
font-family: 'Poppins', sans-serif;
font-weight: 450;
color: #00c853;
`
const DetailStock = styled.p`
text-align: left;
margin-top: 5px;
margin-left: 30px;
margin-right: 4px;
font-size: 18px;
font-family: 'Poppins', sans-serif;
font-weight: 450;
color: rgb(22, 22, 22);`


const DetailBrand = styled.p`
text-align: left;
margin-top: 30px;
margin-left: 30px;
margin-right: 4px;
font-size: 18px;
font-family: 'Poppins', sans-serif;
font-weight: 450;
color: rgb(22, 22, 22);`

const DetailPrice= styled.p`
text-align: left;
margin-top: 30px;
margin-left: 30px;
margin-right: 4px;
color: #00c853;
font-size: 17px;
font-weight: 700;
font-family: 'Poppins', sans-serif;`

const DetailPriceUSD= styled.p`
text-align: left;
margin-top: 30px;
margin-left: 30px;
margin-right: 4px;
color: #00c853;
font-size: 17px;
font-weight: 700;
font-family: 'Poppins', sans-serif;
`

//Cart
const CartContainer= styled.div`
width: 250vh;
height: 100%;
background-color: white;
display: flex;
`
//Cart / Item Cart Container
const ItemCartContainer= styled.div`
width: 150vh;
height: 100%;
background-color: white;
border-radius: 30px 0px 0px 30px;
border: 1px solid #E8E8E8;`

const ItemCartHeaderDiv= styled.div`
width: 100%;
height: 80px;`

const ItemCartMainDiv= styled.div`
width: 100%;
height: 120px;
border-top: 1px solid #E8E8E8`

const ItemCartTittle= styled.h1`
font-size: 35px;`

const ItemCartAmount= styled.h2`
font-size: 20px`

const ItemCartImage= styled.img`
width: 150px;`

const ItemCartName= styled.h2`
font-size: 15px;`

const ItemCartType= styled.p``

const ItemCartUnit= styled.p``

const ItemCartPrice= styled.h1`
font-size: 20px`


//Cart /Info Cart

const InfoCartContainer= styled.div`
width:50vh;
height: 60vh;
background-color: #00c853;
border-radius: 0px 30px 30px 0px;
border: 1px solid #E8E8E8;`

const InfoCartHeaderDiv= styled.div`
width: 100%;
height: 80px;
border-bottom: 1px solid #E8E8E8`

const InfoCartTittle= styled.h2`
font-size: 27px;
color: white;`

const InfoCartMainDiv= styled.div`
border-bottom: 1px solid #E8E8E8`

const InfoCartItems= styled.h2`
font-size: 23px;
color: white;`

const InfoCartTotalPrice= styled.h2`
font-size: 20px;
color: white;`

const InfoCartTotalPriceValue= styled.h2`
font-size: 20px;
color: white;`

const InfoCartItemsPrice= styled.p`
font-size: 17px;
color: white;`

const InfoCartItemsValue= styled.p`
font-size: 17px;
color: white;`


const InfoCartTax= styled.p`
font-size: 17px;
color: white;`

const InfoCartTaxValue= styled.p`
font-size: 17px;
color: white;`




export {
    ProductCard, NikeLogo, Image, Info, TittlePS, PricePS, PriceUSDPS, SubTittlePS, PSHover, ProductsContainer, ItemDetailDiv, DetailPhotoDiv, ItemDetailInfoDiv, DetailH2, DetailSubtittle, DetailStock, DetailBrand, DetailPrice, DetailPriceUSD, CartContainer, ItemCartContainer, InfoCartContainer, ItemCartTittle, ItemCartImage,ItemCartName, ItemCartType, ItemCartUnit, ItemCartPrice, ItemCartAmount, ItemCartHeaderDiv, ItemCartMainDiv, InfoCartHeaderDiv, InfoCartTittle, InfoCartMainDiv, InfoCartItems, InfoCartTotalPrice, InfoCartTax, InfoCartTaxValue, InfoCartTotalPriceValue,InfoCartItemsPrice, InfoCartItemsValue
}