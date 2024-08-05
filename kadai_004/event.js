
  // HTMLが読み込まれた後
  $(window).on('load', function() {
    console.log('loadイベントが発生しました');
 });
  // スクロールした場合
  $(document).on('scroll', function() {
    console.log('scrollイベントが発生しました');
});