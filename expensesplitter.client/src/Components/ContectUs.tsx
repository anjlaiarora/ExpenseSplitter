





import React, { useState } from 'react'
import axios from 'axios';

const ContectUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Track loading state
    const [submitSuccess, setSubmitSuccess] = useState(false); // Track submission success
    const [errorMessage, setErrorMessage] = useState(''); // Track error message

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitSuccess(false);
        setErrorMessage('');

        try {
            const response = await axios.post('https://localhost:7194/Contacts', {
                name,
                email,
                message,
            });

            setName("");
            setEmail('');
            setMessage('');
            setSubmitSuccess(true); 

            console.log(response.data);
        } catch (error: any) {
            console.error(error);
            setErrorMessage("Failed to send the message. Please try again later."); 
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <section className="min-h-screen bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
            <div className="flex flex-col min-h-screen bg-black/60">
                <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div className="text-white lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Have questions? Shoot us an email.</h1>
                            <p className="max-w-xl mt-6">
                                Have a question for us or feedback? Please click on the most appropriate category and fill out the form to reach us.
                            </p>
                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl text-black lg:max-w-xl">
                                <h1 className="text-xl font-medium">Contact form</h1>

                                <p className="mt-2">
                                    Ask us everything and we would love
                                    to hear from you
                                </p>

                                <form className="mt-6" onSubmit={handleSubmit}>
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm">Email address</label>
                                        <input
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-black rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm">Message</label>
                                        <textarea
                                            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-300 focus:outline-none"
                                            placeholder="Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <button
                                        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md hover:bg-black/80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Get in touch'}
                                    </button>

                                    {/* Success message */}
                                    {submitSuccess && (
                                        <div className="mt-4 text-green-500">
                                            Thank you! Your message has been sent successfully.
                                        </div>
                                    )}

                                    {/* Error message */}
                                    {errorMessage && (
                                        <div className="mt-4 text-red-500">
                                            {errorMessage}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContectUs;




