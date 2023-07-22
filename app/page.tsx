import { nanoid } from '@/lib/utils'
import Spotlight from '@/components/spotlight';
import SocialModal from '@/components/social-modal';

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    <div className="flex-row justify-around align-middle">
            <SocialModal socialInfos={[]} avatars={[]}/>

      <Spotlight />

    </div>
  )
}
