import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { auth } from '@/auth'
import { getChat } from '@/app/actions'
import { KGraph } from '@/components/kgraph'
import SocialModal from '@/components/social-modal'

export interface KGraphPageProps {
  params: {
    id: string
  }
}

export default async function KGraphPage({ params }: KGraphPageProps) {
  return (

<>
  <KGraph />
    </>
  )
}
