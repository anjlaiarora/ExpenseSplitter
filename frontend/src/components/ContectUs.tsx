// import React from 'react'

const ContectUs = () => {
  return (
    <section className="min-h-screen bg-cover  " style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
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
                    <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl  text-black  lg:max-w-xl">
                        <h1 className="text-xl font-medium">Contact form</h1>

                        <p className="mt-2">
                            Ask us everything and we would love
                            to hear from you
                        </p>

                        <form className="mt-6">
                            <div className="flex-1">
                                <label className="block mb-2 text-sm">Full Name</label>
                                <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-black rounded-md   dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="block mb-2 text-sm">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-black rounded-md dark:bg-white-900  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className="w-full mt-6">
                                <label className="block mb-2 text-sm">Message</label>
                                <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md md:h-48 dark:bg-white  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md hover:bg-black/80 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                get in touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ContectUs