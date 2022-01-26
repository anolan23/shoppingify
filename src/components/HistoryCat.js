import HistoryItem from './HistoryItem';

function HistoryCat({ title, lists }) {
  const renderItems = () => {
    if (!lists) return null;
    return lists.map((item, index) => {
      return <HistoryItem key={index} item={item} />;
    });
  };

  return (
    <section className="history-category">
      <span className="history-category__title">{title}</span>
      <div className="history-category__lists">{renderItems()}</div>
    </section>
  );
}
export default HistoryCat;
