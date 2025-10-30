function ProfileCard({ name, role, email, phone }) {
  return (
    <div
      className="
        bg-[var(--bg)] text-[var(--text)]
        rounded-2xl shadow-lg p-6 w-72 text-center
        transform transition duration-300 hover:scale-105 hover:shadow-2xl
        border border-gray-300 dark:border-gray-700
      "
    >
      <div
        className="
          w-24 h-24 mx-auto rounded-full 
          bg-gray-200 dark:bg-gray-700
          flex items-center justify-center mb-4
        "
      >
        <span className="text-3xl font-bold">{name[0]}</span>
      </div>

      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-green-600 dark:text-green-400">{role}</p>

      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        <p>{email}</p>
        <p>{phone}</p>
      </div>

      <button
        className="
          mt-4 px-4 py-2 rounded-full font-medium transition
          bg-green-600 text-white hover:bg-green-700
          dark:bg-green-500 dark:hover:bg-green-600
        "
      >
        View Profile
      </button>
    </div>
  );
}

export default ProfileCard;
