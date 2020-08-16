import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'
import Axios from 'axios'
import htmlToText from 'html-to-text'
import Head from 'next/head'

const PostItem = ({ post }) => {
  return (
    <div className="w-full lg:w-1/3 px-3 overflow-hidden mt-6" style={{
      height: `400px`
    }}>
      <Link href="/blog/[id]" as={`/blog/${post._id}`}>
        <div className="cursor-pointer">
          <img src={post.img} className="w-full h-48 object-cover rounded-md" />
          <div className="mt-3 overflow-hidden">
            <h4 className="text-lg font-semibold" style={{
              maxHeight: `54px`
            }}>{post.title}</h4>
          </div>
          <div className="overflow-hidden mt-2" style={{
            maxHeight: `72px`
          }}>
            <p>{htmlToText.fromString(post.body, {
              ignoreHref: true,
              ignoreImage: true,
            })}</p>
          </div>
          <div className="mt-2">
            <p>{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

const Blog = ({ news, footer }) => {
  return (
    <div>
      <Head>
        <title>Berita dan Event | Rumah Belajar Electrum</title>
        <meta name="description" content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />

        <meta name='twitter:title' content="Berita dan Event | Rumah Belajar Electrum" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta name='twitter:image' content="/favicon.ico" />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Berita dan Event | Rumah Belajar Electrum" />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content="Yuk belajar di Electrum, banyak tutor tutor ramah dan berpengalaman dari perguruan tinggi pilihan yang akan memandu kamu belajar dari konsep dasar sampai menguasai materi. Pilih waktu belajar yang paling kamu suka dan ajak teman-temanmu belajar bareng. Hasil belajarmu selama di electrum bisa kamu lihat lho udah sampe mana tahap penguasaan materimu. Tutor-tutor kami akan memastikan kamu paham sama materi yang kamu pelajari!" />
        <meta property='og:image' content="/favicon.ico" />
      </Head>
      <Nav footer={footer} />
      <div className="relative">
        <div className="absolute inset-0 w-full bg-primary-green z-10"></div>
        <div className="max-w-3xl m-auto px-3 py-16 relative z-10">
          <h2 className="text-3xl text-white text-center font-bold">Berita Terbaru</h2>
        </div>
      </div>
      <div className="max-w-5xl m-auto px-4 py-16">
        <div className="flex flex-wrap -mx-3">
          {
            news.map(post => {
              return (
                <PostItem post={post} />
              )
            })
          }
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const news = await Axios.get(`${process.env.BASE_URL}/api/collections/news`)

  return {
    props: {
      news: news.data.data
    },
  }
}

export default Blog