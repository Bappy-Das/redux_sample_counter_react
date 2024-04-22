// eslint-disable-next-line react/prop-types
const Stats = ({ totalCount }) => {
  return (
    <div className="p-4 h-32 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold"> Total Count : {totalCount}</div>
    </div>
  );
};

export default Stats;
