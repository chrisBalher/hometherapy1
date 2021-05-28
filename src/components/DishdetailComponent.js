import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Col} from 'reactstrap';
import {ListGroup} from 'reactstrap';



class DishDetail extends Component{

    constructor(props) {
        super(props);
    }

    renderDish(dish){
        return (
            <Card key={dish.id}>
                 <CardImg width="100%" src={dish.image}  alt={dish.name} />
                 <CardBody>
                     <CardTitle>{dish.name}</CardTitle>
                     <CardText>{dish.description}</CardText>
                 </CardBody>
            </Card>
        )
   }

   renderComments(dish){

        if(dish.comments != null)
        {
            const comments=dish.comments.map((eachItem)=>{
                return(
                     <div>
                         <ul>{eachItem.comment}</ul>
                         <ul> -- {eachItem.author} ,
                                 {new Date(eachItem.date).toLocaleDateString('en-US',
                                 {year: 'numeric', month: 'long', day: 'numeric' })}
                         </ul>
                         <br/>
                     </div>
                );
              }
            );

            return(
                <ListGroup type="unstyled">
                    <ul><h4>Comments</h4></ul>
                    {comments}
                </ListGroup>
            );
        }
        else{
            return(
                <div></div>
            );

        }
   }

    render() {
        return(
            <div className="container">
                <div className = "row">
                    <Col className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </Col>
                    <Col className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </Col>
                </div>
            </div>
        )
    };
};

export default DishDetail;