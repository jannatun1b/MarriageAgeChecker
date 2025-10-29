const age_form = document.getElementById('age_form');
const msg = document.querySelector('.msg');

//submit age_form
age_form.onsubmit = (e) => {
  e.preventDefault();

  //get fields value

  let name = age_form.querySelector('input[name="name"]');
  let age = age_form.querySelector('input[name="age"]');
  let gender = age_form.querySelectorAll('input[name="gender"]');

  //get gender name
  let gender_name = '';
  gender.forEach((item) => {
    if (item.checked) {
      gender_name = item.value;
    }
  });
  console.log(name.value, age.value, gender_name, 'console data');

  //form validation
  if (name.value === '' || age.value === '' || gender_name === '') {
    msg.innerHTML = setAlert('All fields are requirad');
  } else if (numberCheck(age.value) == false) {
    msg.innerHTML = setAlert('Your age is invalid', 'warning');
  } else {
    msg.innerHTML = marriageAgecheck(name.value, age.value, gender_name);
  }
};
