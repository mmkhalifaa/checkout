import React, { PropTypes } from "react";
import { Col, Thumbnail } from "react-bootstrap";
import moment from "moment";
import "../../style/main.scss";


const Comment = ({ Message, Name, Rating }) => (

    <Col xs={6} md={4}>
        <Thumbnail className="comment">
            <h2>{Message}</h2>
            <h2>Rating: {Rating}</h2>
            <h3>By {Name} </h3>
            <p>Last updated: {moment.unix((new Date).getTime()).format("dddd, MMMM Do, YYYY h:mm:ss A")}
            </p> 
        </Thumbnail>
    </Col>
);

Comment.propTypes = {
  Message: React.PropTypes.string,
  Name: React.PropTypes.string,
  Rating: React.PropTypes.number,
};


export default Comment;

