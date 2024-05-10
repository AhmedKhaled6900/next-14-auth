import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import getCategories from '@/data/get-categories'
import Image from 'next/image'
import React from 'react'

const CategoriesPage = async function() {
  const categories = await getCategories()
  console.log(categories)
  return (
    <Container>
      {
        categories.map((category) => (
          // {console.log(category.billboard)}

          <div key={category.id} className='my-20'>{category.name}
          <div>
            <Billboard data={category.billboard}/>

          </div>
          </div>
          
        ))
      }
    <div className='my-20'>CategpriesPage</div>
<div>
  
</div>
    </Container>
  )
}
export default CategoriesPage