import React from 'react'
import '../styles/Footer.scss'
import CsvDownload from 'react-json-to-csv'


/**
* @author Decory Herbert
* @function Footer
**/

const Footer = (props) => {  
  return(
    <div id='Footer_wrapper'>
        <CsvDownload 
        id='btn_bg'
        data={props.data}
        filename='Sapporo.csv'
        >
        Download .csv 
        </CsvDownload>
     
    </div>
   )

 }

export default Footer