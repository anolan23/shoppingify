function HistoryItem({ item }) {
  const { title, timestamp, status } = item;
  const date = new Date(timestamp);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const dateString = date.toLocaleDateString(undefined, options);
  return (
    <div className="history-item">
      <span className="history-item__title">{title}</span>
      <div className="history-item__info">
        <span className="material-icons history-item__info__calendar">
          event_note
        </span>
        <span className="history-item__info__date">{dateString}</span>
        <div
          className={`history-item__status ${
            status === 'cancelled' ? 'history-item__status--cancelled' : ''
          }`}
        >
          <span
            className={`history-item__status__text ${
              status === 'cancelled'
                ? 'history-item__status__text--cancelled'
                : ''
            }`}
          >
            {status}
          </span>
        </div>
        <span className="material-icons history-item__info__right">
          chevron_right
        </span>
      </div>
    </div>
  );
}
export default HistoryItem;
