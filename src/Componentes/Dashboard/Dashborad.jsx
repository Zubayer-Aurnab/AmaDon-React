import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Dashborad = () => {
    return (
        <div className="flex">
            <div className="min-w-[20%] h-full min-h-screen bg">
                <ul className="flex flex-col gap-10 text-2xl font-bold">
                    <p className="p-2 rounded-lg"> <NavLink
                        to="/dashboard/profile"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-4 border-red-600" : ""
                        }
                    >
                        Profile
                    </NavLink></p>
                    <p className="p-2 rounded-lg">
                        <NavLink
                            to="/dashboard/stc"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "border-b-4 border-red-600" : ""
                            }
                        >
                            statistics
                        </NavLink>
                    </p>
                    <p className="p-2 rounded-lg w-full">
                        <NavLink
                            to="/dashboard/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "border-b-4 border-red-600 " : ""
                            }
                        >
                            Log IN
                        </NavLink>
                    </p>
                </ul>
            </div>
            <div className="min-w-[80%] flex justify-center ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashborad;