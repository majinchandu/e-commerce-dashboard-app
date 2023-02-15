import React,{useState} from 'react'

export default function Addproduct() {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [company, setcompany] = useState("")
    const [error, seterror] = useState(false)

    async function addProduct() {

        console.log(!name); // returns true if name field is empty and returns false if there is some input  
        if (!name || !price || !category || !company ) { // agar charo me se koi ek field bhi empty hua to ye chalado

            seterror(true); // error ko true kardo
            return false; // false return hojaega aur iss function ke neeche wala code nh chalega
        }

        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id; // uss wale user ki userid lenge jisse login hai kyunki usse identify rehta hai ki kon product konsa user add kar rha hai
        let resultttt = await fetch('http://localhost:5000/add-product',{ 
            method:'POST',
            body: JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        resultttt = await resultttt.json();
        console.warn(resultttt)
    }

    return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type="text" className='inputBox'value={name} placeholder='enter product name' onChange={(e)=>{setname(e.target.value)}} />
        {error && !name && <span className = 'invalid-input'>Enter valid name</span>} {/* agar error true hai name me to  to dikhao */}
        
        <input type="text" className='inputBox' value={price} placeholder='enter product price' onChange={(e)=>{setprice(e.target.value)}} />
        {error && !price && <span className = 'invalid-input'>Enter valid price</span>} {/* agar error true hai price me  to dikhao */}
        
        <input type="text" className='inputBox' value={category} placeholder='enter product category'onChange={(e)=>{setcategory(e.target.value)}} />
        {error && !category &&  <span className = 'invalid-input'>Enter valid category</span>} {/* agar error true hai category me to dikhao */}
        
        <input type="text" className='inputBox' value={company} placeholder='enter product company'onChange={(e)=>{setcompany(e.target.value)}} />
        {error && !company && <span className = 'invalid-input'>Enter valid company</span>} {/* agar error true hai company me to dikhao */}
        
        <button className='appbutton' onClick={addProduct}>Add Product</button>
    </div>
  )
}
