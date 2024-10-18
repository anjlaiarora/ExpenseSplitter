import React from 'react'

const FaQs = () => {
  return (

<div className='flex justify-between pX-6' >
  <div className='w-1/3 py-10 px-6'>
    <h2 className='font-bold'>Have a Question?</h2>
    <h1 className='mt-6'>
      <span className='text-5xl py-6 border-b-4 font-bold'>FAQ</span>
    </h1>
    <p className='mt-14'>
      Find answers to common questions about Splitify. If you have ideas for new features, feel free to   <span><a href='/contect-us'> Contact Us!</a></span>
    </p>
  </div>
  <div className="space-y-4 w-2/3 p-5 border">
    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">How do I create my first group?</h2>
        <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        To create your first group, click on "Create Group", give it a name, and add your friends. It's that simple!
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">How do I add expenses to the group?</h2>
        <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Simply go to your group, click "Add Expense", fill in the details, and the web-app will split it for you.
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">How do I settle up with my friends?</h2>
        <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        You can use the "Settle Up" button to square off the pending settlements with your groups.
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">How do I remove a participant from a group?</h2>
        <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        To remove a participant, go to the group settings, find the member, and click "Remove".
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">Can I add custom split amounts?</h2>
        <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Yes! When adding an expense, you can choose to split it equally or set custom amounts for each participant.
      </p>
    </details>

    <details className="group [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
        <h2 className="font-medium">Is Splitify free to use?</h2>
        <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <p className="mt-4 px-4 leading-relaxed text-gray-700">
        Yes, Splitify is free to use for basic features. Premium options may be added in the future.
      </p>
    </details>
  </div>
</div>

  )
}

export default FaQs