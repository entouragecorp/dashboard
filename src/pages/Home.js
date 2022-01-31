import React, { useEffect, useMemo, useState } from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import '../styles/Main.scss'

/**
* @author Decory Herbert
* @function Home
**/

const Home = (props) => {
    const data_from_db = []
    const data_list = []
    const [dataCheck, setDataCheck] = useState([])
    const [csv, setCsv] = useState([])
    const [length, setLength] = useState(0)
    var i
    const [id, setId] = useState(null)

    useEffect(()=>{
    },[])

const submit = (link) => {
    setId(link)
    const links = [
      'https://bottlecapdev.pythonanywhere.com/return_bloodorange_status',
      'https://bottlecapdev.pythonanywhere.com/return_sweetsour_status',
      'https://bottlecapdev.pythonanywhere.com/return_watermelon_status',
      'https://bottlecapdev.pythonanywhere.com/return_mango_status',
      'https://bottlecapdev.pythonanywhere.com/return_spacecake_status'
    ]
    fetch(links[link],{
        method: 'GET',
        headers: {'Content-Type': 'application/json',}
    }).then(response => response.json())
    .then((resp)=>{
        for(i=0; i<resp.data.length; i++){
            data_from_db.push({'name': resp.data[i].fullname, 'province': resp.data[i].province, 'email': resp.data[i].email, 'points': resp.data[i].points, 'store': resp.data[i].store, 'dob': resp.data[i].dob})
            data_list.push({'name': resp.data[i].fullname, 'province': resp.data[i].province, 'email': resp.data[i].email, 'points': resp.data[i].points, 'store': resp.data[i].store, 'dob': resp.data[i].dob})
            setDataCheck(data_from_db)
            setCsv(data_list)
        }
        setLength(resp.data.length)
    })
}


  return(
    <div id='dash_Home'>
        <SideBar />
        <div id='content_holder'>
            <Header />
            <div id='content_wrapper'>
            <Cards submit={submit} id={id} total={length}/>


            <div id='table_content'>
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>store</th>
                    <th>province</th>
                    <th>email</th>
                    {/* <th>Tel</th> */}
                    <th>Points</th>
                    <th>D.O.B</th>
                    {/* <th>Ballots</th> */}
                </tr>
                </tbody>
                <tbody>
                {
                         dataCheck.map((data, index) =>{
                            return(
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.store}</td>
                                    <td>{data.province}</td>
                                    <td>{data.email}</td>
                                    {/* <td>{data.tel}</td> */}
                                    <td>{data.points}</td>
                                    <td>{data.dob}</td>
                                    {/* <td>{data.ballots}</td> */}

                                </tr>

                            )
                        })
                }

                </tbody>


            </table>
            </div>
            <Footer data={csv}/>

            </div>

        </div>

    </div>
   )

 }

export default Home;


// useEffect(()=>{
//     fetch('https://bottlecapdev.pythonanywhere.com/return_bloodorange_status',{
//         method: 'GET',
//         headers: {'Content-Type': 'application/json',}
//     }).then(response => response.json())
//     .then((resp)=>{
//         for(i=0; i<resp.id.length; i++){
//             data_from_db.push({'id':resp.id[i], 'name': resp.name[i], 'address': resp.address[i], 'province': resp.province[1], 'email': resp.email[i], 'tel': resp.tel[i], 'points': resp.points[i], 'prize': resp.prize[i], 'ballots': resp.ballots[i]})
//             data_list.push({'name': resp.name[i], 'address': resp.address[i], 'province': resp.province[i],'postal': resp.postal[i], 'prizing': resp.prize[i]})
//             setDataCheck(data_from_db)
//             setCsv(data_list)
//         }
//         setLength(resp.id.length)
//     })

// },[])