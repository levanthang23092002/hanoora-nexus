$(document).ready(function () {
    $("#contact_form").submit(function (event) {
        var that = $(this);
        $(".form_error").hide();
        $(".form_res_success").hide();
        $(".form_res_error").hide();
        event.preventDefault();

        if (!validateForm(that)) {
            return;
        }

        var button = that.find("button[type='submit']");
        var originalText = button.text();
        button.text("Sending...");

        setTimeout(function () {
            button.text(originalText);
            that[0].reset();
            $("#message").html(
                lang === "vi"
                    ? "Tin nhắn"
                    : lang === "de"
                    ? "Nachricht"
                    : "Message"
            );
            $(".form_res_success").show();
        }, 600);
    });

    function validateForm(form) {
        var ret = true;
        var name = form.find("input#name").val();
        var email = form.find("input#email").val();
        var message = form.find("#message").val();
        if (name.length < 2) {
            $(".form_name").show();
            ret = false;
        }
        if (!validateEmail(email)) {
            $(".form_email").show();
            ret = false;
        }
        if (!message || message.length === 0 || message === "Message" || message === "Tin nhắn" || message === "Nachricht") {
            $(".form_message").show();
            ret = false;
        }
        return ret;
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});
