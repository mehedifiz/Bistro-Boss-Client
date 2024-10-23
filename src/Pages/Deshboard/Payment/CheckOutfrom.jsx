import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";

const CheckOutfrom = () => {

  const [error , setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
  const axiosSecure = useAxios();
  const {user} = useAuth();
  const [transectionID , setTransectionID] = useState('')

  const [cart , refetch] = useCart();

  const[clientSecret , setClientSecret] = useState('')

  const price = cart.reduce((total , item ) => total + item.price ,0)


    useEffect(()=>{


     if(price  > 0){
      axiosSecure.post('/create-payment-intrent', {price})
      .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
     }

    }


    ,[axiosSecure , price])
    const handleSubmit = async (event)=>{

            event.preventDefault();

            if(!stripe || ! elements){
                return 
            }

            const card = elements.getElement(CardElement)
            if(!card){
                return 
            }

            const {error , paymentMethod} = await stripe.createPaymentMethod({
                type:'card',
                card
            })

            if(error){
                console.log(error)
                setError(error.message)
            } else{
              setError('')
            
            }


            //confirm payment 

            const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret ,{
              payment_method:{
                card: card,
                billing_details:{
                  email: user?.email,
                  name: user?.name

                }
              }
            })
            if(confirmError){
              console.log('comfirm error')
            } 
            else{
              console.log('payment intrent' , paymentIntent)
            }


            if(paymentIntent.status === 'succeeded'){
              toast.success(`Payment succeeded` ,paymentIntent.id )
              setTransectionID(paymentIntent.id)
                console.log(transectionID)
              //save payment in the database 
              const payment ={
                email: user.email,
                price ,
                transectionID :  paymentIntent.id,
                date : new Date() ,// todo :  moment js
                cartIds : cart.map(item => item._id),
                menuitemIds : cart.map(item => item.menuId),
                status : 'Pending',
                 }

                 console.log('this  is payment ' ,payment)

            const res = await  axiosSecure.post('/payments' , payment);
             console.log( " save payment " , res.data)
             refetch()
            }

            
            
        

    }
    return (
       <form onSubmit={handleSubmit}>
              <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="btn btn-sm btn-primary" type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
       {transectionID && <p className="text-green-500">Your Transaction id: {transectionID}</p>
      }
       </form>
    );
};

export default CheckOutfrom;