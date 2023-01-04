{
    const List = new Set(['r','s','g','t','y'])

let text = ''

/* function ReturnList(value){

    text += value + " "
} */
  
List.forEach(function(value){

    text += value + " "
})



 


console.log(text)
}

{


const List = new Set(['r','s','g','t','y'])

let text = ''

   for(let item of List.values()){

 
       text += item + " "
         
   }

   



 


console.log(text)
}

{



const List = new Map([

    ['Apple', 500],
    ['Hunda', 6000],
    ['Laptop', 2000]
])

let text = ''

// delete()
// get()
// size







console.log(List.has('Hunda'))
}

{

    const List = new Map([

        ['Apple', 500],
        ['Hunda', 6000],
        ['Laptop', 2000]
])

let text = ''


List.forEach(function(value,key){

      text +=  key + " = " + value + " "
}); 







console.log(text)

}

{

    const List = new Map([

        ['Apple', 500],
        ['Hunda', 6000],
        ['Laptop', 2000]
])

let text = ''


for(let x of List.entries()){

    text += x + " "

}



console.log(text)
}

{


const num = '600'

let newnum =  Number(num)



console.log(typeof(newnum))
}

{


let text = function(){}

const num = '600'

 let newnum = + num
 
   let newnum2 = toString(newnum)



console.log(typeof(newnum2))


}

{

     

  const text = 'PROGRAMMING PROGRAMMING Language'

  //let newlist = text.search(/programming/i)
  let newlist = text.match(/[0-9|rol]/ig)



console.log(newlist)


}