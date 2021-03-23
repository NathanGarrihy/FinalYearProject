import React, { Component } from "react";
import axios from "axios";
import MyAvailableItem from "./myAvailableItem.component";

export default class MyAvailable extends Component {
    state = {
        items: []
    }
    
    componentDidMount() {
        axios.get(`api/test/tutorials`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
        localStorage.getItem('user');
    }

    render() {
        let isLoggedIn = false;

        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');

        if (myToken && myUser != null) {
            isLoggedIn = true;
        }

        return this.state.items.map((item) => {
            return <MyAvailableItem item={item} />
        })

    }
}