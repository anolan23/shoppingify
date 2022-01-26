function Stat({ title, percent, color }) {
  return (
    <div className="stat-container__stat">
      <div className="stat-container__stat__info">
        <div className="stat-container__stat__info__title">{title}</div>
        <div className="stat-container__stat__info__percent">{`${(
          percent * 100
        ).toFixed(0)}%`}</div>
      </div>
      <div className="stat-container__stat__bar-container">
        <div
          className={`stat-container__stat__bar-container__bar ${
            color ? `stat-container__stat__bar-container__bar--${color}` : ''
          }`}
          style={{ width: `${percent * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
export default Stat;
