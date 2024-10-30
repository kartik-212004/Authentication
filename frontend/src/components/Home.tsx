import { useState } from "react";
export function Home() {
    const [currentLocation, setCurrentLocation] = useState("");
    const [enterLocation, setEnterLocation] = useState("");
    return (
        <div className="min-h-screen bg-gray-100">
           
            <main className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold my-10 text-center">Moving people, and the world</h1>

                <div className="flex items-center space-x-4 mb-10">
                    <input
                        type="text"
                        value={currentLocation}
                        onChange={(e) => setCurrentLocation(e.target.value)}
                        placeholder="Current Location"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        value={enterLocation}
                        onChange={(e) => setEnterLocation(e.target.value)}
                        placeholder="Enter Location"
                        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Search OLA CABS</button>
                </div>

                <div className="bg-green-100 p-6 rounded-lg text-center mb-10">
                    <h2 className="text-2xl font-semibold">Introducing the all-new S1X+</h2>
                    <p className="mt-2">Check all the new design, Gorgeous from every angle!</p>
                    <p className="mt-2 font-bold">Grab the all new S1X+ at ₹89,999* only and make it your today!</p>
                </div>

                <footer className="text-center p-4">
                    <p className="text-gray-600">Global mobility ecosystem driving communities forward</p>
                </footer>
            </main>
        </div>
    );
}
