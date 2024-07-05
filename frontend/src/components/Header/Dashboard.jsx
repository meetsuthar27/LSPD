import React, { useContext } from 'react';
import { UserContext } from "../../context/userContext";
import LSPDLogo from '/src/assets/lspd-logo.png';

const dashboardData = [
    {
        image: "/src/assets/wanted.png",
        title: "Most Wanted List",
        description: "Catch Them if You Can (But Maybe Don’t Try Too Hard)"
    },
    {
        image: "/src/assets/tip.png",
        title: "Submit a Tip",
        description: "Got a Hot Tip? Let Us Know (or Just Gossip, We’re Not Judging)"
    },
    {
        image: "/src/assets/careers.png",
        title: "Careers at LSPD",
        description: "From Rookie to All-Star Cop – Start Your Journey in Los Santos"
    },
    {
        image: "/src/assets/news.png",
        title: "News and Alerts",
        description: "Stay Informed on the Latest in Los Santos"
    }
];

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bg-[#0E182F] text-[#75AAF1] min-h-screen">
            <section className="p-12">
                <div className="text-center m-8 p-12">
                    <h2 className="text-5xl pricedown font-bold text-gold mb-4">Welcome to LSPD Eagle-eye</h2>
                    <p className="text-2xl poppins mb-2 text-[#D2E5FF]">Your Digital Hotline for All Things Los Santos! (Yes, Even the Crazy Stuff)</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 pr-4 md:px-20">
                    {dashboardData.map((item, index) => (
                        <div key={index} className="flex bg-[#18284B] p-3 rounded-2xl shadow-2xl text-left items-center transform transition-transform duration-300 hover:scale-105 hover:border-[#263E74] hover:border-2 hover:bg-gradient-to-r from-[#18284B] to-[#263E74]">
                            <img src={item.image} alt={`Image ${index + 1}`} className="w-[30%] rounded-lg mr-6" />
                            <div>
                                <h3 className={`pricedown text-4xl mb-2 ${item.title === "Most Wanted List" || item.title === "News and Alerts" ? "text-[#FCD672]" : ""}`}>
                                    {item.title}
                                </h3>
                                <p className="text-[#D2E5FF] text-xl">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[#18284B] p-12 rounded-2xl shadow-2xl text-left mt-10 mx-4 md:mx-20">
                    <h3 className="text-4xl pricedown text-[#FCD672] font-bold">Why LSPD Eagle-eye?</h3>
                    <p className="my-8 text-[#D2E5FF] text-xl">
                        The LSPD Eagle-eye portal was created to connect the Los Santos Police Department with its vibrant community. In a dynamic and unpredictable city like Los Santos, staying ahead requires more than just police presence; it needs the vigilance of every citizen. This user-friendly portal allows residents to report crimes, share tips, and stay informed about local safety issues. By harnessing community input, LSPD Eagle-eye aims to enhance public safety, build trust, and ensure a responsive and transparent police force. Whether it’s suspicious activity or crucial information, your input can make a difference.
                    </p>
                    <p className="mb-8 text-[#D2E5FF] text-xl">Join us in keeping Los Santos safe and lively, one tip at a time!</p>
                    <img src="/src/assets/place.png" alt="Place" className="rounded-xl shadow-xl w-[100%]" />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
