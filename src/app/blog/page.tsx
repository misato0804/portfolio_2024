import client from '@/lib/contentful/client'

const Blog = async () => {

  if (client) {

    const res = await client.getEntries({
      content_type: 'post',
    });

  } else return

  return (
    <div>
      This is blog top
    </div>
  )
}

export default Blog
