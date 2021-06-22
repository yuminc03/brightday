window.onload = function(){
//애정운
  var button = document.querySelector(".startBtn");
  var h2 = document.getElementsByTagName("h2")[0];

  var affection_luck = [
    "포기할 때에는 과감하게 포기하는게 좋다네! <br> 슬퍼하면 아무것도 못하네.",
    "아직은 고백할 때가 아니네. <br> 나중을 위해 지금은 나를 더 지켜봐야 할 때네.",
    "연인과 함께하는 자리가 더 유리하네.<br> 혼자 있지 말고 없는 약속이라도 만들어보아라.",
    "자꾸만 안 맞는 인연이 있다면 미련없이 보내길. <br> 그대 인연은 따로 있겠네.",
    "뭐든 후회없는 선택은 없네.<br> 하지만 후회가 적도록 고민을 오래해야 하다네.",
    "독단적인 결정은 오히려 후회만 될 수 있네..<br> 소중한 사람의 의견도 들어보길.",
    "그대가 좋아하는 사람보다 날 좋아하는 사람을 찾아보는게 더 유리할 수 있네.",
    "연인과의 자리에서 애매한 변명은 오히려 망신만 당할 수 있으니 <br>처음부터 솔직한게 좋은 날이네",
    "연인에게 해야 할 말과 하지 말아야 할 말이 있다네. <br>무의식 중에 나오지 않게 조심하길.",
    "평범하게 보여도 그 속엔 특별함이 있다네.<br> 그대 곁에 있는 사람이 특별할 수도 있네.",
    "처음 만난 사람과 좋은 인연이 될 수 있으니 모임에는 빠지지 말고 참석해보시길 바라네.",
    "관심있던 사람에게 도움을 받을 수도 있다네.<br> 이 계기로 친해져보길 바라네.",
    "사람의 마음을 얻는 것이 가장 어렵지만 그보다 쉬운 일도 없을 것이네.",
    "좋아하던 사람에게 안부를 전해보길! 또 다른 인연을 만들어 보길",
    "애정표현은 나의 사람에게만 하는 것이 맞네.<br> 괜한 불화를 살 필요는 없다네.",
    "나를 떠난다고 생각하지 말고 내가 보내준다 생각하면 훨씬 마음 편할 것이네..ㅠㅠ",
    "나에게 지나치게 친절한 이성은 경계하도록 하게.<br> 특히 기혼자는 더 명심하길 바라네.",
    "억지로 들어온건 쉽게 나갈 수 밖에 없으니 제 발로 들어오게 만들어야 한다네.",
    "대화보다는 편지나 글이 더 좋네. 상대를 위해 집중의 시간을 가져보길 바라네",
    "연인과의 약속이 있다면 조금 미뤄보면 어떨지 권유하겠네.",
    "사랑은 표현할때 완성되는 것임을 잊지 않아야 한다네."]
  
    var num = Math.round(Math.random() * (affection_luck.length-1)); 
    // var num = Math.round( Math.random() * 2);
    h2.innerHTML = affection_luck[num];
    // alert(handArr[num])
 
    function NotReload() {
      if ((event.ctrlKey == true &&
        (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode == 116)) {
           event.keyCode = 0; event.cancelBubble = true; event.returnValue = false; } } document.onkeydown = NotReload;
 }