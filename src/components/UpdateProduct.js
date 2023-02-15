import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
export default function Updateproduct() {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [category, setcategory] = useState("")
    const [company, setcompany] = useState("")
    const navigate = useNavigate();
    const params = useParams(); // used to extract parameters from url to code ,, abhi params me pure product ka data hai jiski id pass ki gyi hai


    useEffect(() => {
        getProductDetails(); // page reload hote hi hona chahiye 
    }, [])

    async function getProductDetails() {
        let result9 = await fetch(`http://localhost:5000/products/${params.id}`);// uske pehle ka data extract kar rhe hai jo starting me input kia tha taaki pehle se likha aajae jo update karana hai
 
        result9 = await result9.json();
        setname(result9.name); // abb inn charo me se koi bhi change karwa do aur baaki teen to input me pehle se hi rahenge 
        setprice(result9.price);
        setcategory(result9.price);
        setcompany(result9.company)
    }
    

    async function updateProduct() {
        console.log(name,price,company,category);
        let result11 = await fetch(`http://localhost:5000/products/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({name,price,category,company})
        });
        result11 = await result11.json()
        console.log(result11);
        navigate('/')
    }

    return (
    <div className='product'>
        <h1>Update Product</h1>
        <input type="text" className='inputBox'value={name} placeholder='enter product name' onChange={(e)=>{setname(e.target.value)}} />
        
        <input type="text" className='inputBox' value={price} placeholder='enter product price' onChange={(e)=>{setprice(e.target.value)}} />
        
        <input type="text" className='inputBox' value={category} placeholder='enter product category'onChange={(e)=>{setcategory(e.target.value)}} />
        
        <input type="text" className='inputBox' value={company} placeholder='enter product company'onChange={(e)=>{setcompany(e.target.value)}} />
        
        <button className='appbutton' onClick={updateProduct}>Update Product</button>
    </div>
  )
}
