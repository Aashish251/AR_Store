/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react'
import DefaultLayout from '../component/Defaultlayout'
import axios from 'axios'   
import { Col,Row } from 'antd'
import Items from 'antd/lib/list/items' 
function Homepage() {

    const   [itemData ,setItemsData] = useState([])

    function getAllItems() {

        axios.get('/api/items/get-all-items').then((response) => {
            setItemsData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(()=>{
        getAllItems()
    },[]);



    return (
        <DefaultLayout>
            <Row>
            {itemData.map((Item)=>{
               return   <Col spam={6}>
                   <Item Item={Item}/>
               </Col>
            })}
            </Row>
           
        </DefaultLayout>
        
    )
}

export default Homepage
