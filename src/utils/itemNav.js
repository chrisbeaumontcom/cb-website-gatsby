export default function itemNav(items, id) {
  const obj = {};
  for (var i = 0; i < items.length; i++) {
    if (items[i] === id) {
      const p = i === 0 ? items.length - 1 : i - 1;
      obj.previous = items[p];

      const n = i === items.length - 1 ? 0 : i + 1;
      obj.next = items[n];

      break;
    }
  }
  return obj;
}
