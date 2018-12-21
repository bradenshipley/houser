import React, { Component } from "react"
import { connect } from "react-redux"
import { getHouses, deleteHouse } from "../ducks/reducer"
import { Link } from "react-router-dom"

class Dashboard extends Component {
  componentDidMount() {
    this.props.getHouses()
  }
  ComponentDidUpdate(prevProps, prevState) {
    if (prevProps.houses !== this.props.houses) {
      this.props.getHouses()
    }
  }
  deleteButton(id) {
    this.props.deleteHouse(id)
    this.props.getHouses()
  }

  render() {
    let house = this.props.houses.map(house => {
      return (
        <div key={house.id} className='oneHouse'>
          <div>{house.property_name}</div>
          <Link to={`/houses/${house.id}`}>
            <img className='houseImg' src={house.img} alt={house.name} />
          </Link>
          <div>{house.address}</div>
          <div>
            {house.city}, {house.state}
          </div>

          <div>{house.zip}</div>
          <div>Price: ${house.price}</div>
          <button
            className='delete'
            onClick={() => this.deleteButton(house.id)}
          >
            Delete
          </button>
        </div>
      )
    })

    return (
      <div>
        <div className='dashboardTop'>
          <div className='dashTitle'>Dashboard</div>
          <Link to='/wizard'>
            <button className='dashButton'>Add New Property</button>
          </Link>
        </div>
        <div> {house}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  const { houses } = state

  return { houses }
}

export default connect(
  mapStateToProps,
  { getHouses, deleteHouse }
)(Dashboard)
