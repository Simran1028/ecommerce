import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'

const Home = () => {

    return (
        <Layout>
            <HeroSection/>
            <Filter/>
            <ProductCard/>
        </Layout>

    )
}

export default Home
