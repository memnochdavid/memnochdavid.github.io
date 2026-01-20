function Profile({ avatarUrl }){
    return (
        <div
            className="bg-center bg-no-repeat bg-cover rounded-full h-48 w-48
            border-2 border-slate-950 shadow-[0px_10px_10px_rgba(0,0,0,0.5)]"
            style={{ backgroundImage: `url(${avatarUrl})` }}
            data-alt="avatar">
        </div>
    );
}

export default Profile;