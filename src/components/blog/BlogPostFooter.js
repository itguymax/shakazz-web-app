import React from 'react'

function BlogFooter({authorInfo}) {
  
  return (
    <div style={{display: 'flex'}}>
      <div
        style={{
          paddingRight: 20,
          marginBottom: 40,
        }}
      >
        <img
          src={authorInfo.avatar.url}
          alt="itguymax"
          style={{
            maxWidth: 80,
            borderRadius: '50%',
          }}
        />
      </div>
      <p>
        <strong>{authorInfo.nickname}</strong>
        {authorInfo.description && <p>{authorInfo.description}</p>}
      </p>
    </div>
  )
}

export default BlogFooter
