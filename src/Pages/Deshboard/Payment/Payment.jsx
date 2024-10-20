import { loadStripe } from "@stripe/stripe-js";
import Sectiontitle from "../../../Comonents/Sectiontitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutfrom from "./CheckOutfrom";

// toto : add pk 
const stripePromise = loadStripe(import.meta.env.VITE_PEYMENT)

const Payment = () => {

    return (
        <div className="h-[100vh]">

            <Sectiontitle heading='Payment' subheading='Pay to eat'></Sectiontitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutfrom/>
                </Elements>
                
            </div>
            
        </div>
    );
};

export default Payment;