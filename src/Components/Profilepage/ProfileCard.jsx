function ProfileCard({ name, role, email, phone }) {
  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-2xl shadow-lg p-6 w-72 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
        <span className="text-3xl font-bold">{name[0]}</span>
      </div>
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-green-100">{role}</p>
      <div className="mt-4 text-sm text-gray-100">
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-full font-medium hover:bg-green-100 transition">
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;
