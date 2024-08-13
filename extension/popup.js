function listDataTestIdAttributes() {
    const tableBody = document.getElementById('data-testid-table').getElementsByTagName('tbody')[0];
    const bodyElement = document.body; // Get the <body> element
  
    // Loop through all elements with the data-testid attribute within <body>
    const elements = bodyElement.querySelectorAll('[data-testid]');
    for (const element of elements) {
      const row = tableBody.insertRow();
      const elementCell = row.insertCell();
      const dataTestIdCell = row.insertCell();
  
      // Extract the element tag name and data-testid value
      elementCell.innerHTML = element.tagName;
      dataTestIdCell.innerHTML = element.getAttribute('data-testid');
    }
  }