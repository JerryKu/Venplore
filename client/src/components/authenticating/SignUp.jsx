import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    const section = e.target.name;
    const value = e.target.value;
    this.setState({
      [section]: value,
    })
  }

  handleClick(e){
    axios.post('/signup', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      console.log('signup response', res);
    }).catch((error) => {
      console.log('error from signup', error);
    })
  }

  render(){
    return (
      <div className='row-2' >
        <form>
          Email: <input name='email' type='text' onChange={this.handleChange}/>
          Password: <input name='password' type='password' onChange={this.handleChange} />
        </form>
        <button onClick={this.handleClick}>
          Sign Up
        </button>
      </div>
    )
  }
}

export default SignUp;