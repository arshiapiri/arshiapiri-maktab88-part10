$(() => {
    $('#reqContainer, #resContainer,#codeCantainer').hide();
    $('#clickBtn').attr('disabled', 'true')
    $('#typeSelect').on({
        change: function () {
            $('#reqContainer, #resContainer,#codeCantainer').hide();
            $('#clickBtn').attr('disabled', 'true');

            if ($('#typeSelect').val() === 'post') {
                $('#reqContainer, #resContainer,#codeCantainer').fadeIn();
                $('#clickBtn').removeAttr('disabled');
            }
            if ($('#typeSelect').val() === 'get') {
                $('#resContainer,#codeCantainer').fadeIn();
                $('#clickBtn').removeAttr('disabled');
            }
        }
    })
    $('#clickBtn').on({
        click: function(){
            let  url= $("#urlInput").val();
            let  method= $("#typeSelect").val();
            if(method == "get"){
                $.ajax({
                    url,
                    method,
                    success : function(res,statusText,Header){
                        $('#res2').val(JSON.stringify(res, null, 4));
                        $('#resCode').val(`PlainText: ${this.dataTypes} Status ${Header.status}`)
                    },
                    error: function (Header) {
                        alert(Header.status);
                      }
                })
            }
            if(method == "post"){
                $.ajax({
                    url,
                    method,
                    data: JSON.parse($("#req1").val()),
                    success : function(res,statusText,Header){
                        $('#req1').val(JSON.stringify(res, null, 4));
                        $('#resCode').val(`PlainText: ${this.dataTypes} Status ${Header.status}`)
                    }
                })
            }
        }
    })

})


