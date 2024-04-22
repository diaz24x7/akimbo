$(document).ready(function () {
    // Función para cambiar la clase del div cuando esté en XS
    function cambiarClaseSegunTamanioPantalla() {

        var mWidth = $(window).width();

        var banner = $('#banner');
        var bannerRow = $('#banner .row');
        var bannerRowCol = $('#banner .row .col');
        var bannerRowCol12 = $('#banner .row .col-12');

        var section1 = $('#section1')
        var section1Div = $(section1.children('div'));
        var section1DivChild = $($(section1Div[0]).children('div'));
        var dropdownSection1Button = $(".dropdownSection1 button")
        var dropdownSection1Ult = $(".dropdownSection1 ul")

        var section2 = $('#section2')
        var section2Div = $(section2.children('.row'));
        var section2DivChild = $($(section2Div[0]).children('div'));


        banner.removeClass('Banner_201_Mobile').addClass('Banner_201_Desktop');


        switch (true) {
            case (mWidth > 0 && mWidth <= 630):
                banner.removeClass('Banner_201_Desktop').addClass('Banner_201_Mobile');
                bannerRow.removeClass().addClass('row gap-4 mb-1');
                bannerRowCol.each(function (_, element) {
                    $(element).removeClass('col').addClass('col-12');
                });
                console.log("0")
                
                dropdownSection1Button.removeClass('offset-2').addClass('offset-1')
                dropdownSection1Button.removeClass('mb-5').addClass('mb-0')
                dropdownSection1Button.removeClass('col-8').addClass('col-10')
                dropdownSection1Ult.removeClass('col-8').addClass('col-10')
                
                break;
            case (mWidth > 630 && mWidth <= 680):
                bannerRow.removeClass().addClass('row');
                console.log("1")
                
                dropdownSection1Button.removeClass('offset-2').addClass('offset-1')
                dropdownSection1Button.removeClass('mb-5').addClass('mb-0')
                dropdownSection1Button.removeClass('col-8').addClass('col-10')
                dropdownSection1Ult.removeClass('col-8').addClass('col-10')
                
                break;
            case (mWidth > 680 && mWidth <= 930):
                bannerRow.removeClass().addClass('row mb-3');
                console.log("2")
                
                dropdownSection1Button.removeClass('offset-2').addClass('offset-1')
                dropdownSection1Button.removeClass('mb-5').addClass('mb-0')
                dropdownSection1Button.removeClass('col-8').addClass('col-10')
                dropdownSection1Ult.removeClass('col-8').addClass('col-10')
                
                break;
            case (mWidth > 930):
                bannerRow.removeClass().addClass('row gap-5 mb-3');
                console.log("3")

                dropdownSection1Button.removeClass('offset-1').addClass('offset-2')
                dropdownSection1Button.removeClass('mb-0').addClass('mb-5')
                dropdownSection1Button.removeClass('col-10').addClass('col-8')
                dropdownSection1Ult.removeClass('col-10').addClass('col-8')

                break;
        }

        if (mWidth > 630) {
            bannerRowCol12.each(function (_, element) {
                $(element).removeClass('col-12').addClass('col');
            });

            section1.removeClass().addClass('row gap-3')
            $(section1Div[0]).removeClass().addClass('col-6 offset-1');
            $(section1Div[1]).removeClass().addClass('col-4 py-4');
            $(section1DivChild[0]).removeClass().addClass('row gap-4 py-4');
            $(section1DivChild[1]).removeClass().addClass('row gap-4 pb-4');

            section2.removeClass().addClass('col-10 offset-1')
            section2Div.removeClass().addClass('row gap-4')
            section2DivChild.removeClass().addClass('col p-0')
        } else {
            section1.removeClass().addClass('row')
            $(section1Div[0]).removeClass().addClass('col-12');
            $(section1Div[1]).removeClass().addClass('col-12 p-4');
            $(section1DivChild[0]).removeClass().addClass('row gap-4 p-4');
            $(section1DivChild[1]).removeClass().addClass('row gap-4 px-4');

            section2.removeClass().addClass('col')
            section2Div.removeClass().addClass('row p-2 g-4')
            section2DivChild.removeClass().addClass('col-6')

        }
    }

    // Llama a la función cuando se carga la página
    cambiarClaseSegunTamanioPantalla();

    // Llama a la función cuando se redimensiona la ventana
    $(window).resize(cambiarClaseSegunTamanioPantalla);
});