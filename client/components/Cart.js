import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import store from '../store/index'
import {getCartItems} from '../store/index'
import {removeCartItem} from '../store/index'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getCartItems()
  }

  handleClick(e) {
    e.preventDefault()
    this.props.removeCartItem(e.target.value)
  }

  render() {
    let items = this.props.items

    return (
      <div id="cart">
        <h2>Your Cart:</h2>
        <div id="all-beads">
          {this.props.items.map(item => (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button
                  variant="primary"
                  value={item.id}
                  onClick={this.handleClick}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  items: state.item
})

const mapDispatchToProps = dispatch => {
  return {
    getCartItems: () => dispatch(getCartItems()),
    removeCartItem: id => dispatch(removeCartItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
