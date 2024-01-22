function getElementWidth(content, padding, border) {
  const contentVal = Number.parseFloat(content);
  const paddingVal = Number.parseFloat(padding);
  const borderVal = Number.parseFloat(border);

  return contentVal + paddingVal * 2 + borderVal * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
