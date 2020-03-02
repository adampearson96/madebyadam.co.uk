import React from 'react';
import './GetInTouchHero.scss';

class GetInTouchHero extends React.Component {
  state = {
    name: "",
    email: ""
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name}, ${this.state.email}!`)
  }

  render() {
    return (
      <section id="get-in-touch-hero">
        <div class="outer-container">
          <h3>Get in touch</h3>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleInputChange} />
            </label>
            <label>
              Email
              <input
              type="email" 
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInputChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default GetInTouchHero;