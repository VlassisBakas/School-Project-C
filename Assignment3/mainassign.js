$("#AddAssignment").submit(function (e) {
    e.preventDefault();
    var title = $("#atitle").val();
    var desc = $("#adescription").val();
    var subd = $("#asubmission").val();
    var oral = $("#aoral").val();
    var total = $("#atotal").val();


    $(".assignment-table tbody").append("<tr at='" + title + "' ad='" + desc + "' as='" + subd + "' ao='" + oral + "' ato='" + total + "'> <td>" + title + "</td> <td>" + desc + "</td> <td>"
        + subd + "</td><td>" + oral + "</td><td>" + total +
        "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");

});
//$("#save").click(function (e) {

//    $("#AddAssignment").collapse("toggle");

//});

$("#assignmentbody").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var ttl = $(this).parents("tr").attr('at');
    var des = $(this).parents("tr").attr('ad');
    var sd = $(this).parents("tr").attr('as');
    var or = $(this).parents("tr").attr('ao');
    var to = $(this).parents("tr").attr('ato');

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_title" value="' + ttl + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_desc" value="' + des + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_subdate" value="' + sd + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_oral" value="' + or + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_total" value="' + to + '">');

    $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});




$("body").on("click", ".btn-cancel", function () {
    var ttl = $(this).parents("tr").attr('at');
    var des = $(this).parents("tr").attr('ad');
    var sd = $(this).parents("tr").attr('as');
    var or = $(this).parents("tr").attr('ao');
    var to = $(this).parents("tr").attr('ato')

    $(this).parents("tr").find("td:eq(0)").text(ttl);
    $(this).parents("tr").find("td:eq(1)").text(des);
    $(this).parents("tr").find("td:eq(2)").text(sd);
    $(this).parents("tr").find("td:eq(3)").text(or);
    $(this).parents("tr").find("td:eq(4)").text(to);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$("body").on("click", ".btn-update", function () {
    var ttl = $(this).parents("tr").find("#atitle").val();
    var des = $(this).parents("tr").find("#adescription").val();
    var sub = $(this).parents("tr").find("#asubmission").val();
    var or = $(this).parents("tr").find("#aoral").val();
    var tot = $(this).parents("tr").find("#atotal").val();

    $(this).parents("tr").find("td:eq(0)").text(ttl);
    $(this).parents("tr").find("td:eq(1)").text(des);
    $(this).parents("tr").find("td:eq(2)").text(sub);
    $(this).parents("tr").find("td:eq(3)").text(or);
    $(this).parents("tr").find("td:eq(3)").text(tot);

    $(this).parents("tr").attr('at', ttl);
    $(this).parents("tr").attr('ad', des);
    $(this).parents("tr").attr('as', sub);
    $(this).parents("tr").attr('ao', or);
    $(this).parents("tr").attr('ato', tot);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});