import axios from "axios";
import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

// Class used to display available items
export default class AvailableItems extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        // retreives available item data from database
        axios.get(`api/test/tutorials`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    render() {
        let isFiltered = false;
        let filter = localStorage.getItem('filter')

        if (filter != 'null') {
            isFiltered = true;
        }
        else if (filter == 'null') {
            isFiltered = false;
        }

        return (
            <div>
                <div className="available">
                    {isFiltered == true && (
                        <h1>{filter}</h1>
                    )}
                    {isFiltered == false && (
                        <h1>All Available Items</h1>
                    )}
                </div>
                <ul className="grid_list">
                    {this.state.items.map(function (items, index) {
                        return (
                            <div>
                                {isFiltered == true && (
                                    <div key={index}>
                                        {items.category == filter && (
                                            <Card>
                                                <CardImg top width="100%" src={items.imageurl} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle tag="h4"><b>{items.title}</b></CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Category</CardSubtitle>
                                                    <CardText>{items.category}</CardText>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
                                                    <CardText>{items.location}</CardText>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Posted by</CardSubtitle>
                                                    <CardText>{items.username}</CardText>
                                                    <Link to={'/availableItems/' + items.id}
                                                        className="btn btn-primary">See Item</Link>
                                                </CardBody>
                                            </Card>
                                        )}
                                    </div>
                                )}
                                {isFiltered == false && (
                                    <div key={index}>
                                        <Card>
                                            <CardImg top width="100%" src={items.imageurl} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle tag="h4"><b>{items.title}</b></CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Category</CardSubtitle>
                                                <CardText>{items.category}</CardText>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
                                                <CardText>{items.location}</CardText>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Posted by</CardSubtitle>
                                                <CardText>{items.username}</CardText>
                                                <Link to={'/availableItems/' + items.id}
                                                    className="btn btn-primary">See Item</Link>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )}

                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        );
    }
}