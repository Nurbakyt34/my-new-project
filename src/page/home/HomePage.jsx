import React from 'react'
import Main from '../../components/main/Main'
import BestRewi from '../../components/best-rewi/BestRewi'
import BestProduct from '../../components/best-product/BestProduct'
import DizainBellon from '../../components/dizain-bellon/DizainBellon'
import AllProduct from '../../components/all-product/AllProduct'
// import VideoBellon from '../../components/video-dellon/VideoBellon'
import Test from '../../components/test/Test'

const HomePage = () => {
  return (
    <div>
        <Main/>
        <BestRewi/>
        <BestProduct/>
        <DizainBellon/>
        <AllProduct/>
        <Test/>
        {/* <VideoBellon/> */}
    </div>
  )
}

export default HomePage