import React from 'react'

import PostCardlist from './PostCardlist'
import LeftContent from './LeftContent'

function ContentPost({sign}) {
  return (
    <div className='content-post'>
        <div className="content-left">
            <PostCardlist/>
        </div>
        <div className='content-right'>
            <LeftContent sign={sign}/>
        </div>
      
    </div>
  )
}

export default ContentPost
