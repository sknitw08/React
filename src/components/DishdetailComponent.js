import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

const RenderComments = ({comments}) => {
  if (comments != null) {
    let options = { year: "numeric", month: "short", day: "numeric" };
    return comments.map(comment => (
      <ul key={comment.id} className="list-unstyled">
        <li className="mb-2">{comment.comment}</li>
        <li>
          -- {comment.author} ,{" "}
          {new Date(comment.date).toLocaleDateString("en-US", options)}
        </li>
      </ul>
    ));
  } else return (<div></div>);
}

const RenderDish = ({dish}) => {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}
const DishdetailComponent = ({dish, comments}) => {

      if (dish != null) {
        return (
          <div class = "container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{dish.name}</h3>
                <hr />
              </div>                
            </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={dish}/>
              </div>
              <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments comments = {comments} />
              </div>
            </div>
          </div>
        );
      } else {
        return (<div></div>)
      }
  }
  
  export default DishdetailComponent;