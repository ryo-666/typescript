import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Cookie from "universal-cookie";


const cookie = new Cookie();

const top = () => {
    const router = useRouter();
    const logout = () => {
      cookie.remove("access_token");
      router.push("/");
    };

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