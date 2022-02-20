import { useRouter } from 'next/router'
import React from 'react'

const Auth = () => {
  const router = useRouter();

  const login = () => {
      try {
        
        router.push("/top")

      } catch (err) {
          alert(err);
      }
  }

  return (
    <>
        <div>
            <button onClick={() => login()}>button</button>
        </div>
    </>
  )
}


export default Auth