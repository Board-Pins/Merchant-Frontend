
import mail from "../../assets/icons/image 72.png";
import { Link } from 'react-router-dom';



export default function RecoverySuccess() {
 

   return (
      <section className=" mb-5 mt-12">
         <div className="mx-14">
       
<div className=" w-full   flex justify-center align-center">

<div className="rounded-[30px] relative w-[600px] h-[450px]   bg-white shadow-custom">
<img src={mail} className=" md:w-[250px] w-[150px] z-3 bottom-[60%] left-[30%] absolute "/>
<p className="text-center md:text-4xl text-3xl  font-[700] text-[#333] w-full absolute top-[50%]">Recovery link sent!</p> 
<p className="text-center md:text-2xl text-2xl  w-full absolute text-[#333] lg:top-[62%]  top-[65%] ">Now, check your email.</p>   
<span className="text-center   w-full absolute text-[#333] lg:top-[80%]  top-[85%] text-gray-600">Or <Link to="/login" className=" font-bold text-[#6161FF]">Login</Link> </span>
</div>

</div>
         
         </div>
      </section>
   );
}