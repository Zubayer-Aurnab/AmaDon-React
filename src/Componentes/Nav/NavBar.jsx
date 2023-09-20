import { NavLink, Outlet, useNavigation } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'


const NavBar = () => {
    const navigation = useNavigation()
    return (
        <div>
            <div className="flex justify-between items-center px-4 py-5 shadow-lg mb-10">
                <h1 className="text-5xl font-black">AmaDon</h1>
                <ul className="flex gap-10 text-2xl font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-4 border-red-600" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/product"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-4 border-red-600" : ""
                        }
                    >
                        Products
                    </NavLink>
                   
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-4 border-red-600" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                </ul>
            </div>


            {
                navigation.state === "loading" ? <div className=" flex
                justify-center mt-44">
                    <RotatingLines

                        strokeColor="gray"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="200"
                        visible={true}
                    />
                </div>
                    : <div className="px-10 min-h-screen">
                        <Outlet></Outlet>
                    </div>
            }
        </div>

    );
};

export default NavBar;