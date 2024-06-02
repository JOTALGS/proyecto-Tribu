import React from 'react'
import PostInput from '@/components/CreatePost'
import OffCanvas from '@/components/OffCanvas'
import PostContainer from '@/components/PostContainer'

const page = () => {
  return (
    <div>
      <OffCanvas />
      <PostInput />
      <PostContainer />
      <p className='mx-auto p-8'>Start editing home page!</p>
    </div>
  )
}

export default page