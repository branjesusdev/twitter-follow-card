import TwitterFollowCard from './TwitterFollowCard.jsx'
import {UsersTwitter} from './usersTwitter.ts'

export default function App() {

    const formatUserName = (userName) => `@${userName}`
    return(

        <section className='app-root'>
            {
                UsersTwitter.map( ({ name, uidImg, userName, isFollowing }) => 
                    <TwitterFollowCard
                        key={userName}
                        formatUserName={formatUserName}
                        userName={userName}
                        name={name}
                        uidImg={uidImg}
                        inititalIsFollowing={isFollowing}/>

                )
            }

        </section>
    )
}