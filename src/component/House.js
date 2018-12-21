import React from "react"
import { deleteHouse } from "../ducks/reducer"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

function House(props) {
  console.log(props.match.params)
  let oneHouse = props.houses

    .filter(item => item.id == props.match.params.id)

    .map(house => (
      <div key={house.id} className='singleHouseContainer'>
        <div>{house.name}</div>
        <img src={house.img} alt={house.name} />
        <div>{house.address}</div>
        <div>
          {house.city}, {house.state}
        </div>

        <div>{house.zip}</div>
        <div>
          Mortgage: ${house.mortgage} Rent: ${house.rent}
        </div>
        <Link to='/'>
          <button>Back</button>
          <button onClick={() => props.deleteHouse(house.id)}>Delete</button>
        </Link>
      </div>
    ))
  return <div>{oneHouse}</div>
}

function mapStateToProps(state) {
  const { houses } = state
  return {
    houses
  }
}

export default connect(
  mapStateToProps,
  { deleteHouse }
)(House)
