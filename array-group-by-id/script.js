const data = [
  { id: 0, person: 'Jane' },
  { id: 1, person: 'Billy' },
  { id: 2, person: 'Michael' },
  { id: 2, person: 'Ivan' },
  { id: 2, person: 'Mary' },
  { id: 3, person: 'Sub Zero' },
  { id: 4, person: 'Bear' },
  { id: 5, person: 'Denis' },
  { id: 5, person: 'Zebra' },
];

const uniqueIDs = [...new Set(data.map((el) => el.id))];

const dataGroupedById = uniqueIDs.map((id) => ({
  id,
  persons: data.filter((el) => el.id === id),
}));

console.log(dataGroupedById); // inner id is redundant
