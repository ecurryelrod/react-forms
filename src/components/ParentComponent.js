import React, {Component} from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
    state = {
        firstName: "John",
        lastName: "Henry",
        submittedData: []
      }

      handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
          })
      }
    
    //   handleFirstNameChange = e => {
    //     this.setState({
    //       firstName: e.target.value
    //     })
    //   }
    
    //   handleLastNameChange = e => {
    //     this.setState({
    //       lastName: e.target.value
    //     })
    //   }
    
      handleSubmit = (e) => {
        e.preventDefault()
        let formData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray})
      }
    
      listOfSubmissions = () => {
        return this.state.submittedData.map((data, idx) => {
          return (
            <div key={idx}>
              <span>{data.firstName}</span>
              <span>{data.lastName}</span>
            </div>
          )
        })
      }
    
    
    render() {
        return (
            <div>
                <Form formData={this.state} 
                // handleFirstNameChange={this.handleFirstNameChange}
                // handleLastNameChange={this.handleLastNameChange} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                listOfSubmissions={this.listOfSubmissions} />
            
                <DisplayData formData={this.state}/>
            </div>
        )
    }
}