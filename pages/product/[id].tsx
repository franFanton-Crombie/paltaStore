import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {
    query: { id },
  } = useRouter()
  const [detailProduct, setDetailProduct] = useState<TProduct>()
  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setDetailProduct(data))
    }
  }, [id])
  return (
    <section>
      <h1>Página producto: {id}</h1>
      <div>{detailProduct?.name}</div>
      <div>{detailProduct?.price}</div>
    </section>
  )
}

export default ProductPage
