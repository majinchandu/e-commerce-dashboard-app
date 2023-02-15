import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function ProductList() {

  const [products, setproducts] = useState([])
  useEffect(() => {
    getProducts();// isko useeffect me isliye daala hai taaki hum isse dekhe jase hi page reload aur na hi humare pass koi button th jisse onClick karke get Products wala function chal jaae to function page load hote hi apne aap chale isliye usse useEffect me daala hai
  }, [])

  async function getProducts() {
    let result6 = await fetch('http://localhost:5000/products');// jo jo saare product list hai isme empty array me store honge 
    result6 = await result6.json();// converted to json
    setproducts(result6);  // setted inside the empty array
    console.log(products);
  }
  async function deleteProduct(id) { //* ye id paramter ki tarah aayegi jahan call hua hai
    let result8 = await fetch(`http://localhost:5000/products/${id}`, { // delete wali api ko call kar rhe hai backend se 
      method: "DELETE"// delete kar rhe hai to method delete hoga
    });
    result8 = await result8.json() // converting to json  
    if (result8) { // agar ache se delete hogya hai to chalao
      getProducts(); // jase hi delete hojae to  wo ekdum se uss data ko hatado screen pe se isliye function getproducts call kar rhe hai jisse data jaldi se firse fetch ho aur wo data chala jaaye 
    }
  }

  async function handleSearch(event) {
    let key = event.target.value; // key ki value le rhe hai j search bar ,me aayegi
    if (key) { // agar search field me koi value hai to ye niche wala function chalado
      let result13 = await fetch(`http://localhost:5000/search/${key}`); // api hit kar rha hu 
      result13 = await result13.json();
      if (result13) {
        setproducts(result13); // set producs wo rakh do ya screen pe wo dikhado jo  search hua hai 
      }
    } else {
      getProducts(); // agar search field empty hai to saare products dikhaado
    }
  }

  return (
    <div className='product-list'>
      <h3>ProductList</h3>
      <input type='text' placeholder='Search product' className='search-product-box' onChange={handleSearch} />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>
      {
        products.length >0 ?  products.map((item, index) => // agar koi ek bhi product hai to chalao
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={`/update/${item._id}`}>Update</Link>{/* id is given as a parameter of which product to be updated */}
            </li> {/* item._id ko delete kar rhe hai jo product ki id hogi  */}
          </ul>
        )
        :
        <h1>No products found</h1> // agar search karte waqt koi aisi string daaldi jo mil nhi rhi products me to ye show kardo
      }
    </div>
  )
}
