$("#Addtpc").submit(function (e) {
    e.preventDefault();
    var title = $("#tpctitle").val();
    var stream = $("#tpcstream").val();
    var type = $("#tpctype").val();
    var fname = $("#tpcfname").val();
    var lname = $("#tpclname").val();


    $(".tpc-table tbody").append("<tr spcfn='" + fname + "' spcln='" + lname + "' spcttl='" + title + "' spcstr='" + stream + "' spctp='" + type + "'> <td>" + fname + "</td> <td>" + lname + "</td> <td>"
        + title + "</td><td>" + stream + "</td><td>" + type +
        "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");

//});
//$("#save").click(function (e) {

//    $("#Addtpc").collapse("toggle");

//});


$("#tpcbody").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var fn = $(this).parents("tr").attr('spcfn');
    var ln = $(this).parents("tr").attr('spcln');
    var ttl = $(this).parents("tr").attr('spcttl');
    var str = $(this).parents("tr").attr('spcstr');
    var tp = $(this).parents("tr").attr('spctp');

    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_title" value="' + ttl + '">');
    $(this).parents("tr").find("td:eq(3)").html('<input name="edit_stream" value="' + str + '">');
    $(this).parents("tr").find("td:eq(4)").html('<input name="edit_type" value="' + tp + '">');
    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_fn" value="' + fn + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_ln" value="' + ln + '">');

    $(this).parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});




$("body").on("click", ".btn-cancel", function () {
    var fn = $(this).parents("tr").attr('spcfn');
    var ln = $(this).parents("tr").attr('spcln');
    var ttl = $(this).parents("tr").attr('spcttl');
    var str = $(this).parents("tr").attr('spcstr');
    var tp = $(this).parents("tr").attr('spctp');

    $(this).parents("tr").find("td:eq(0)").text(fn);
    $(this).parents("tr").find("td:eq(1)").text(ln);
    $(this).parents("tr").find("td:eq(2)").text(ttl);
    $(this).parents("tr").find("td:eq(3)").text(str);
    $(this).parents("tr").find("td:eq(4)").text(tp);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$("body").on("click", ".btn-update", function () {
    var fn = $(this).parents("tr").find("#tpcfname").val();
    var ln = $(this).parents("tr").find("#tpclname").val();
    var ttl = $(this).parents("tr").find("#tpctitle").val();
    var str = $(this).parents("tr").find("#tpcstream").val();
    var tp = $(this).parents("tr").find("#tpctype").val();

    $(this).parents("tr").find("td:eq(0)").text(fn);
    $(this).parents("tr").find("td:eq(1)").text(ln);
    $(this).parents("tr").find("td:eq(2)").text(ttl);
    $(this).parents("tr").find("td:eq(3)").text(str);
    $(this).parents("tr").find("td:eq(4)").text(tp);

    $(this).parents("tr").attr('spcfn', fn);
    $(this).parents("tr").attr('spcln', ln);
    $(this).parents("tr").attr('spcttl', ttl);
    $(this).parents("tr").attr('spcstr', str);
    $(this).parents("tr").attr('spctp', tp);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});