/* .js files add interaction to your website */
var count = 0;
var count2 = 0;

const questionList = [["People in prison can vote", "People in prison cannot vote BUT people in jails can since they have not yet been convicted of a crime. Additionally, people are able to vote again once they are released."], ["Most people in prison will be released eventually", "According to the Bureau of Justice Statistics, 95% of people in prison will be released eventually."], ["People in prison usually make less than $1 an hour", "According to California assemblymember, Isaac Bryan, California prisons often pay their workers about 0.25 cents an hour."], ["Incarcerated people can file lawsuits as fast as anyone else can", "Incarcerated people are able to file lawsuits, but only once they've exhausted the prison's internal appeals process. This process is much more complicated and puts prisoners at risk of retaliation from prison staff."], ["Most people in prison committed violent crimes.", "According to the Bureau of Prisons, most currently incarcerated people are in prison for non-violent crimes, the most common being drug offenses, at 42%."], ["People in prison receive affordable healthcare", "Despite making less than a dollar, medical expenses in many prisons are high relative to the average incarcerated worker's pay. Luckily, in 2017, California got rid of medical fees for incarcerated individuals."]]
let [question, explanation] = questionList[count];

displayThis();

myFact.addEventListener("click", displayExplainf);

myMyth.addEventListener("click", displayExplainm);






//nextUp.addEventListener("click", displayNext);



function displayExplainf() {
  let [question, explanation] = questionList[count];
  document.getElementById('explain').innerHTML = explanation;
  if (count == 0) {
    document.getElementById('correct').innerHTML = "Incorrect! This is false!";
  };
  if (count == 1) {
    document.getElementById('correct').innerHTML = "Correct! This is true!";
  };
   if (count == 2) {
    document.getElementById('correct').innerHTML = "Correct! This is true!";
  };
  if (count == 3) {
    document.getElementById('correct').innerHTML = "Incorrect! This is false!";
  };
  if (count == 4) {
    document.getElementById('correct').innerHTML = "Incorrect! This is false!";
  };
  if (count == 5) {
    document.getElementById('correct').innerHTML = "Incorrect! This is false!";
    
  };
  
  
  if (count == questionList.length) {
    count = 0;
  };
  nextUp.addEventListener("click", displayNext);
};

function displayThis() {
  let [question, explanation] = questionList[count];
  document.getElementById('mythorfact').innerHTML = question;
  if (count == questionList.length) {
    count = 0;
  };
  
};

function displayExplainm() {
  let [question, explanation] = questionList[count];
  document.getElementById('explain').innerHTML = explanation;
    if (count == 0) {
    document.getElementById('correct').innerHTML = "Correct! This is false!";
  };
  if (count == 1) {
    document.getElementById('correct').innerHTML = "Incorrect! This is true!";
  };
   if (count == 2) {
    document.getElementById('correct').innerHTML = "Incorrect! This is true!";
  };
  if (count == 3) {
    document.getElementById('correct').innerHTML = "Correct! This is false!";
  };
  if (count == 4) {
    document.getElementById('correct').innerHTML = "Correct! This is false!";
  };
  if (count == 5) {
    document.getElementById('correct').innerHTML = "Correct! This is false!";
  };
  if (count == questionList.length) {
    count = 0;
  };
  nextUp.addEventListener("click", displayNext);
};

function displayNext() {
  let [question, explanation] = questionList[count];
  count++;
  console.log(count)
  if (count == questionList.length) {
    count = 0;
  };
  if (count == 0) {
    console.log("0000");
    document.getElementById('mythorfact').innerHTML = "People in prison can vote";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 1) {
    console.log("Log 1");
    document.getElementById('mythorfact').innerHTML = "Most people in prison will be released eventually";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 2) {
    console.log("Log 2");
    document.getElementById('mythorfact').innerHTML = "People in prison usually make less than $1 an hour";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 3) {
    console.log("Log 3");
    document.getElementById('mythorfact').innerHTML = "Incarcerated people can file lawsuits";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 4) {
    console.log("Log 4");
    document.getElementById('mythorfact').innerHTML = "Most people in prison committed violent crimes.";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };

  if (count == 5) {
    console.log("Log 5");
    document.getElementById('mythorfact').innerHTML = "People in prison receive affordable healthcare";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };


};

function checkAnswer() {
  let [question, explanation] = questionList[count];
  if (count == 1) {
    console.log("1 done")
    document.getElementById('mythorfact').innerHTML = question;
  };
  if (count == 2) {
    console.log("2 done")
    document.getElementById('mythorfact').innerHTML = question;
  };
  if (count == 3) {
    console.log("3 done")
    document.getElementById('mythorfact').innerHTML = question;
  };

 
};

