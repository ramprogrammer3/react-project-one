import React from 'react'
import Card from './Card'
import FoodName from './FoodName'

const Home = () => {
    let foodName = [
        {
            id : 1,
            name : "Samosa",
            url : "https://static.toiimg.com/photo/76425511.cms"
        },
        {
            id : 2,
            name : "Rasgulla",
            url : "https://www.akilaskitchen.com/wp-content/uploads/2020/05/Rava-rasgulla-sooji-rasgulla-3-500x375.jpg"
        },
        {
            id : 3,
            name : "Panipuri",
            url : "https://maunikagowardhan.co.uk/wp-content/uploads/2022/03/pani_puri_90458_16x9.jpeg"
        },
        {
            id : 4,
            name : "Burger",
            url : "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg"
        },
        {
            id : 5,
            name : "Chaat",
            url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilCZGktqFnUlVhgaFrf_Pyau89umNCbQyhA&usqp=CAU"
        }
    ]
  return (
    <section>
        <h2 style={{color : "#006", marginBottom : ".4rem", letterSpacing : "1px"}}>Top 5 Favourite Foods </h2>
        <ul>
            {
                foodName.map((item,i)=>{
                    return <FoodName item = {item} key = {i} />
                })
            }
        </ul>
        <div>
            {
                foodName.map((item,i)=>{
                    return <Card item={item} key = {i} />
                })
            }
        </div>
    </section>
  )
}

export default Home