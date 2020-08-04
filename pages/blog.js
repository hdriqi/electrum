import Nav from '../components/Nav'
import Footer from '../components/Footer'

const posts = [
  {
    title: 'Bagaimana cara melakukan pendaftaran?',
    img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quis auctor diam risus enim, fusce. Eros, cursus dignissim risus, risus pellentesque interdum placerat aliquet. Tellus eget sapien, in tempor sagittis. Id odio dictumst hac ut neque amet, adipiscing. Proin amet, nullam vulputate lectus tellus non ultricies vestibulum.',
    createdAt: new Date().getTime()
  },
  {
    title: 'Bagaimana cara melakukan pendaftaran?',
    img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quis auctor diam risus enim, fusce. Eros, cursus dignissim risus, risus pellentesque interdum placerat aliquet. Tellus eget sapien, in tempor sagittis. Id odio dictumst hac ut neque amet, adipiscing. Proin amet, nullam vulputate lectus tellus non ultricies vestibulum.',
    createdAt: new Date().getTime()
  },
  {
    title: 'Bagaimana cara melakukan pendaftaran?',
    img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quis auctor diam risus enim, fusce. Eros, cursus dignissim risus, risus pellentesque interdum placerat aliquet. Tellus eget sapien, in tempor sagittis. Id odio dictumst hac ut neque amet, adipiscing. Proin amet, nullam vulputate lectus tellus non ultricies vestibulum.',
    createdAt: new Date().getTime()
  },
  {
    title: 'Bagaimana cara melakukan pendaftaran?',
    img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quis auctor diam risus enim, fusce. Eros, cursus dignissim risus, risus pellentesque interdum placerat aliquet. Tellus eget sapien, in tempor sagittis. Id odio dictumst hac ut neque amet, adipiscing. Proin amet, nullam vulputate lectus tellus non ultricies vestibulum.',
    createdAt: new Date().getTime()
  },
  {
    title: 'Bagaimana cara melakukan pendaftaran?',
    img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quis auctor diam risus enim, fusce. Eros, cursus dignissim risus, risus pellentesque interdum placerat aliquet. Tellus eget sapien, in tempor sagittis. Id odio dictumst hac ut neque amet, adipiscing. Proin amet, nullam vulputate lectus tellus non ultricies vestibulum.',
    createdAt: new Date().getTime()
  }
]

const PostItem = ({ post }) => {
  return (
    <div className="w-full lg:w-1/3 px-3 overflow-hidden mt-6" style={{
      height: `400px`
    }}>
      <div>
        <img src={post.img} className="w-full h-48 object-cover rounded-md" />
        <div className="mt-3 overflow-hidden">
          <h4 className="text-lg font-semibold" style={{
            maxHeight: `54px`
          }}>{post.title}</h4>
        </div>
        <div className="overflow-hidden mt-2" style={{
          maxHeight: `72px`
        }}>
          <p>{post.body}</p>
        </div>
        <div className="mt-2">
          <p>{new Date(Number(post.createdAt)).toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <div>
      <Nav />
      <div className="relative">
        <div className="absolute inset-0 w-full bg-primary-green z-10"></div>
        <div className="max-w-3xl m-auto px-3 py-16 relative z-10">
          <h2 className="text-3xl text-white text-center font-bold">Berita Terbaru</h2>
        </div>
      </div>
      <div className="max-w-5xl m-auto px-4 py-16">
        <div className="flex flex-wrap -mx-3">
          {
            posts.map(post => {
              return (
                <PostItem post={post} />
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog