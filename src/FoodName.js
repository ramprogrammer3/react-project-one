
import './foodname.css'

const FoodName = (props) => {
  return (
    <li><a href= {`/#${props.item.name}`}>  {props.item.name}</a> </li>
  )
}

export default FoodName