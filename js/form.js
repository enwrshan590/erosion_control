/* CONVERSION FORMULAS FROM www.disabled-world.com/artman/publish/metric-imperial.shtml
  * m to ft : m*3.28
  * % to decimal : %*0.01
  *
  *
*/

(function(){
  var calcSubmit = document.querySelector('#calculator');
  console.log(calcSubmit);

  function metricToImperial(input,units,precision){
    var output = null;
    var factor = 3.28084;
    input = parseFloat(input);
    if(units === "ft"){
      output = input*factor;
    }else if(units === "in"){
      output = input*factor*12;
    }else if(units=== "yd"){
      output = input*factor/3;
    }else{
      console.log("parameter passed is invalid. ERROR");
    }
    if(output.toString()!="NaN"){
      return parseFloat(output.toFixed(precision));
      console.log("returned.");
    }else{
      return "Unexpected Input.";
    }
  }


  function imperialToMetric(input,units,precision){
    var output = null;
    var factor = 3.28084;
    input = parseFloat(input);
    if(units === "m"){
      output = input/factor;
    }else{
      console.log("parameter passed is invalid. ERROR");
    }
    if(output.toString()!="NaN"){
      return parseFloat(output.toFixed(precision));
      //console.log("returned.");
    }else if(output.toString()!=""){
      return "Unexpected Input.";
    }
  }

  function percentToDecimal(input){
    return parseFloat((parseInt(input.replace("%",""))*0.01).toFixed(2));
  }
  function decimalToPercent(input){
    return (input*100).toFixed(2) + "%";
  }

function autoUpdate(event){
var it = event.currentTarget;
var metric = it.parentNode.querySelector('.M');
var imperial = it.parentNode.querySelector('.I');
var percent = it.parentNode.querySelector('.P');
var decimal = it.parentNode.querySelector('.D');
    if(metric != null){
      if(it===metric){
        //console.log("metric!");
        imperial.value = metricToImperial(metric.value,"ft",4);
      }else if(it===imperial){
        //console.log("imperial!");
        metric.value = imperialToMetric(imperial.value,"m",4);
      }
    }else if(percent != null){
      if(it===decimal){
        percent.value = decimalToPercent(decimal.value);
      }else if(it===percent){
        decimal.value = percentToDecimal(percent.value + "%");
      }
    }
}

function clearField(){
  var it = event.currentTarget;
  it.value="";
}
var convertFields = document.querySelectorAll("#calculator input.convert");
var fields = document.querySelectorAll("#calculator input:not([disabled]):not([type='submit'])");
var hideMetricBox = document.querySelector("#hideMetric");

function toggleMetric(){
  for(var i=0;i<fields.length;i++){
    if(fields[i].classList.contains('M')){
      fields[i].classList.toggle('hidden');
//      console.log(fields[i]);
  //    console.log(fields[i].previousElementSibling);
      fields[i].previousElementSibling.classList.toggle('hidden');
      }
    }
}

function calculate(event){
  event.preventDefault();
  var it = event.currentTarget;
  //Runs calculation in  METRIC, converts to imperial afterward if wanted
  var date = it.parentNode.querySelector('#d').value;
  var location = it.parentNode.querySelector('#projectLocation').value;
  var engineer = it.parentNode.querySelector('#engineerName').value;

  var flow = it.parentNode.querySelector('#flowMeters').value;
  var velocity = it.parentNode.querySelector('#velocityMeters').value;
  var bedSlope = it.parentNode.querySelector('#bedSlopeDecimal').value;
  var sideSlope = it.parentNode.querySelector('#sideSlopeDecimal').value;
  var flowType = it.parentNode.querySelector('#flowType').value;
  var bedWidth = it.parentNode.querySelector('#bedMeters').value;
  var alignment = it.parentNode.querySelector('#alignType').value;
  var crest = it.parentNode.querySelector('#crestMeters').value;
  var length = it.parentNode.querySelector('#channelMeters').value;
  var depth = it.parentNode.querySelector('#depthMeters').value;
  var topWidth = it.parentNode.querySelector('#topMeters').value;
  var source = it.parentNode.querySelector('#sourceType').value;
  var soil = it.parentNode.querySelector('#soilType').value;

  var comments = it.parentNode.querySelector('#commentsBox').value;

  console.log(date);
  console.log(location);
  console.log(engineer +"\n");
  console.log(flow);
  console.log(velocity);
  console.log(bedSlope);
  console.log(sideSlope);
  console.log(flowType);
  console.log(bedWidth);
  console.log(alignment);
  console.log(crest);
  console.log(length);
  console.log(depth);
  console.log(topWidth);
  console.log(source);
  console.log(soil);
  console.log(comments);
}

for(var i=0;i<convertFields.length;i++){
  convertFields[i].addEventListener('input', autoUpdate, false);
}

for(var i=0;i<fields.length;i++){
  fields[i].addEventListener('click', clearField, false);
}


calcSubmit.addEventListener('submit',calculate,false);
hideMetricBox.addEventListener('click', toggleMetric, false);
})();
