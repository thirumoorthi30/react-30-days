function ProfileCard({ name, role, email, phone }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-64 text-center hover:shadow-2xl transition">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-green-600">{role}</p>
      <p className="text-gray-500 mt-2">{email}</p>
      <p className="text-gray-500">{phone}</p>
    </div>
  );
}

export default ProfileCard;
