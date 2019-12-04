






    $("#AddButton").submit(function (e) {
        e.preventDefault();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var dob = $("#dob").val();
        var tf = $("#tfees").val();

       


        
       


        $(".student-table tbody").append("<tr stfname='" + fname + "' stlname='" + lname + "' stdob='" + dob + "' sttf='" + tf + "'> <td>" + fname + "</td> <td>" + lname + "</td> <td>"
            + dob + "</td><td>" + tf +
            "</td><td><button class='btn btn-info btn-xs btn-edit'> Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td ></tr > ");


       
     });



    $("#studentbody").on("click", ".btn-delete", function () {
        $(this).parents("tr").remove();
    });

    $("body").on("click", ".btn-edit", function () {
        var fn = $(this).parents("tr").attr('stfname');
        var ln = $(this).parents("tr").attr('stlname');
        var dobr = $(this).parents("tr").attr('stdob');
        var tfe = $(this).parents("tr").attr('sttf');

        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_fname" value="' + fn + '">');
        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_lname" value="' + ln + '">');
        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_dob" value="' + dobr + '">');
        $(this).parents("tr").find("td:eq(3)").html('<input name="edit_tf" value="' + tfe + '">');

        $(this).parents("tr").find("td:eq(4)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>")
        $(this).hide();
    });




    $("body").on("click", ".btn-cancel", function () {
        var fn = $(this).parents("tr").attr('stfname');
        var ln = $(this).parents("tr").attr('stlname');
        var dobr = $(this).parents("tr").attr('stdob');
        var tfe = $(this).parents("tr").attr('sttf');

        $(this).parents("tr").find("td:eq(0)").text(fn);
        $(this).parents("tr").find("td:eq(1)").text(ln);
        $(this).parents("tr").find("td:eq(2)").text(dobr);
        $(this).parents("tr").find("td:eq(3)").text(tfe);

        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-update").remove();
        $(this).parents("tr").find(".btn-cancel").remove();
    });



    $("body").on("click", ".btn-update", function () {
        var fname = $(this).parents("tr").find("#fname").val();
        var lname = $(this).parents("tr").find("#lname").val();
        var dob = $(this).parents("tr").find("#dob").val();
        var tf = $(this).parents("tr").find("#tf").val();

        $(this).parents("tr").find("td:eq(0)").text(fname);
        $(this).parents("tr").find("td:eq(1)").text(lname);
        $(this).parents("tr").find("td:eq(2)").text(dob);
        $(this).parents("tr").find("td:eq(3)").text(tf);

        $(this).parents("tr").attr('stfname', fname);
        $(this).parents("tr").attr('stlname', lname);
        $(this).parents("tr").attr('stdob', dob);
        $(this).parents("tr").attr('sttf', tf);

        $(this).parents("tr").find(".btn-edit").show();
        $(this).parents("tr").find(".btn-cancel").remove();
        $(this).parents("tr").find(".btn-update").remove();
    });

    //$("#save").click(function (e) {

    //    $("#AddButton").collapse("toggle");

    //});





//$('form[id="AddButton"]').validate({
//    rules: {
//        fname: 'required',
//        lname: 'required',
//     
//    },
//    messages: {
//        fname: 'This field is required',
//        lname: 'This field is required',
//        
//    },


//    submitHandler: function (form) {
//        form.submit()

//    }
//});








    //$('#AddButton').submit(function (e) {
    //    e.preventDefault();
    //    var fname = $("#fname").val();
    //    var lname = $("#lname").val();
    //    var dob = $("#dob").val();
    //    var tf = $("#tfees").val();

    //    $(".error").remove();

    //    if (fname.length < 2) {
    //        $('#fname').after('<span class="error">This field is required</span>');
    //    }
    //    if (lname.length < 2) {
    //        $('#lname').after('<span class="error">This field is required</span>');
    //    }
    //    if (dob.length < 4) {
    //        $('#dob').after('<span class="error">This field is required</span>');
    //        if (tf.length < 4) {
    //            $('#tf').after('<span class="error">This field is required</span>');
    //        } else {
    //            var regEx = /[A-Z][a-z]/;
    //            var validlname = regEx.test(lname);
    //            if (!validlname) {
    //                $('#lname').after('<span class="error">Enter a valid lastname</span>');
    //            }
    //        }


    //    }

    // });





