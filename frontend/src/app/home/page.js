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
      <Footer />
    </div>
  )
}

export default page