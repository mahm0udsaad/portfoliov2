"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Form from '../../components/form'


const Contact = () => {
  const [isSubmited, setIsSubmited] =useState(false)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('/api/', formData)
        .then(response => {
          setIsSubmited(true)
        })
        .catch(error => {
          console.error('Server Error:', error);
        });
        setIsSubmited(true)
    };

    return ( 
      <div className="h-screen w-full text-white overflow-hidden">
        <div
                className="h-full absolute top-20 w-full flex justify-center"
              >
           <div className="mx-auto mt-5 w-11/12 flex flex-col justify-center">
             <div className="h-full text-center">
             {isSubmited ? (
                  <h1>done</h1>
                ) : (
                  <div>
                    <h1 className="text-4xl">Send me an Email</h1>
                      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                  </div>
                )}

             </div>
            </div>
           </div>
        </div>
     );
}
 
export default Contact;