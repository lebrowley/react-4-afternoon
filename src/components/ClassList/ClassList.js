import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({students: res.data})
      // console.log(res.data)
    })
    .catch(res => console.log('error getting class info'))
  }
  render() {
    const students= this.state.students.map((student, i) => (  //why is it parentheses here? isn't it usually curly braces? 
      <Link to={`/student/${student.id}`} key={i}>
        <h3>
          {student.first_name} {student.last_name}
        </h3>
      </Link>
    ))

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}      {/*how is it we can just drop this info here? what about styling? if we wanted to target it with styling, we would need to wrap it in a div or some sort of tag, right?? make it a full element? */}
      </div>
    )
  }
};