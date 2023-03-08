import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <div>
                <p>Welcome to the site.</p>
                <ol>
                    <li>Confirm your email</li>
                    <li>Complete your profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
                <button onClick={props.handleSignOut}>Sign Out</button>
            </div>
        ) : (
            <div>
                <p>Please sign in.</p>
                <button onClick={props.handleSignIn}>Sign In</button>
            </div>
        )}
    </div>
  )
}

export default UserMessage