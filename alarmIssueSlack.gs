function alarmSlack() {
  var salckUrl = "https://hooks.slack.com/services/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"; // slack test채널의 webhook url
  
  var ss= SpreadsheetApp.getActiveSpreadsheet().getSheetByName("실시간 테스트 현황판"); // 스프레드 시트 특정 탭에 접근
  
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
  
  function getWorldTime(tzOffset) { // 24시간제
   var now = new Date();
   var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
   now.setTime(tz);


   var s =
    leadingZeros(now.getFullYear(), 4) + '-' +
    leadingZeros(now.getMonth() + 1, 2) + '-' +
    leadingZeros(now.getDate(), 2) + ' ' 

    // leadingZeros(now.getHours(), 2) + ':' +
    // leadingZeros(now.getMinutes(), 2) + ':' +
    // leadingZeros(now.getSeconds(), 2);

   return s;
}


 function leadingZeros(n, digits) {
   var zero = '';
   n = n.toString();

   if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
   }
   return zero + n;
 }

  var today =getWorldTime(+9);
  var totalText = today +"의 CDR 정합성 테스트 결과 일일 보고"  +
  "\n----------------------------------------------------------------------"+
  "\n이번달 확인한 파일 개수 : "+ nowTestResult +
  "\n이슈 파일 개수 : " + nowissueResult +
  "\n해결됨 : " + nowSolvedResult +
  "\n이슈 아님: " + notissueResult +
  "\n확인중 : " +nowCheckingResult+
  "\n새기능 : " +newthingResult+
  "\n실시간 현황 스프레드 시트 링크 : https://docs.google.com/spreadsheets/d/1Zl0Cb4wTNC1koPXCidR0RERN6ld2mKxGD8jNEKZQqhc/edit#gid=1360797914";
 
  var msg = {"payload" : '{"text" : "' +totalText+'"}'};
  var option ={
    "method" : "post",
    "payload" : msg
  }
  
  // UrlFetchApp.fetch(salckUrl,option)
  Logger.log(totalText)
}