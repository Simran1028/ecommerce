import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../../track/Track'

const Home = () => {

    return (
        <Layout>
            <HeroSection/>
            <Filter/>
            <ProductCard/>
            <Track/>
        </Layout>

    )
}

export default Home
