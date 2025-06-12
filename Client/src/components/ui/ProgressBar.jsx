const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-md">
      <div
        className="h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
