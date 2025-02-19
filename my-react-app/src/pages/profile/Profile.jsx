import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar/Sidebar";
import { ThemeContext } from "../../context/ThemeProvider";


const ProfilePage = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    // Fetch profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get("https://server-wheat-xi.vercel.app/api/user/find/",{
                    withCredentials:true
                });
                // photoURL
                console.log(response.data.data)
                setProfile(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile data:", error);
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-gray-600">
        
        </div>;
    }

    if (!profile) {
        return <div className="text-center py-20 text-red-500">Error loading profile data.</div>;
    }

    return (
        <div className={`flex  items-center min-h-screen ${isDarkMode?"bg-dark text-white":"bg-white text-dark"}  gap-10`}>

            <Sidebar/>
            <div className={`${isDarkMode ? "bg-dark text-white " : "bg-white text-dark"} border border-[rgba(255,255,255,0.1)] shadow-md rounded-lg p-6 w-full max-w-md mx-auto`}>
                <div className="flex flex-col items-center">
                    <img
                        src={profile.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                    />
                    <h2 className="mt-4 text-xl font-semibold  capitalize">{profile.name}</h2>
                    <p className="text-gray-600">Role: {profile.role || "User"}</p>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-500">Email:</span>
                        <span className="">{profile.email}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-500">Phone:</span>
                        <span className="">{profile.phone || "N/A"}</span>
                        
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-gray-500">Joined:</span>
                        <span className="">
                            {new Date(profile.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
                {/* Actions */}
                <div className="mt-6 text-center">
                    <button className="bg-main text-white px-4 py-2 rounded-md hover:bg-text transition">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
