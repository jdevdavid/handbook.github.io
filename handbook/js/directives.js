// Главное меню
app.directive("ngListMain", function(){
    return {
        restrict : "A",
        template : ""
        +"<div ng-repeat = 'x in jsonData.data.listMain' type='button' class='knopka'>"
        + "<a href='index.html#!/{{x.id}}'>{{x.name}}</a></div>"
    };
    
});

// <div type='button' class='knopka'><a href='index.html#!/{{listMain[0]}}'>{{listMainName[0]}}</a></div>

// Меню раздела 1
app.directive("ngList1", function(){
    return {
    	link: function (scope) {
            scope.title = 'меню';
        },
        restrict : "A",
        template : "<div ng-repeat = 'x in jsonData.data.list1' type='button' class='knopka'>"
        + "<a href='index.html#!/{{x.id}}'>{{x.name}}</a></div>"
    };
});

// Меню раздела 2
app.directive("ngList2", function(){
    return {
        restrict : "A",
        template : "<div ng-repeat = 'x in jsonData.data.list2' type='button' class='knopka'>"
        + "<a href='index.html#!/{{x.id}}'>{{x.name}}</a></div>"
    };
});

// Меню раздела 3
app.directive("ngList3", function(){
    return {
        restrict : "A",
        template : "<div ng-repeat = 'x in jsonData.data.list3' type='button' class='knopka'>"
        + "<a href='index.html#!/{{x.id}}'>{{x.name}}</a></div>"
    };
});

// Меню раздела 4
app.directive("ngList4", function(){
    return {
        restrict : "A",
        template : "<div ng-repeat = 'x in jsonData.data.list4' type='button' class='knopka'>"
        + "<a href='index.html#!/{{x.id}}'>{{x.name}}</a></div>"
    };
});


// Возврат в меню раздела из статьи
app.directive("ngReturnToList1", function(){
    return {
        restrict : "A",
        template : "<div type='button' class='knopka'>"
        + "<a href='index.html#!/{{jsonData.data.listMain[0].id}}'>{{jsonData.data.Up}}</a></div>"
    };
});

// Возврат в меню раздела из статьи
app.directive("ngReturnToList2", function(){
    return {
        restrict : "A",
        template : "<div type='button' class='knopka'>"
        + "<a href='index.html#!/{{jsonData.data.listMain[1].id}}'>{{jsonData.data.Up}}</a></div>"
    };
});

// Возврат в меню раздела из статьи
app.directive("ngReturnToList3", function(){
    return {
        restrict : "A",
        template : "<div type='button' class='knopka'>"
        + "<a href='index.html#!/{{jsonData.data.listMain[2].id}}'>{{jsonData.data.Up}}</a></div>"
    };
});

// Возврат в меню раздела из статьи
app.directive("ngReturnToList4", function(){
    return {
        restrict : "A",
        template : "<div type='button' class='knopka'>"
        + "<a href='index.html#!/{{jsonData.data.listMain[3].id}}'>{{jsonData.data.Up}}</a></div>"
    };
});
