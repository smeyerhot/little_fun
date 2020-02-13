import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

<Switch>
    <Route path='/home' component={HomePage} />
    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
    <Route path='/menu/:dishId' component={DishWithId} />
    <Route exact path='/contactus' component={Contact} />} />
    <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
    <Redirect to="/home" />
</Switch>