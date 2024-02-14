import Background from '@/components/background/Background'
import BgImages from '@/components/home/BgImages'
import Content from '@/components/home/intro/Content'
import ProfilePic from '@/components/home/intro/ProfilePic'
import MaxWidthWrapper from '@/components/wrappers/MaxWidthWrapper'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <Background />
      <main className='min-h-[80vh] md:min-h-[60vh] lg:min-h-[70vh] mx-auto flex flex-col md:justify-center items-center gap-5 md:gap-10'>
        <BgImages />
        <ProfilePic />
        <Content />
      </main>
    </MaxWidthWrapper>
  )
}
