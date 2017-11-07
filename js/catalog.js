var gModelsCatalogSelector = '.modelsCatalog';
var gPortfolioSelector = '.portfolioItems';
var gContactSelector = '#contact';

var gCatalogItems = [{
    id: 'mineSweeper',
    name: 'Mine Sweeper',
    title: 'Better Swipe those mines!',
    desc: 'The Proto-Type Version Mine Sweeper',
    publishedAt: 'November 2017',
    labels: ['mine', 'sweeper', 'table', 'matrixes'],
    img: 'img/catalog/mine-sweeper.png'
},
{
    id: 'balloonPop',
    name: 'Balloon Pop',
    title: 'Better Pop Those Balloons!',
    desc: 'Balloon Popper On Click ',
    publishedAt: 'November 2017',
    labels: ['balloon', 'pop'],
    img: 'img/catalog/balloon-pop.png'
},
{
    id: 'inPicture',
    name: 'In Picture',
    title: 'Answer Questions About The Picutes!',
    desc: 'Pictures Change As You Answer Correctly',
    publishedAt: 'November 2017',
    labels: ['in', 'picture', 'question', 'correctly'],
    img: 'img/catalog/in-picture.png'
},
{
    id: 'guessNums',
    name: 'Guess Nums',
    title: 'Guess Numbers!',
    desc: 'Guess Number That Were Generated Randomly',
    publishedAt: 'November 2017',
    labels: ['guess', 'nums', 'random'],
    img: 'img/catalog/touch-nums.png'
},
{
    id: 'chess',
    name: 'Chess',
    title: 'Chess Board',
    desc: 'See Where Chess Pieces Move By Chess Rules',
    publishedAt: 'November 2017',
    labels: ['chess', 'pieces', 'movement'],
    img: 'img/catalog/chess.png'
},
{
    id: 'calculator',
    name: 'Calculator',
    title: 'Online Calculator',
    desc: 'Calculate Things That Need To Be Calculated ',
    publishedAt: 'November 2017',
    labels: ['calculator', 'numbers', 'result'],
    img: 'img/catalog/calc.png'
},
];

function renderCatalogModals(selecetor) {//needs to get a selecetor and add img feild to the object-make the images too
    var strCatalogItems = '';
    for (var i = 0; i < gCatalogItems.length; i++) {
        strCatalogItems +=
            '<div class="portfolio-modal modal fade" id="' + gCatalogItems[i].id + '" tabindex="-1" role="dialog" aria-hidden="true">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="close-modal" data-dismiss="modal">' +
            '<div class="lr">' +
            '<div class="rl"></div>' +
            '</div>' +
            '</div>' +
            '<div class="container">' +
            '<div class="row">' +
            '<div class="col-lg-8 mx-auto">' +
            '<div class="modal-body">' +
            '<h2>' + gCatalogItems[i].name + '</h2>' +
            '<p class="item-intro text-muted">' + gCatalogItems[i].title + '.</p>' +
            '<img class="img-fluid d-block mx-auto" src="' + gCatalogItems[i].img + '" alt="">' +
            '<p>' + gCatalogItems[i].desc + '</p>' +
            '<ul class="list-inline">' +
            '<li>' + gCatalogItems[i].publishedAt + '</li>' +
            '<li>Lables: ' + gCatalogItems[i].labels + '</li>' +
            '<li>Category: Awesome</li>' +
            '</ul>' +
            '<button class="btn btn-primary" data-dismiss="modal" type="button" onclick="">' +
            '<i class="fa fa-times"></i>' +
            'Close Project</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    }
    var elCatalog = document.querySelector(selecetor);
    elCatalog.innerHTML = strCatalogItems;
}
function linkToEmail(){
    
}

function renderPortfolio(selecetor) {
    var strPortfolioItems = '';
    for (var i = 0; i < gCatalogItems.length; i++) {
        strPortfolioItems +=
            '<div class="col-md-4 col-sm-6 portfolio-item">' +
            '<a class="portfolio-link" data-toggle="modal" href="#' + gCatalogItems[i].id + '">' +
            '<div class="portfolio-hover">' +
            '<div class="portfolio-hover-content">' +
            '<i class="fa fa-plus fa-3x"></i>' +
            '</div>' +
            '</div>' +
            '<img class="img-fluid" src="' + gCatalogItems[i].img + '" alt="">' +
            '</a>' +
            '<div class="portfolio-caption">' +
            '<h4>' + gCatalogItems[i].name + '</h4>' +
            '<p class="text-muted">' + gCatalogItems[i].title + '</p>' +
            '</div>' +
            '</div>';

    }
    elPortfolio = document.querySelector('.portfolioItems');
    elPortfolio.innerHTML = strPortfolioItems;

}

function renderContactMe(selector) {

    var strContactMe = '<form>' +
        '<div class="form-group">' +
        '<label for="exampleFormControlInput1">Email </label>' +
        '<input type="email" class="form-control" id="email" placeholder="name@example.com">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="exampleFormControlInput1">Subject </label>' +
        '<input type="email" class="form-control" id="subject" placeholder="Hiring/Employment">' +
        '</div>' +
        '<div class="form-check form-check-inline">' +
        '<label class="form-check-label">' +
        '<input class="form-check-input" type="checkbox" id="isUrgent" value="true"> Is Urgent?' +
        '</label>' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="exampleFormControlTextarea1">Message Body</label>' +
        '<textarea class="form-control" id="messageBody" rows="9"></textarea>' +
        '</div>' +
        '<button type="button" class="btn btn-dark" onclick="emailSubmition()">Submit</button>' +
        '</form>';
    elContact = document.querySelector(selector);
    elContact.innerHTML = strContactMe;
}
function emailSubmition(){
    var emailAdrees = document.querySelector('#email').value;
    var subject = document.querySelector('#subject').value;    
    var messageBody = document.querySelector('#messageBody').value;
    var isUrgent = document.querySelector('#isUrgent').value;
    isUrgent? messageBody+='\n'+'THIS IS AN URGENT MESSAGE' : messageBody+= '';

    window.open('https://mail.google.com/mail/?view=cm&fs=1&to='+emailAdrees+'&su='+subject+'&body='+messageBody);

}


function init() {
    renderContactMe(gContactSelector);
    renderPortfolio(gPortfolioSelector);
    renderCatalogModals(gModelsCatalogSelector);
}

