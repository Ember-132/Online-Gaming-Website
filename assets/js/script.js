$(document).ready(() => {

    // Contact Me Prompt
    $("input[type=radio]").change(() => {
        const method = $("input[type=radio]:checked").val();
        if (method == "text"){
            $(".address_control input,.address_control select").prop("disabled",true);
            $(".address_control span,.country_control span").text("");
            $(".phone_control input").prop("disabled",false);
            $(".phone_control span").text("*");

        } else if (method == "email" || method == "none"){
            $(".address_control input,.address_control select,.phone_control input").prop("disabled",true);
            $(".address_control span,.country_control span,.phone_control span").text("");

        } else if (method == "post"){
            $(".address_control input,.address_control select").prop("disabled",false);
            $(".address_control span,.country_control span,.phone_control span").text("*");
            $(".phone_control input").prop("disabled",true);
            $(".phone_control span").text("");
        };
    })

    $("input[name='radio']:checked").trigger("change");


    // Validation before submission

    $("#member_form").submit(event => {

        let isValid = true;
        
        // first name validation
    
        const first_name = $("#first_name").val().trim();
        if (first_name == ""){
            $("#first_name").next().text("This field is required");
            isValid = false;
        } else {
            $("#first_name").next().text("");
            $("#first_name").val(first_name);
        }
        
        // last name validation
        const last_name = $("#last_name").val().trim();
        if (last_name == ""){
            $("#last_name").next().text("This field is required");
            isValid = false;
        } else {
            $("#last_name").next().text("");
            $("#last_name").val(last_name);
        }

        // email validation

        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == ""){
            $("#email").next().text("This field is required");
            isValid = false;
        } else if (!emailPattern.test(email)){
            $("#email").next().text("Must be a valid email");
            isValid = false;
        } else {
            $("#email").next().text("");
            $("#email").val(email);            
        }
        
        // password validation
        
        const password = $("#password").val().trim();
        if (password == ""){
            $("#password").next().text("This field is required");
            isValid = false;
        } else if (password.length < 6){
            $("#password").next().text("Password needs to be at least 6 characters");
            isValid = false;
        } else {
            $("#password").next().text("");
            $("#password").val(password); 
        }
        
        // password confirm validation

        const verified_password = $("#verify").val().trim();
        if (verified_password == ""){
            $("#verify").next().text("This field is required");
            isValid = false;
        } else if (verified_password !== password){
            $("#verify").next().text("Passwords need to match");
            isValid = false;
        } else {
            $("#verify").next().text("");
            $("#verify").val(verified_password);
        }
        
        // phone validation

        if (!$("#phone").attr("disabled")){
            const phonePattern = /^\d{1,11}$/;
            const phone = $("#phone").val().trim();
            if (phone == ""){
                $("#phone").next().text("This field is required");
                isValid = false;
            } else if (!phonePattern.test(phone)){
                $("#phone").next().text("Must be a valid phone number");
                isValid = false;
            } else {
                $("#phone").next().text("");
                $("#phone").val(phone);
            }};

        // address validation
        
        if (!$("#address1").attr("disabled")){
            const address1 = $("#address1").val().trim();
            const address2 = $("#address2").val().trim();
            const city = $("#city").val().trim();
            const state = $("#state").val().trim();
            const zip = $("#zip").val().trim();
            const country = $("#select").val().trim();

            if (address1 == ""){
                $("#address1").next().text("This field is required");
                isValid = false;
            } else {
                $("#address1").next().text("");
                $("#address1").val(address1);
            }
            if (city == ""){
                $("#city").next().text("This field is required");
                isValid = false;
            } else {
                $("#city").next().text("");
                $("#city").val(city);
            } 
            if (state == ""){
                $("#state").next().text("This field is required");
                isValid = false;
            } else {
                $("#state").next().text("");
                $("#state").val(state);
            } 
            if (zip == ""){
                $("#zip").next().text("This field is required");
                isValid = false;
            } else {
                $("#zip").next().text("");
                $("#zip").val(zip); 
            } 
            if (country == ""){
                $("#select").next().text("This field is required");
                isValid = false;
            } else {
                $("#select").next().text("");
                $("#select").val(country);
            } 
            
            $("#address2").val(address2);
        }

        // comments
        const comments = $("#comments").val().trim();
        $("#comments").val(comments);

        // accepted terms validation

        if (!$("#checkbox").prop("checked")) {
            $("#checkbox").next().next().text("Please confirm you accept the terms of service");
            isValid = false;
        } else {
            $("#checkbox").next().text("");
            
        }
                
        
        if (isValid == false){
            event.preventDefault();
        }
    })

    $("#member_form").on("reset", function () {
        $("#first_name").next().text("*");
        $("#last_name").next().text("*");
        $("#email").next().text("*");
        $("#password").next().text("*");
        $("#verify").next().text("*");
        $("#phone").next().text("*");
        $("#address1").next().text("");
        $("#city").next().text("");
        $("#state").next().text("");
        $("#zip").next().text("");
        $("#select").next().text("");
        $("#checkbox").next().next().text("*");

        $(".phone_control input").prop("disabled",false);
        $(".address_control input,.address_control select").prop("disabled",true);

        $("#first_name").focus();
    })


})