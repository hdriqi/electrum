import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const data = {
  title: 'Bagaimana cara melakukan pendaftaran?',
  img: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quis auctor diam risus enim, fusce. Eros, cursus dignissim risus, risus pellentesque interdum placerat aliquet. Tellus eget sapien, in tempor sagittis. Id odio dictumst hac ut neque amet, adipiscing. Proin amet, nullam vulputate lectus tellus non ultricies vestibulum.',
  createdAt: new Date().getTime()
}

const Post = ({ footer }) => {
  return (
    <div className="bg-gray-100">
      <Nav footer={footer} />
      <div className="relative h-screen" style={{
        minHeight: `16rem`,
        maxHeight: `20rem`
      }}>
        <div className="absolute top-0 w-full h-full z-10" style={{
          backgroundImage: `url(${data.img})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`
        }}></div>
      </div>
      <div className="px-4 pb-16">
        <div className="max-w-3xl m-auto bg-white rounded-md p-4 lg:p-8 -mt-16 relative z-10">
          <h2 className="text-xl lg:text-4xl font-semibold">{data.title}</h2>
          <p className="mt-2">{new Date(Number(data.createdAt)).toLocaleString()}</p>
          <p className="mt-4">{data.body}</p>
        </div>
      </div>
      <Footer footer={footer} />
    </div>
  )
}

export default Post