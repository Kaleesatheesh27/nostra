const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const images = document.querySelectorAll('.image1');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      filterImages();
    });
  });

  function filterImages() {
    const checked = Array.from(checkboxes)
      .filter(chk => chk.checked)
      .map(chk => chk.value);

    images.forEach(img => {
      const category = img.getAttribute('data-category');
      console.log(category)
      if (checked.length === 0 || checked.includes(category)) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  }