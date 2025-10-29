/**
 * Alert function
 */

// ✅ fixed alert function
const setAlert = (msg, type = 'danger') => {
  return `
    <p class="alert alert-${type} d-flex justify-content-between align-items-center">
      ${msg}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </p>
  `;
};

/**
 * Check value is Number or not
 */

const numberCheck = (nun) => {
  let agePattern = /^[0-9]{1,3}$/;
  return agePattern.test(nun);
};

const marriageAgecheck = (name, age, gender) => {
  // 👨 Male
  if (gender == 'Male') {
    if (age >= 21) {
      return setAlert(`Hi ${name} Vaiya, Apnar marriage age is okay.`, 'success');
    } else {
      return setAlert(
        `Hi ${name} Vaiya, Apnar marriage age is not okay. You have to wait ${21 - age} years.`,
        'danger'
      );
    }
  }
  // 👩 Female
  else if (gender == 'Female') {
    if (age >= 18) {
      return setAlert(`Hi ${name} Apu, Apnar marriage age is okay.`, 'success');
    } else {
      return setAlert(
        `Hi ${name} Apu, Apnar marriage age is not okay. You have to wait ${18 - age} years.`,
        'danger'
      );
    }
  }
};
