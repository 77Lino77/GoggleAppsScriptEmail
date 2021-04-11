function alertissue() {
  // 메일주소
  var mail = "INPUT EMAIL ADDRESS";
  // 메일 제목
  var title = "CDR 정합성 테스트 새로운 발견사항이 업데이트 되었습니다. ";
  // 메일 본문
  var body ="테스터가 새로운 이슈를 발견하였습니다. 자세한 내용은 아래 보고서 링크를 참조하세요. /n 구글 스프레드 시트 링크 : INPUT_LINK";
  MailApp.sendEmail(mail,title,body);
  
}
