import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PWC_Badges() {
  return (
    <div className=''>
        <h2 className="">PwC course Badges</h2>
        <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=11509"} >
          <Image src={'/img/certificates/cyber_security_certificate.png'} alt='cyber-security-certificate' width={300} height={300} />
        </Link>
    </div>
  )
}
