// Sample array of student objects
let students = [
  { name: "John", chemistry: 75, biology: 85, dob: "12-05-2002" },
  { name: "Alice", chemistry: 85, biology: 90, dob: "12-04-2000" },
  { name: "Bob", chemistry: 75, biology: 85, dob: "12-05-2002" },
  { name: "Charlie", chemistry: 90, biology: 85, dob: "20-03-2001" },
  { name: "David", chemistry: 85, biology: 80, dob: "20-02-2001" }
];

// Sorting function
students.sort((a, b) => {
  // Calculate total marks
  const totalA = a.chemistry + a.biology;
  const totalB = b.chemistry + b.biology;

  // Priority 1: Sort by total marks
  if (totalA !== totalB) {
    return totalB - totalA; // Sort in descending order of total marks
  }

  // Priority 2: If total marks are same, sort by biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology; // Sort in descending order of biology marks
  }

  // Priority 3: If both total and biology marks are the same, compare by date of birth
  const dobA = a.dob.split("-").reverse().join(""); // Convert DD-MM-YYYY to YYYYMMDD for easy comparison
  const dobB = b.dob.split("-").reverse().join("");

  if (dobA !== dobB) {
    return dobA.localeCompare(dobB); // Sort by date of birth in ascending order (earlier dates come first)
  }

  // If all fields are equal, return 0 (order does not matter)
  return 0;
});

// Display the sorted students array
console.log(students);

