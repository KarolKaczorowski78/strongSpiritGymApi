const schedule = [
  {
    id: 1,
    locationId: 1,
    schedule: [
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 2,
    locationId: 2,
    schedule: [
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 3,
    locationId: 3,
    schedule: [
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 4,
    locationId: 4,
    schedule: [
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 5,
    locationId: 5,
    schedule: [
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 6,
    locationId: 6,
    schedule: [
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 7,
    locationId: 7,
    schedule: [
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
    ]
  },
  {
    id: 8,
    locationId: 8,
    schedule: [
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
    ]
  },
  {
    id: 9,
    locationId: 9,
    schedule: [
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
    ]
  },
  {
    id: 10,
    locationId: 10,
    schedule: [
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
    ]
  },
  {
    id: 11,
    locationId: 11,
    schedule: [
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
    ]
  },
  {
    id: 12,
    locationId: 12,
    schedule: [
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
    ]
  },
  {
    id: 13,
    locationId: 13,
    schedule: [
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
    ]
  },
  {
    id: 14,
    locationId: 14,
    schedule: [
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
    ]
  },
  {
    id: 15,
    locationId: 15,
    schedule: [
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
    ]
  },
  {
    id: 16,
    locationId: 16,
    schedule: [
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
    ]
  },
  {
    id: 17,
    locationId: 17,
    schedule: [
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
    ]
  },
  {
    id: 18,
    locationId: 18,
    schedule: [
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
    ]
  },
  {
    id: 19,
    locationId: 19,
    schedule: [
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
    ]
  },
  {
    id: 20,
    locationId: 20,
    schedule: [
      [ 'MMA', null, 'BJJ', 'MMA', 'Stretching', 'MMA', 'Boxing' ],
      [ 'MMA', 'BJJ', 'Boxing', 'Crossfit', 'Stretching', 'MMA', 'Boxing' ],
      [ 'Boxing', null, 'MMA', 'MMA', 'MMA', 'BJJ', 'BJJ' ],
      [ 'MMA', 'Boxing', null, null, null, 'Boxing', 'Boxing' ],
      [ 'Boxing', 'MMA', 'MMA', 'BJJ', 'BJJ', 'Crossfit', 'Crossfit' ],
      [ 'MMA', 'MMA', null, 'BJJ', 'Boxing', null, 'Boxing' ],
      [ null, null, 'Boxing', 'Stretching', 'BJJ', 'BJJ', 'Crossfit' ],
      [ 'MMA', 'MMA', 'BJJ', 'BJJ', 'BJJ', 'Stretching', 'Boxing' ],
    ]
  },
]

module.exports = schedule;