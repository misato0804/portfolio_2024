import client from '@/lib/contentful/client'


const Blog = async() => {

  const res = await client.getEntries({
    content_type: 'post',
  });
  console.log(res.items[0].fields)
  
  return (
    <div>
      This is blog top
    </div>
  )
}

export default Blog
