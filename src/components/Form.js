import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <input type="text" name='firstName' onChange={e => this.props.handleChange(e)} value={this.props.formData.firstName} />
          <input type="text" name='lastName' onChange={e => this.props.handleChange(e)} value={this.props.formData.lastName} />
          <input type="submit"/>
        </form>
        {this.props.listOfSubmissions()}
      </div>
    )
  }
}