const app = Vue.createApp({
    data(){
        return{
            title: "The finale win",
            author: "Chin-Chon",
            age: "25",
            showBooks:  true,
            books:[
                {title:"The Greatest",author:"Micheal Jordan",age:54, img:"assets/1.jpg",isFav:true},
                {title:"The Baddesest",author:"Mich dan",age:74,img:"assets/2.jpg",isFav:false},
                {title:"The Test",author:"Jordan Pete",age:84,img:"assets/4.jpg",isFav:true},
            ]
        }
    },
    methods:{
        // changeName(){
        //     this.author ='Chinua Achebe'
        // },
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        },
        clicked(){
            console.log("clicked!")
        },
        mouseOver(){
            console.log("Mouse MovedOver")
        },
        dclicked(){
            console.log("dclicked")
        },
        left(){
            console.log("left")
        },
        toggleFavAttribute(book){
            book.isFav=!book.isFav
        }
    }
})
app.mount("#containerOne")