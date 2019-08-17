
// let text2 = new TypeIt('#typedesgn', {
//     speed: 50,
//     loop:true,
// });

let text1 = new TypeIt('#typeletters', {
    speed: 50,
    loop: false,
    startDelay: 2500,
    // cursor:false,
    afterComplete: (instance) => {
        //-- Will fire after the entire instance has completed typing.
        //-- NOTE: If "loop" is enabled, this will never fire.
        console.log('running')
        new TypeIt('#typedesgn', {
            strings:'fsdfsf',
            speed: 50,
            loop:true,
        })
     },
});



text1
// .pause(1500)
.options({speed: 200})
.type('Hi.')
.pause(1500)
// .options({
//     speed: 200
// })
// .delete(3)
.options({speed: 150})
// .pause(300)
.type(' I\'m <strong>Nithin A N</strong>')
.pause(500)
.break()
.type(' I\'m a ')
// .type('Full-stack Developer')
// .delete(20)
.type('Frontend Developer')
.delete(18)
.type('Backend Developer')
.delete(17)
.type('<strong>Full-stack Developer</strong>');
// .options({
//     strings: ["Full-stack Developer", "Frontend Developer","Backend Developer"],
//     speed: 50,
//     breakLines: false,
//     waitUntilVisible: true,
//     // loop:true
// })
// .go();



// // // .options({loop:true})
// text2.type('Full-stack Developer')
//         .delete(20)
//         .type('Frontend Developer')
//         .delete(18)
//         .type('Backend Developer')
//         // .delete(17)
//         // .options({loop:false})
//         .go();