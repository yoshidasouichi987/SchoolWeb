const searchBox = document.getElementById('searchBox');
const detailSections = document.querySelectorAll('section details');

searchBox.addEventListener('input', () => {
  const keyword = searchBox.value.toLowerCase();

  detailSections.forEach(detail => {
    const summaryText = detail.querySelector('summary').textContent.toLowerCase();
    if (summaryText.includes(keyword)) {
      detail.parentElement.style.display = 'block';
    } else {
      detail.parentElement.style.display = 'none';
    }
  });
});
