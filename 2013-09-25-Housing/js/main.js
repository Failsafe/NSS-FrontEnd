function area(l, w)
{
  return l * w;
}

const PRICE_PER_SQFT =200;
const PRICE_PER_WINDOWS =250;
var house = {};
house.number_of_rooms = parseInt(prompt('Number of rooms?'))
var house = {};
house.rooms = [];
house.number_of_windows = 0;
house.area = 0;
house.rooms = [];

for(i = 0; i < house.number_of_rooms; i++)
{
  var room = {};
  room.name = prompt('name?');
  room.windows = parseInt(prompt('Number of Windows?'));
  room.length = parseInt(prompt('Length?'));
  room.width = parseInt(prompt('Width?'));
  room.area = area(room.length, room.width);
  house.area += room.area;
  house.rooms.push(room);
}

House.area_cost = house.area * PRICE_PER_SQFT;
house.window_cost = house.number_of_windows * PRICE_PER_WINDOWS;
house.total_cost = house.area + house.window_cost;
