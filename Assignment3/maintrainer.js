$("#AddTrainer").submit(function (e) {
    e.preventDefault();
    var fname = $("#tfname").val();
    var lname = $("#tlname").val();
    var subj = $("#tsubject").val();
    


    $(".trainer-table tbody").append("<tr tfname='" + fname + "' tlname='" + lname + "' tsubj='" + subj + "' > <td>" + fname + "</td> <td>" + lname + "</td> <td>"
        + subj + "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");

});
//$("#save").click(function (e) {

//    $("#AddTrainer").collapse("toggle");

//});

$("#trainerbody").on("click", ".btn-delete", function () {
    $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
    var fn = $(this).parents("tr").attr('tfname');
    var ln = $(this).parents("tr").attr('tlname');
    var subj = $(this).parents("tr").attr('tsubj');
    

    $(this).parents("tr").find("td:eq(0)").html('<input name="edit_tfname" value="' + fn + '">');
    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_ltname" value="' + ln + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_subj" value="' + subj + '">');
    

    $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
    $(this).hide();
});




$("body").on("click", ".btn-cancel", function () {
    var fn = $(this).parents("tr").attr('tfname');
    var ln = $(this).parents("tr").attr('tlname');
    var subj = $(this).parents("tr").attr('tsubj');
   

    $(this).parents("tr").find("td:eq(0)").text(fn);
    $(this).parents("tr").find("td:eq(1)").text(ln);
    $(this).parents("tr").find("td:eq(2)").text(subj);
  

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
});



$("body").on("click", ".btn-update", function () {
    var fname = $(this).parents("tr").find("#tfname").val();
    var lname = $(this).parents("tr").find("#tlname").val();
    var subj = $(this).parents("tr").find("#tsubject").val();
    

    $(this).parents("tr").find("td:eq(0)").text(fname);
    $(this).parents("tr").find("td:eq(1)").text(lname);
    $(this).parents("tr").find("td:eq(2)").text(subj);
    

    $(this).parents("tr").attr('tfname', fname);
    $(this).parents("tr").attr('tlname', lname);
    $(this).parents("tr").attr('tsubj', subj);
    

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
});
