var name, age, gender, is_member, thirsty, drink_of_choice;


// 만약 웹사이트 멤버가 아니거나 21살 이하면 사모님 혹은 사장님 (성별) 클럽에 가입할수 없습니다.
// 아니라면 미스터/미스 아무개에게 웹사이트에 오신걸 환영하라, 목이 마르다면 무슨음료를 원하는지 물어봐라
// 유저가 가장 좋아하는 음료가 우유가 아니라면 네 지금 [] 드리겠습니다 , 우유라면 웹사이트에서 강퇴

is_member = prompt("웹사이트 멤버이신가요?");
age = +prompt("나이가?");
gender = prompt("성별이?");
name = prompt("성함이?");





if (is_member.toUpperCase() !== "TRUE" || age < 21) {
  if (gender.toUpperCase() === "MALE") {
    console.log("사장님 클럽에 가입할 수 없습니다.")
  } else {
    console.log("사모님 클럽에 가입할 수 없습니다.")
  }
} else {
  if (gender.toUpperCase() === "MALE") {
    console.log("미스터 " + name + "님 웹사이트에 오신걸 환영합니다.")
  } else {
    console.log("미스 " + name + "님 웹사이트에 오신걸 환영합니다")
  }
  thirsty = prompt("목이 마르신가요?").toUpperCase()
  if (thirsty.toUpperCase() === "TRUE") {
    drink_of_choice = prompt("무슨 음료를 원하십니까?")
    if (drink_of_choice === "우유") {
      console.log("강퇴되셨습니다.")
    } else {
      console.log("네 지금 " + drink_of_choice +" 드리겠습니다")
    }
  }

}
