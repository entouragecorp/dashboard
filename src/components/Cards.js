import React from 'react'
import '../styles/Card.scss'
import Loading from '../assets/load.gif'
import SapporoLogo from '../assets/logo-sapporo.png'

/**
* @author Decory Herbert
* @function Cards
**/

const Cards = (props) => {
    console.log(props.total)

    const card_list = [{name: 'Entourage Corp', total: props.total}]
    const card_num = [767]
    const submission = (data) =>{
        console.log(data)
    }
  return(
    <div id='card_wrapper'>
        {
            card_list.map((data, index)=>{
                return(
                    <div className='card' onClick={()=>{submission(index)}} key={index}>
                        <div id="title_w_img"><h2>{data.name}</h2></div>
                        {props.total === 0? <img style={{width: '6%', margin: '4px 0 4px 0'}}src={Loading} alt='' />: <span id='total'>{data.total}</span>}
                    </div>
                )
            })
        }
    </div>
   )

 }

export default Cards

// <img style={{width: '60px', height: '45px'}} src={SapporoLogo} alt=''/>