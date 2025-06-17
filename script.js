/* .js files add interaction to your website */
var count = 0;

var count2 = 0;
 

const questionList = [["OCD is the same as a need for tidiness, cleanliness or perfection", "While OCD can involve tidiness, cleanliness or perfectionism, it's not because the sufferer wants to be clean or tidy, but due to extreme fear of what would occur if they weren't. For instance, someone with OCD might worry that if they touch certain things, they'll get very sick or that if they don't order their belongings in a certain way, that something bad will happen to someone they love."], ["Not everyone with OCD experiences contamination fears", "While OCD can involve contamination fears, many with OCD experience fears surrounding other things as well. Check out the Learn More page to learn about the variety of OCD themes someone could experience."], ["People with OCD can have multiple obsessions/worries at one time", "People with OCD can have multiple obsessional themes at a time."], ["The phrase 'I'm so OCD' is harmless", "It may seem like phrases like 'I'm so OCD' are harmless, but phrases like these further cement the misconceptions surrounding OCD. It takes people with OCD an average of 14-17 years to get proper treatment which is most likely due to misconceptions surrounding the disorder."], ["OCD compulsions are always an outwardly visible action", "OCD compulsions can manifest themselves mentally as well as physically. Mental compulsions are things like mentally repeating words, mental counting, thought neutralization, and rumination. Both mental and physical compulsions can be equally debilitating and are both typically treated with Exposure Response Prevention therapy."], ["OCD is classified as an anxiety disorder.", "While OCD does involve anxiety, studies have shown distinct differences between the brains of people with OCD/OCD related disorders and anxiety disorders."]]
let [question, explanation] = questionList[count];

displayThis();

var myFact = document.getElementById("fact");

var myMyth = document.getElementById("myth")

var mythorfact = document.getElementById("mythorfact");



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
    document.getElementById('mythorfact').innerHTML = "OCD is the same as a need for tidiness, cleanliness or perfection";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 1) {
    console.log("cheeses");
    document.getElementById('mythorfact').innerHTML = "Not everyone with OCD experiences contamination fears";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 2) {
    console.log("cheeses 2");
    document.getElementById('mythorfact').innerHTML = "People with OCD can have multiple obsessions/worries at one time";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 3) {
    console.log("cheeses 3");
    document.getElementById('mythorfact').innerHTML = "The phrase 'I'm so OCD' is harmless";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };
  if (count == 4) {
    console.log("cheeses 4");
    document.getElementById('mythorfact').innerHTML = "OCD compulsions are always an outwardly visible action";
    document.getElementById('explain').innerHTML = "";
    document.getElementById('correct').innerHTML = "";
  };

  if (count == 5) {
    console.log("cheeses 5");
    document.getElementById('mythorfact').innerHTML = "OCD is classified as an anxiety disorder.";
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

function closeIt() {
  var x = document.getElementById("contentWarning");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

