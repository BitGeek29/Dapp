import React, { Component } from "react";
import "../component_css/addCustomer.css";
import Header from "./header.js";
import db from "../helper/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import Web3 from "web3";
class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerAddress: null,
      name: null,
      location: null,
      category: null,
    };
    this.customerIdhandler = this.customerIdhandler.bind(this);
    this.customerNameHandler = this.customerNameHandler.bind(this);
    this.customerLocationHandler = this.customerLocationHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.customerCategoryHandler = this.customerCategoryHandler.bind(this);
  }

  customerIdhandler(event) {
    event.preventDefault();
    this.setState({
      customerAddress: event.target.value,
    });
  }

  customerNameHandler(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value,
    });
  }
  customerLocationHandler(event) {
    event.preventDefault();
    this.setState({
      location: event.target.value,
    });
  }
  async customerCategoryHandler(event) {
    event.preventDefault();
    await this.setState({
      category: event.target.value,
    });
    console.log(this.state.category);
  }

  async onSubmit() {
    const Subsidy = new window.web3.eth.Contract(
      this.props.AbiAndAdd.abi,
      this.props.AbiAndAdd.add
    );
    console.log(Subsidy);
    console.log(this.props.account, this.state.name);
    await Subsidy.methods
      .addShopkeeper(
        this.state.customerAddress,
        this.state.name,
      )
      .send({ from: this.props.account }, (err, hash) => {
        if (err) {
          alert("Not a Admin");
        } else {
          alert("Success!");
        }
      });
  }

  render() {
    return (
      <div>
        <div>
          <Header activeSection="admin" admin={this.props.admin} />
          <br></br>
          <br></br>
          <br></br>

          <div className="form-group" id="customerIdSection">
            <input
              id="customerId"
              onChange={this.customerNameHandler}
              type="text"
              value={this.state.name}
              className="form-control"
              placeholder="Enter Shopkeeper's name"
            />
            <br></br>
            <input
              id="customerId"
              onChange={this.customerIdhandler}
              type="text"
              value={this.state.customerAddress}
              className="form-control"
              placeholder="Enter Shopkeeper's Blockchain ID"
            />
          </div>
          <br></br>
          <br></br>

          <div id="addcustomerButtonSection">
            <button
              className="btn  btn-block"
              id="addcustomerButton"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCustomer;

