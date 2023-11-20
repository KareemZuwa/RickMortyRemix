function removeDuplicatesFromArray(arr: Iterable<unknown> | null | undefined) {
  // Check if the array is null or undefined
  if (arr === null || arr === undefined) {
    // Return an empty array in case of null or undefined
    return [];
  }

  // Create a Set from the array to automatically remove duplicates
  const uniqueSet = new Set(arr);

  // Convert the Set back to an array
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

export { removeDuplicatesFromArray };
