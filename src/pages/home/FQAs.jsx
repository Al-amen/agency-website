import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'

const faqs = [
    {
        id: 1,
        question: "Who should use the app?",
        answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
    },
    {
        id: 2,
        question: "What is included with my subscription?",
        answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
    },
    {
        id: 3,
        question: "How do I get paid?",
        answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
    },
    {
        id: 4,
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
    },
    {
        id: 5,
        question: "How can we get in touch?",
        answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
    }
];

const FQAs = () => {
    const [expandedFAQ,setexpandedFAQ] = useState(null)
    const toggleFAQ = (id) => {
        if(expandedFAQ === id) {
            setexpandedFAQ(null)
        }
        else {
            setexpandedFAQ(id)
        }
    }
  return (
    <div className='bg-bgColor'>
        <div className='max-w-screen-2xl container bg-white mx-auto py-20 px-5'>
            <HeadingSection heading={"Frequently Asked Questions"} subHeading={"FAQs"} description={""}/>

            <div className='w-full max-w-4xl mx-auto'>
                {
                    faqs.map((fqa)=>(
                        <div key={fqa.id} className='border border-gray-300 mb-4'>

                            <div className='cursor-pointer flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-200 transition duration-200' onClick={() => toggleFAQ(fqa.id)}>
                                <h3 className='text-lg font-semibold text-gray-800'>{fqa.question}</h3>
                                <span className={`transform transition duration-200 text-lg font-bold ${expandedFAQ === fqa.id ? "rotate-180" : ""}`}>
                                    {expandedFAQ === fqa.id ? "-" : "+"}
                                </span>

                            </div>
                             {
                                expandedFAQ === fqa.id && (<div className='p-4 bg-white'>
                                    <p className='text-gray-600'>{fqa.answer}</p>
                                </div>)
                            }

                        </div>
                    ))
                }

            </div>

        </div>
    </div>
  )
}

export default FQAs