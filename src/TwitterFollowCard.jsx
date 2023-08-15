import { useState } from 'react'

import './TwitterFollowCard.css'


function TwitterFollowCard( { formatUserName, userName , name, uidImg, inititalIsFollowing } ) {

  const [isFollowing, setIsFollowing] = useState(inititalIsFollowing)

  const imgSrc = `https://avatars.githubusercontent.com/u/${uidImg}?v=4`;
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const className = isFollowing ? 'tw-followCard-button tw-is--following' : ''

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  
  return (  
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={imgSrc} alt={`El avatar de ` + name} width="42" height="42"></img>
        <div>
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside className='tw-followCard-aside'>
        <button className={className} onClick={handleClick}>
          <span className='tw-followCard-button-text'>{text}</span>
          <span className='tw-followCard-button-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard