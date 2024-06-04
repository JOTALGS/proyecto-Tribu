import React from 'react'
import PostInput from '@/components/CreatePost'
import OffCanvas from '@/components/OffCanvas'
import PostContainer from '@/components/PostContainer'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <OffCanvas />
      <PostInput />
      <PostContainer />
      <p className='mx-auto p-8'>Start editing home page!</p>
      <Footer />
    </div>
  )
}

export default page