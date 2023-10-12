const Number = ({ value, onClick }) => {
  return (
    <div className="Number" onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Number;
