import React from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
    const auth = localStorage.getItem('user')

    const navigate = useNavigate();
    function logout() {
        localStorage.clear();//* jo recently user login hua hai uska saara data localstorage se nikaal deta hai
        navigate('/signup')// aur usko ogout karke signup wle page pe bhejdo
    }

  return (
    <div>
        <img  alt = 'logo' className='logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUQQ3j///8LQXdCY4wAQXj6+/0AMm4APHTf5u3M1N8AO3VyiKX2+fshToBRb5QZSHsANnGZqb8AMW8ALW0AKmqsucuRorlnf6CiscTm6/Dw8/bP1+G+ydYAJ2pWcZa5xNN9ka3X4Ok7X4snUYAAFmIAG2WKnLQ1WIZhe51thaRLaZFdSZMkAAAFC0lEQVR4nO3c2XraOhQFYCGMZAwOisEMxgw2DdP7P+ARLQnEUk49EW3S9V/kwmnyZVXzYFj3p2P8p2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+cn/6mLvfaEETjSARe8ZfLSH/HdfzI77VgmPj9eJtHY3mfR5z8zO+H0lm436J+p0X97U58hFTTpfj167zIjbL9VmraZsJLyJkK/vzq0H+L0/Tw0ldOE/Kw5YSdTnYSl1ILpvvVMlynb9nObVOcLFuP2FnmQteOeDZeLrPZqp+7Tei9tJ+w05mOuRzEb1m4PIts5DSg7vHSR0Ts66HCz89crl/nbtuhbom75BER/V3Qzabr2WbjeLTQ1OkRCTuLMBjt083MdQleiLZHjGtEPaNRyn0JXqxeHxIxi1wHu4n2D4k4F66D3agX/xER1zTq6G8y2C7aT+gHrnPdC8Q6zoYtR9xT6Ek/cE9MoqAOOTpvY2sVGNKpplxK/ZdevtQIePkSqaNtIUamEPlu0MhMCi7FoGckXIxdR7vyzg0b3HCuJFcHsx3T6U4bT057en4mD0YpbqgM+1ELK4ytYmpbfJhI11tRV/LYPGHnLJkwFtRkquk4a55QT0TlrPhwSqc3bZ7wUl5RsUGnZCanZhOqLo2YiAvPFgGRhqiXic3XUImlmiYhmYS8hb1TnWZUfNZ1uyN8j4uZOSmp5ijZuPiMTGd6EchNs4R6GjopTsFnlBLqkT+3LxJKmuuEWeHZiVZCXVXleh+n/VqWevAzNtEHxBJeFlKBEjVJyzEBsTL06mb7Q3GzltJqh97Lwm8i25k9zZFUQp436Ga0oceN0eJMK6Fstqu41KvBwqOe48O1ItVsb3ivjGVY4vpwrYAHTQqxF5gzb5/K6umd7DaYuenhMCp2NHRWT+/UunbAheLmXgGZ/cQbda67K6V7zYjuLsYdKYttqZyBYmpQfEhmJ+oTHh021U8wToLJnO5uYgGPRoONn1TodPyuLsGDWb9pzdnu8UCoMD+/lCWlnJzMgk/I9aT3OJdlBSpanW13j17p9aQ3fFTarjuIrR1wj2Q/c8XDYVlfN1faRRg23ZbSUwDCJdhOQlpLw6IWEs6JjoVXzRP2qZz/fqFxwoz0UMiaJ+zTfkmBNU4YK+oBmyUcnibkAzZKuGGkrnt9oXbC3qbr/EWZUmom9Kc7QefA8H/VSNjbbENB51D7b+qU4Wni+q+uwkjYm79+YtvMOVJeSxQZCYdMqHsrS8Rh9xk60SszYVj4B7b33hLXL+NV8NeEjKvMjLhgz9vTGAmZF1rO/MlPuD+USMhkbtlWTWmvCm/KJGSB7c23mPi68F2phEwY2/ja9DkqarmELLJdFRs8xbBYMqF5JHqxfoaIZRMyZRkWe/kTDIulE3JlGTOSkP4Co3RCxj3Ljr5Pf+Qvn5DJrmVYXJKfoVZIyJTtpn+6+sa/to4qCZmwXRKfE18tVkrIxrZL4nva87dqCdnKdruY9shfMSFTtiPgNeXupmpCziz3xUiP/FUTMmn7cIaE8OlF5YR6tWipp75HNmL1hPZhke7IXyMhE7bbqVRvRdVKyMTcEnFOdHJTKyG3votKdOSvlZBZrl9qJ5Ijf82EXNreKiJ57cT4FLByCZm0XFDspCQLke3CT8p+KJkcFX5Q/2i5/5xvV/vzH5/ssyMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf8x9kKWjehNOu8AAAAABJRU5ErkJggg==' />
        {auth?
        // agar user hai to  navbar me ye components show karo
        <ul className='nav-ul'>  
            <li><Link to="/">Products</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/update">Update Product</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li> {/*auth ko pehle json me format kiya fir uska naam aur dikha dia logout ke baad ki iss id se logout hoga */}
        </ul>
        // agar user nhi hai to ye navbar me ye show karo
        :<ul className='nav-ul nav-right'>
            <li><Link to="/signup">signup</Link></li>
            <li><Link to="/login">Login</Link></li> 
        </ul>
        }
    </div>
)
}
