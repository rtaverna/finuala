import React from 'react'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {getItems} from '../store/item'
// import img1 from './IMG_0449.jpeg';
// import img2 from './IMG_0452.jpeg';
// import img3 from './IMG_0453.jpeg';
// import img4 from './IMG_0454.jpeg';
import store from '../store'
// import Cart from './Cart';
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";

class All extends React.Component {
  constructor() {
    super()

    this.state = store.getState()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getItems()
  }

  handleClick(e) {
    console.log(e.target.value)
    // this.props.addToCart(e.target.value)
  }

  render() {
    return (
      <div>
        <h2>All Beads</h2>

        <div id="all-beads">
          {this.props.items.map(item => (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" onClick={this.handleClick}>
                  Add to Cart
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

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(All)
