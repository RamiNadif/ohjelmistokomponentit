function ItemList({ items, removeitem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => removeitem(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
