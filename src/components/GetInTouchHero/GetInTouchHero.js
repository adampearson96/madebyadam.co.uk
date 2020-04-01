import React from 'react';
import './GetInTouchHero.scss';

class GetInTouchHero extends React.Component {
  // state = {
  //   name: "",
  //   email: ""
  // }

  // // handleInputChange = event => {
  // //   const target = event.target
  // //   const value = target.value
  // //   const name = target.name
  // //   this.setState({
  // //     [name]: value,
  // //   })
  // // }

  // // handleSubmit = event => {
  // //   event.preventDefault()
  // //   alert(`Welcome ${this.state.name}, ${this.state.email}!`)
  // // }

  render() {
    return (
      <section id="get-in-touch-hero">
        <div className="outer-container">
          <h3>Get in touch</h3>
          <form 
            method="POST" 
            name="contact" 
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="name" />
            </label>
            <label>
              Email
              <input
              type="email" 
              name="email"
              placeholder="email" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default GetInTouchHero;