import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PWC_Badges() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <h2 className="w-full text-center">PwC course Badges</h2>
        <Link href={"https://pwc.tekstac.com/blocks/tekbadges/badge.php?id=21925"} >
          <Image src={'/img/certificates/cyber_security_certificate.png'} alt='cyber-security-certificate' width={300} height={300} />
        </Link>
    </div>
  )
}
