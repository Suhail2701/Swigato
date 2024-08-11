import React from 'react';
import { useSelector } from 'react-redux';


const About = () => {

    const darkMode = useSelector((store) => store.darkMode)
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className='min-h-screen dark:bg-c2 '>
                <div className="container mx-auto py-10 p-5  ">
                    <h1 className="text-4xl xs:text-2xl sm:text-3xl font-bold text-center mb-9 dark:text-c3">About Us</h1>
                    <p className="text-2xl xs:text-lg sm:text-xl text-justify mb-8 dark:text-c3">
                        Welcome to <span className='text-yellow-600 font-bold'>Swigato</span>, your go-to platform for ordering delicious food from the best restaurants in your city. Whether you're craving a quick bite or a gourmet meal, we've got you covered. Our mission is to make food delivery quick, convenient, and enjoyable for everyone.
                    </p>
                    <h2 className="text-3xl font-semibold mb-3 xs:text-2xl sm:text-3xl text-yellow-500 dark:text-gray-400">Our Story</h2>
                    <p className="text-xl text-justify mb-8 xs:text-lg sm:text-xl dark:text-c3">
                        Founded in 2023, Swigato started with a simple idea: to connect people with the best local restaurants. We saw a gap in the market for reliable, fast food delivery and decided to create a platform that would not only meet but exceed the expectations of food lovers everywhere.
                    </p>
                    <h2 className="text-3xl font-semibold mb-3 xs:text-2xl sm:text-3xl text-yellow-500 dark:text-gray-400 ">Our Mission</h2>
                    <p className="text-xl text-justify mb-8 xs:text-lg sm:text-xl dark:text-c3">
                        Our mission is to bring great food to your doorstep with just a few clicks. We are committed to offering a wide variety of cuisines, timely deliveries, and excellent customer service. We aim to create a seamless and enjoyable experience for both our customers and restaurant partners.
                    </p>
                    <h2 className="text-3xl font-semibold mb-3 xs:text-2xl sm:text-3xl text-yellow-500 dark:text-gray-400">What We Offer</h2>
                    <ul className="list-disc list-inside text-xl mb-8 xs:text-lg sm:text-xl dark:text-c3">
                        <li>Wide Selection: Choose from a variety of restaurants and cuisines to satisfy any craving.</li>
                        <li>Fast Delivery: Our delivery partners ensure your food arrives hot and fresh.</li>
                        <li>Easy Ordering: Our user-friendly app makes it simple to browse menus, place orders, and track deliveries.</li>
                        <li>Exclusive Offers: Enjoy special deals and discounts available only on our platform.</li>
                    </ul>
                    <h2 className="text-3xl font-semibold mb-3 xs:text-2xl sm:text-3xl text-yellow-500 dark:text-gray-400">Our Values</h2>
                    <ul className="list-disc list-inside text-xl mb-5 xs:text-lg sm:text-xl dark:text-c3">
                        <li>Customer Focus: We put our customers first and strive to meet their needs in every way.</li>
                        <li>Quality: We partner with the best restaurants to ensure high-quality meals.</li>
                        <li>Reliability: We work hard to make sure your food is delivered on time, every time.</li>
                        <li>Innovation: We continuously improve our technology and services to enhance your experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
