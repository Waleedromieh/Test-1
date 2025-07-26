import { useEffect, useState } from "react"

export default function About() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [updatedId, setUpdatedId] = useState(null)
  const [updating, setupdating] = useState(false)
  const handleCreateProduct=()=>{
    if(updatedId==null){
 const newProduct={
      id:Date.now() ,
      name:name,
      price:price
    }
   
      setProducts([...products,newProduct])
    
    }else{
      const arr=[...products];
      console.log(arr);
    const productIndex=  arr.findIndex((product)=>product.id==updatedId)
      arr[productIndex]={
        id:arr[productIndex].id,
        name:name,
        price:price
      }
      setProducts(arr)
      setupdating(false)
    }
      setName('')
      setPrice('')
  }

  const handleDelete=(id)=>{
    // 5       1 2 3 4    5
    let x= products.filter((product)=>product.id!=id)
    setProducts(x)
  }



  const handleUpdate=(id)=>{
    setName(products.find((product)=>product.id==id).name)
    setPrice(products.find((product)=>product.id==id).price)
    setUpdatedId(id)
    setupdating(true)
  }

useEffect(() => {
    let x=0
    for( let i=0;i<products.length;i++){
      x+=products[i].price
    }
    setTotal(x)
  

 
}, [products])



  return (<>
  
    <section>
      <div className="container mt-5">
        <div className="bg-white shadow-lg p-5 rounded">
             <h1 className="text-center">Create New Product</h1>
          <h3 className="bg-danger w-25 text-center rounded text-white">Total : {total}</h3>
          <input type="text" className="form form-control my-2" placeholder="Enter Product Name..." value={name} onChange={(e)=>{setName(e.target.value)}} />
          <input type="number" className="form form-control my-2" placeholder="Enter Product Price..." value={price} onChange={(e)=>{setPrice(parseInt(e.target.value))}} />
          <button className={`btn btn-success ${updating?'bg-danger':'bg-success'} w-100`} onClick={handleCreateProduct}>{updating?'Update':'Create'}</button>
        </div>
      </div>
    </section>

    <section>
      <div className="container mt-5">
         <div className="bg-white shadow-lg p-5 rounded">
           <table className="table text-center table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product)=>{
                return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={()=>{handleDelete(product.id)}}>Delete</button>
                  <button className="btn btn-info mx-2" onClick={()=>{handleUpdate(product.id)}}>update</button>
                </td>
              </tr>
              })}
            </tbody>
          </table>
         </div>
      </div>
    </section>
  </>
  )
}
