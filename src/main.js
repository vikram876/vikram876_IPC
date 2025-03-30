import { calculatePremium } from './calculator.js';

document.getElementById('insuranceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = {
    age: parseInt(this.age.value),
    gender: this.gender.value,
    coverage: parseFloat(this.coverage.value),
    health: this.health.value,
    smoker: this.smoker.value === 'yes'
  };

  const premium = calculatePremium(formData);
  
  document.getElementById('premium').textContent = `$${premium.toFixed(2)}`;
  document.getElementById('result').classList.remove('hidden');
});
