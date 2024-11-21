import React from 'react';

function Footer() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-900">
            <footer className="w-2/3 bg-gray-800 text-white py-6 px-8 rounded-lg shadow-lg">
                <div className="max-w-lg mx-auto text-center">
                    <h2 className="text-xl font-semibold mb-4">About This Currency Conversion Tool</h2>
                    <p className="text-sm mb-4 leading-6">
                        This currency conversion platform is designed to provide fast, accurate, and up-to-date exchange rates for users worldwide. Powered by reliable exchange rate APIs, it allows you to effortlessly convert between currencies while staying informed about the latest market trends.
                    </p>
                    <p className="text-sm mb-4 leading-6">
                        Our goal is to create a seamless, user-friendly interface that caters to your needs, with features like dynamic currency swapping, live rate updates, and a responsive design for mobile and desktop users. Stay confident with our service, and let us help you make informed financial decisions.
                    </p>
                    <p className="text-xs italic text-gray-400">
                        **Disclaimer:** Exchange rates are updated frequently; however, they may vary slightly due to real-time market fluctuations. For precise conversions, especially for large transactions, consult with your financial institution.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
