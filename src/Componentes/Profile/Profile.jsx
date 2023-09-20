
const Profile = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="flex-1 w-full mb-20 flex justify-center">
                        <img  src="https://i.ibb.co/sCYhDsc/hq720.jpg" className=" rounded-full shadow-2xl " />
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">MR . THOR</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">LOG OUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;