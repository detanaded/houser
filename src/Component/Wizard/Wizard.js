import React, {Component} from 'react'



class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      property: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
  
    }  
   

    
    render(){
      return(
        <div className='Wizard'>
          <input className='property' type="text" placeholder="Property Name"></input>
          <input className='address' type='text' placeholder="Address"></input>
          <input className='city' type='text' placeholder='City'></input>
          <input className='zip' type='text' placeholder='Zip'></input>
          
        </div>
      )
    }


  }  

export default Wizard