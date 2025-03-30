export function calculatePremium({ age, gender, coverage, health, smoker }) {
  let baseRate = 0.0;
  
  // Base rate calculation based on age
  if (age < 30) baseRate = 0.02;
  else if (age < 45) baseRate = 0.03;
  else if (age < 60) baseRate = 0.04;
  else baseRate = 0.05;

  // Gender factor
  const genderFactor = gender === 'male' ? 1.1 : 1.0;

  // Health condition factor
  let healthFactor = 1.0;
  switch (health) {
    case 'excellent': healthFactor = 0.9; break;
    case 'good': healthFactor = 1.0; break;
    case 'fair': healthFactor = 1.2; break;
    case 'poor': healthFactor = 1.5; break;
  }

  // Smoking factor
  const smokingFactor = smoker ? 1.5 : 1.0;

  // Calculate monthly premium
  const monthlyPremium = (coverage * baseRate * genderFactor * healthFactor * smokingFactor) / 12;

  return monthlyPremium;
}
