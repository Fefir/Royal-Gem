import { useEffect, useState } from 'react'
type TProduct= {
    nazwa: string
    img: string,
    cena: number,
    dostepnosc: string
    opis: string
}

function Product () {
const [productList, setProductList] = useState<Array<TProduct>>([])

useEffect(() => {
    fetch('http://localhost:3000/Products')
        .then(res => res.json())
        .then(data => setProductList(data))
}, [])

    return <>
        <div className='flex-col items-center justify-center'>  
            {/* container for product img and details */}
            {productList.map((product)=>
                    <>
                        <div className='flex items-center justify-center gap-8 pt-28'>
                            <div className='m-8 -translate-x-full'>
                                <img src={product.img}/>
                            </div>
                            <div className='m-8 -translate-x-full'>
                                <ul>
                                    <li>Nazwa: {product.nazwa}</li>
                                    <li>Cena: {product.cena}zł</li>
                                    <li>Dostępność: {product.dostepnosc}</li>
                                    <li>Opis: {product.opis}</li>
                                </ul>
                            </div>
                        </div>
                    </>
            )}
        </div>
    </>
}

export default Product