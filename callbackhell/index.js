
function hellcallback() {
    setTimeout(function() {
      console.log('This is the first function');
      setTimeout(function() {
        console.log('This is the second function');
          setTimeout(function() {
           console.log('This is the third function');
              setTimeout(function() {
              console.log('This is the fourth function');
              setTimeout(function() {
                console.log('This is the fifth function');
                setTimeout(function() {
                    console.log('This is the sixth function');
                    setTimeout(function() {
                        console.log('This is the seventh function'); 
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
   }, 2000);
 }, 2000);
}, 2000);
  };
hellcallback();