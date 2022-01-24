import ListItem from './ListItem';

function ListCategory({ name, items }) {
  const renderItems = () => {
    if (!items) return null;
    return items.map((item, index) => {
      return <ListItem key={index} item={item} />;
    });
  };

  return (
    <section className="sidebar-list__category">
      <span className="sidebar-list__category__title">{name}</span>
      {renderItems()}
    </section>
  );
}
export default ListCategory;
