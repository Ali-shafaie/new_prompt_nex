
import Feed from "@components/Feed"

function Home () {
  return (
    <section className='w-full flex-col flex-center'>
<h1 className='head_text text-center'>
  Discover and Share
<br  className='max-md:hidden'/>
<span className='orange_gradient text-center'>AI Powered Prompts</span>
</h1>
<p className='desc text-center'>This is some text about this page to describe the hole page</p>
<Feed/>
    </section>
  )
}

export default Home 