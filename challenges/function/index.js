// CHALLENGE 1

const getCelsius = (F) => Math.round(((F - 32) * 5) / 9);

console.log(getCelsius(200));

// challenge 2
const minMax = (num) => {
  return `min: ${Math.min(...num)}, max: ${Math.max(...num)}`;
};

let test = [1, 2, 3, 4, 5, 6, 6, 9, 8];

console.log(minMax(test));

// other approach
function minMaxx(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMaxx([55, 32, 43, 54, 65, 76, 87, 98, 109]));
