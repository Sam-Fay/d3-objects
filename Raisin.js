// Function to find raisin in a one dimensional array  (standard)

const raisinAlarm = function (cookie) {
    const haveRaisin = (cookie.indexOf('🍇') > -1);
    return (haveRaisin ? 'Raisin alert!' : 'All good!');
  };
  
  // Function to find raisin in a multi dimensional array (stretch)
  const raisinAlarmArray = function(array) {
    let output = [];
    for (const item of array) {
      output.push(raisinAlarm(item));
    }
    return output;
  };
  
  
  // TEST CODE
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
  console.log(raisinAlarmArray(
    [
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"]
    ]
  ));