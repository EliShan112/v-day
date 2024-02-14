$(document).ready(function() {
    var texts = [
        {
            h2: 'I LOVE YOU DARLING^^ 💌',
            h3: 'Kuchh aur to de nhi paya, to yahi de deta hun XD'
        },
        {
            h2: 'Giving you ring and wearing it in your finger*',
            h3: 'Meri taraf se ye ring aapke liye KEKE'
        },
        {
            h2: 'Ab you tum meri darling, Hena? XD',
            h3: 'Ab mujhe honey bolona XD'
        },
        {
            h2: 'Aao, hug karo mujhe ab XD',
            h3: 'Hugging you tightly*'
        },
        {
            h2: "Whatapp pe hug karna hai?",
            h3: "Aao, video call pe karo huggy XD"
        },
        {
            h2: "Haan, aur ab cut kar do ise XD",
            h3: "Sigh, alag se cut wala banane main time waste hota, to chup chap se upar wala button se cut kar do XD"
        }
        // Add more text objects as needed
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
