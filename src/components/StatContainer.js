function StatContainer({ title, children }) {
  return (
    <section className="stat-container">
      <span className="stat-container__title">{title}</span>
      <div className="stat-container__stats">{children}</div>
    </section>
  );
}
export default StatContainer;
