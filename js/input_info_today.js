// let name, birth_year, birth_month, birth_days;

function info() {
  const name_str = userInfo.name;
  const birth_year = userInfo.birth_year;
  const birth_month = userInfo.birth_month;
  const birth_days = userInfo.birth_days;

  let message = birth_year + "." + birth_month + "." + birth_days + ".";
  message += name_str + "님의 운세 결과는..?";

  let result = document.getElementById('resultStr');
  result.innerHTML = message;
}

function userInfo() {
  let name = document.getElementById("full_name").value; //사용자 이름
  //사용자 생년월일
  let birth_year = document.getElementById("birth_year").value;
  let target = document.getElementById("birth_month"); //사용자 생월
  let birth_month = target.options[target.selectedIndex].text;
  let targetDate = document.getElementById("birth_days"); //사용자 생일
  let birth_days = targetDate.options[targetDate.selectedIndex].text;

  document.id.action = "../today_loading.html";
  document.id.submit();
  // const gender = document.getElementsByName("gender_type");

  // let user_gender;
  // gender.forEach((values) => {
  //   if (values.checked) {
  //     user_gender = node.value;
  //   }
  // })
  // const users_gender = user_gender;

  // const state = {
  //   name: name,
  //   birthYear: birth_year,
  //   birthMonth: birth_month,
  //   brithDay: birth_days
  // };
  // history.pushState(state, '', '/loading.html');

}