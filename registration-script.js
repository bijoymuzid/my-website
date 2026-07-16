console.log("Registration Form loaded successfully!");

document.getElementById('name')?.addEventListener('input', function() {
  console.log('Name length: ' + this.value.length);
});
