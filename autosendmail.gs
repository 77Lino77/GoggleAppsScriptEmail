 // 일일 마다 담당자에게 메일을 보내는 함수
 function sendTestDaliy() {
 
  var ss= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("실시간 테스트 현황판");
  
  var testrange = ss.getRange("E5");
  var nowTestResult = testrange.getValue();
  
  var issuerange = ss.getRange("D7");
  var nowissueResult = issuerange.getValue()
  
  var solvedrange = ss.getRange("F7");
  var nowSolvedResult = solvedrange.getValue();
  
  var checkingrange = ss.getRange("H7");
  var nowCheckingResult = checkingrange.getValue();

  var notissuerange =ss.getRange("F9");
  var notissueResult = notissuerange.getValue();

  var newthingrange = ss.getRange("D9");
  var newthingResult = newthingrange.getValue();
  
  var today = new Date();
  var day = today.getDay();

 
 // 메일 보낼 주소 리스트
  var maillist = ["INPUT EMAIL ADDRESS"]
  // 메일 제목
  var title = "CDR 정합성 검사현황 자동 알림 메일입니다."; 
  
  // 메일 본문
  var body =
  "금월 CDR 정합성 테스트 결과 일일 보고"  +
  "\n----------------------------------------------------------"+
  "\n검사한 파일 개수 : "+ nowTestResult +
  "\n이슈 파일 개수 : " + nowissueResult +
  "\n해결됨 : " + nowSolvedResult +
  "\n이슈 아님: " + notissueResult +
  "\n확인중 : " +nowCheckingResult+
  "\n새기능 :" +newthingResult+
  "\n현황 보고서 링크 : INPUTYOUR LINK";
   
if (0<day && day<6 ){ // 주말은 제외 12345 = 월화수목금
for (var i = 0; i < maillist.length; i++) {
  MailApp.sendEmail(maillist[i],title,body); 
}
}
}
 
