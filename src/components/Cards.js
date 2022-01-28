import React from 'react'
import '../styles/Card.scss'
import Loading from '../assets/load.gif'
import SapporoLogo from '../assets/logo-sapporo.png'
import { Link } from 'react-router-dom'

/**
* @author Decory Herbert
* @function Cards
**/

const Cards = (props) => {

    const card_list = [
      {name: 'Blood Orange', total: props.id === 0?props.total:''},
      {name: 'Sweet & Sour', total: props.id === 1?props.total:''},
      {name: 'Watermelon', total: props.id === 2?props.total:''},
      {name: 'Mango Haze', total: props.id === 3?props.total:''},
      {name: 'Space Cake', total: props.id === 4?props.total:''}
    ]
    const card_num = [767]



  return(
    <div id='card_wrapper'>
        {
            card_list.map((data, index)=>{
                return(
                    <div className='card' onClick={()=>{props.submit(index)}} key={index}>
                        <div id="title_w_img"><h2>{data.name}</h2></div>
                        {props.total === 0? 'View Data' : <span id='total'>{data.total}</span>}
                    </div>
                )
            })
        }
    </div>
   )

 }

export default Cards

// <img style={{width: '60px', height: '45px'}} src={SapporoLogo} alt=''/>-m
{/* <img style={{width: '6%', margin: '4px 0 4px 0'}}src={Loading} alt='' /> */}