import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const top = () => {
  const router = useRouter();
  const logout = () => {
      router.push("/");
  }

  return (
      <>
        <div>
            <ul>
                <li>
                    <Link href="/article">
                        <a>
                            article page
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/task">
                        <a>
                            task
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
      </>
  )
}


export default top;