function showOverlay(title, numComplete, numTotal) {
    var percentage = numComplete / numTotal;
    console.log(percentage);
    var className = '';
    if (percentage <= 0.33) {
        className = 'zero-progress';
    } else if (percentage > 0.33 && percentage <= 0.66) {
        className = 'thirty-three-progress';
    } else {
        className = 'sixty-six-progress';
    }

    var buttons = [];
    if (Number(numComplete) === 0) {
        buttons = [
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'class-name',
                text: 'Button1',
                click: function($vexContent, event) {
                    window.location='http://www.example.com'; 
                }
            })
        ];
    } else {
        buttons = [
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'class-name',
                text: 'Button1',
                click: function($vexContent, event) {
                    window.location='http://www.example.com'; 
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'class-name',
                text: 'Button2',
                click: function($vexContent, event) {
                    console.log("Hello world");
                }
            }),
            $.extend({}, vex.dialog.buttons.NO, {
                className: 'class-name',
                text: 'Button3',
                click: function($vexContent, event) {
                    console.log("Hello world");
                }
            })
        ];
    }

    vex.dialog.open({
        buttons: buttons,
        input: [
            '<style>',
                '.vex-custom-field-wrapper {',
                    'margin: 1em 0;',
                '}',
                '.vex-custom-field-wrapper > label {',
                    'display: inline-block;',
                    'margin-bottom: .2em;',
                '}',
                '.topic-title {',
                    'font-weight: bold;',
                '}',
            '</style>',
            '<div>',
                '<h3 class="topic-title">' + title + '</h3>',
                '<div class="visible num-questions">',
                    '<p>' + numComplete + ' / ' + numTotal + ' problems done</p>',
                '</div>',
                '<div class="progress overlay">',
                    '<div class="progress-bar ' + className + '" role="progressbar" aria-valuenow="' + percentage + '"',
                    'aria-valuemin="0" aria-valuemax="100" style="width:' + percentage * 100 + '%">',
                    '</div><!-- progress-bar -->',
                '</div><!-- progress -->',
            '</div><!-- section-panel -->',
        ].join(''),
        onSubmit: function() {
        },
    });
}