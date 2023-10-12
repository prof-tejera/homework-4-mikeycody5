const Operation = ({ value, onClick }) => {
  return (
    <div className="Operation" onClick={() => onClick(value)}>
      {value}
    </div>
  );
};


export default Operation;
