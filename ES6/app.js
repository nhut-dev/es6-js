import course from "./course.js";
import Comment from "./class.js";
import object3 from "./spread/spread.js";
import exerciseConfig from "./spread/spread.js";
import logger from "./rest.js";

for(let x in course){
    console.log(course[x]);
}

var cmt = new Comment("10", "dep trai")
console.log(cmt.show())

for(var x in object3){
    console.log(object3[x])
}

console.log(exerciseConfig)

var array =  ['Html', 'CSS', 'Bootrap', 'React', 'TypeScript', 'Next', 'Nest', 'Java', 'MySQL']
logger(...array)