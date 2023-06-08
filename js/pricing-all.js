// 開起選單
$('#menuIcon').click(function(e) {
    $('.menu-mobile').toggleClass('show');
    $('.menu-icon').toggleClass('no-show');
    $('.close-icon').toggleClass('show');
});




// 常見問題
$('.faqCard').click(function(e) {
    var faqCard = $(this);
    faqCard.find('.add-icon').toggleClass('no-show');
    faqCard.find('.remove-icon').toggleClass('show');
    faqCard.find('.faq-content').toggleClass('show');
});




// 開起選單
$('.order-btn').click(function(e) {
    $('.order-menu').toggleClass('show');
});

$('.filter-btn').click(function(e) {
    $('.filter-menu').toggleClass('show');
});


// 取消所有勾勾、顯示自己的勾勾、切換篩選文字
let filterBtnTextString = '';
let aiChoiceText = '';
let hashtagChoiceText = '';
$('.aiChoice').click(function(e) {
    e.preventDefault();
    let aichecks = document.getElementsByClassName('aiCheck');
    for (var i = 0; i < aichecks.length; i++) {
        aichecks[i].classList.remove('checked');
    }
    var aichoice = $(this);
    aichoice.find('.aiCheck').toggleClass('checked');
    aiChoiceText = aichoice.find('.choiceBtnText').text()
    let filterBtnTextString = aiChoiceText;
    $('.filter-btnText').text(filterBtnTextString);
    let filterIcon = document.getElementById('filterIcon');
    filterIcon.classList.add('chosen');
});

$('.hashtagChoice').click(function(e) {
    e.preventDefault();
    let hashtagchecks = document.getElementsByClassName('hashtagCheck');
    for (var i = 0; i < hashtagchecks.length; i++) {
        hashtagchecks[i].classList.remove('checked');
    }
    var hashtagchoice = $(this);
    hashtagchoice.find('.hashtagCheck').toggleClass('checked');
    hashtagChoiceText = hashtagchoice.find('.choiceBtnText').text()
    filterBtnTextString = aiChoiceText + "、" + hashtagChoiceText;
    $('.filter-btnText').text(filterBtnTextString);
    
    $('.aiChoice').click(function(e) {
        e.preventDefault();
        let aichecks = document.getElementsByClassName('aiCheck');
        for (var i = 0; i < aichecks.length; i++) {
            aichecks[i].classList.remove('checked');
        }
        var aichoice = $(this);
        aichoice.find('.aiCheck').toggleClass('checked');
        aiChoiceText = aichoice.find('.choiceBtnText').text()
        let filterBtnTextString = aiChoiceText + "、" + hashtagChoiceText;
        $('.filter-btnText').text(filterBtnTextString);
    });
});




// 切換由新到舊按鈕文字
$('.new-to-old').click(function(e) {
    e.preventDefault();
    $('.order-menu').toggleClass('show');
    $('.order-btnText').text('由新到舊');
});
  
$('.old-to-new').click(function(e) {
    e.preventDefault();
    $('.order-menu').toggleClass('show');
    $('.order-btnText').text('由舊到新');
});



// scroll to top
$("#scrollToTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 450);
});