function getDisplayContact(callback)
{
    var orgId = 6401;
    var project= "GYC";
    var url = "http://35.188.59.22/rest/media/getDisplayContact/"+orgId+"/"+project
    var resp =   $.get(url, function(data, status){
        // console.log("Data: " + data + "\nStatus: " + status);
        
        var phoneLogo = '<i class="fa fa-phone"></i>';

        $('.teleLink').html(phoneLogo+data);
        $('.teleLink').attr("href","tel:"+data);
        $('#hiddenDispContact').text(data);

      });
    
    }
