import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Axios from 'axios'
import Head from 'next/head'
import htmlToText from 'html-to-text'

const Post = ({ post, metaDesc, footer }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>{post.title} | Rumah Belajar Electrum</title>
        <meta name="description" content={metaDesc} />

        <meta name='twitter:title' content={`${post.title} | Rumah Belajar Electrum`} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:description' content={metaDesc} />
        <meta name='twitter:image' content={post.img} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`${post.title} | Rumah Belajar Electrum`} />
        <meta property='og:site_name' content="Rumah Belajar Electrum" />
        <meta property='og:description' content={metaDesc} />
        <meta property='og:image' content={post.img} />
      </Head>
      <Nav footer={footer} />
      <div className="relative h-screen" style={{
        minHeight: `16rem`,
        maxHeight: `20rem`
      }}>
        <div className="absolute top-0 w-full h-full z-10" style={{
          backgroundImage: `url(${post.img})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`
        }}></div>
      </div>
      <div className="px-4 pb-16">
        <div className="max-w-3xl m-auto bg-white rounded-md p-4 lg:p-8 -mt-16 relative z-10">
          <h2 className="text-xl lg:text-4xl font-semibold">{post.title}</h2>
          <p className="mt-2">{new Date(post.createdAt).toLocaleString()}</p>
          <div dangerouslySetInnerHTML={{
            __html: post.body
          }} className="mt-4"></div>
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const news = await Axios.get(`${process.env.BASE_URL}/api/collections/news?_id=${context.query.id}`)

  return {
    props: {
      post: news.data.data[0],
      metaDesc: htmlToText.fromString(news.data.data[0].body, {
        ignoreHref: true,
        ignoreImage: true,
      })
    },
  }
}

export default Post