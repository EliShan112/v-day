$(document).ready(function() {
    var texts = [
        {
            h2: 'Itni himmat Huh?',
            h3: 'Aaj to nhi hone dunga ye XD'
        },
        {
            h2: 'Aaj valentine hai',
            h3: 'Aur mujhe nhi bilkul nhi sunna XD'
        },
        {
            h2: 'Aaj ye button kaam nhi karne wala XD',
            h3: 'Maine ise band kar diya aaj ke liye XD'
        },
        {
            h2: "Happy valentine day Darling ^.^",
            h3: "Tum bhi mujhe bolna haan XD"
        },
        {
            h2: "Jaakar dusra button dabao XD",
            h3: "Main button ko move karne wala system bana raha tha but wo system sirf laptop pe chalta hai, isliye yahan faaltu bakwas kar raha hun XD"
        }
    ];

    var textIndex = 0; // Variable to store the current index

    function updatePopup() {
        // Update the inner text of the h2 and h3 elements inside the current pop-up
        var currentText = texts[textIndex];
        $('.popup-wrap:first').find('h2').text(currentText.h2);
        $('.popup-wrap:first').find('h3').text(currentText.h3);
    }

    $('.popup-btn').click(function(e) {
        $('.popup-wrap').fadeIn(500);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');
        e.preventDefault();
    });

    $('.popup-close').click(function(e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');
        e.preventDefault();
    });

    $('#next').click(function(e) {
        // Increment the textIndex
        textIndex++;

        // Update the popup
        updatePopup();

        // Check if textIndex surpasses the maximum index value
        if (textIndex >= texts.length - 1) {
            // Disable the button to prevent further iteration
            $(this).prop('disabled', true);
        }

        e.preventDefault();
    });

    // Initially update the popup
    updatePopup();
});
