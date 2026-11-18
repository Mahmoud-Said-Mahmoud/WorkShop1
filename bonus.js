// Closure: the three methods share the same current value
function createCounter(init) {
  let current = init; // Start the counter at the initial value.
  console.log(init); 

  return {
    increment() {
      return console.log(++current); // Add 1, then print the new value.
    },

    decrement() {
      return console.log(--current); // decrement 1, then print the new value.
    },

    reset() {
      current = init; // Set the counter back to its starting value.
      return console.log(init); // Print the starting value.
    },
  };
}

const counter = createCounter(0); 
counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.reset();     
counter.reset();     