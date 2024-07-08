import React from 'react';
import { Element } from 'react-scroll';

const characters = [
    { id: 1, name: "Trevor Philips", image: "/src/assets/trevor.png" },
    { id: 2, name: "Michael De Santa", image: "/src/assets/trevor.png" },
    { id: 3, name: "Franklin Clinton", image: "/src/assets/trevor.png" },
    { id: 1, name: "Trevor Philips", image: "/src/assets/trevor.png" },
    { id: 2, name: "Michael De Santa", image: "/src/assets/trevor.png" },
    { id: 3, name: "Franklin Clinton", image: "/src/assets/trevor.png" },
    // Add more characters as needed
];

const WantedList = () => {
    return (
        <div className="bg-[var(--bg1)] text-[var(--lblue)] dark:bg-[var(--dbg1)] dark:text-[var(--dlblue)] min-h-screen">
            <section className="bg-[var(--bg2)] dark:bg-[var(--dbg2)]">
                <img src="/src/assets/element.png" alt="Do Not Cross" className="animate-pulse w-full z-50" />
            </section>
            <section className="relative flex flex-col items-center justify-center bg-[var(--bg2)] dark:bg-[var(--dbg2)]">
                <div className="relative text-center md:p-20 p-7">
                    <h1 className="md:text-3xl text-lg poppins font-medium text-[var(--ltext)] dark:text-[var(--dltext)] md:m-12 m-3 mt-3 md:mt-20">
                        You didn’t obey the rule, huh? Just kidding... Welcome to the 'Most Wanted' list!
                        Check out these notorious troublemakers
                    </h1>
                    <p className="md:text-5xl text-2xl sign mb-3 md:mb-10 text-[var(--lblue)] dark:text-[var(--dlblue)]">
                        and remember - crime doesn't pay (unless you’re in GTA V!)
                    </p>
                </div>
            </section>
            <Element name="mostWanted" className="border-y-4 border-[var(--lgold)] py-8 px-4">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <div className="p-6 mb-6">
                            <h2 className="text-2xl md:text-4xl pricedown mb-4 text-[var(--lgold)] dark:text-[var(--dlgold)]">
                                Los Santos' Most Wanted Criminals
                            </h2>
                            <p className="text-md md:text-xl poppins mb-4 text-[var(--ltext)] dark:text-[var(--dltext)]">
                                Catch Them if You Can (But Maybe Don’t Try Too Hard)
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-4 mb-8">
                            {characters.map((character) => (
                                <div key={character.id} className="bg-[var(--bg1l)] dark:bg-[var(--dbg1l)] rounded-xl shadow-md p-3 text-[var(--ltext)]  dark:text-[var(--dltext)] hover:shadow-4xl transition-transform duration-300 hover:border-[var(--hover-border-color)] hover:bg-gradient-to-r from-[var(--hover-bg-gradient-start)] to-[var(--hover-bg-gradient-end)]">
                                    <img src={character.image} alt={character.name} className="w-full h-auto mb-3 object-contain" />
                                    <h3 className="text-md text-left poppins font-medium text-[var(--ltext)] dark:text-[var(--dltext)]">
                                        {character.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-10">
                            <button className="text-lg md:text-xl poppins dark:bg-[var(--dhover-bg-gradient-start)] bg-[var(--hover-bg-gradient-start)] text-[var(--ltext)] dark:text-[var(--dltext)] py-2 px-8 md:px-20 rounded-md hover:text-[var(--bg1)] hover:dark:text-[var(--dbg1)] hover:font-medium hover:bg-[var(--lgold)] hover:dark:bg-[var(--dlgold)] transition ease-in-out duration-1500">
                                Check out entire list
                            </button>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    );
};

export default WantedList;
