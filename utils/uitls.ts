type Category = {
  id:number,
  title:string,
  imgsrc:string
}

export const categories:Category[] = [
  { id:1, title:"Beaches",imgsrc:"/assets/images/cat1.jpg" },
  { id:2, title:"Amazing pools",imgsrc:"/assets/images/cat2.jpg" },
  { id:3,title:"Islands",imgsrc:"/assets/images/cat3.jpg" },
  { id:4,title:"Lakefront",imgsrc:"/assets/images/cat4.jpg" },
  { id:5, title:"Countryside",imgsrc:"/assets/images/cat5.jpg" },
  { id:6, title:"OMG!",imgsrc:"/assets/images/cat6.jpg" },
  { id:7, title:"National parks",imgsrc:"/assets/images/cat7.jpg" },
  { id:8, title:"Tiny homes",imgsrc:"/assets/images/cat8.jpg" },
  { id:9, title:"Design",imgsrc:"/assets/images/cat9.jpg" },
  { id:10, title:"Campervans",imgsrc:"/assets/images/cat10.jpg" },
  { id:11, title:"Cabins",imgsrc:"/assets/images/cat11.jpg" },
  { id:12, title:"Arctic",imgsrc:"/assets/images/cat12.jpg" },
  { id:13, title:"Amazing views",imgsrc:"/assets/images/cat13.jpg" },
  { id:14, title:"Caves",imgsrc:"/assets/images/cat14.jpg" },
  { id:15, title:"Surfing",imgsrc:"/assets/images/cat15.jpg" },
  { id:16, title:"Bed & breakfasts",imgsrc:"/assets/images/cat16.jpg" },
  { id:17, title:"Earth homes",imgsrc:"/assets/images/cat17.jpg" },
  { id:18, title:"Tropical",imgsrc:"/assets/images/cat18.jpg" },
  { id:19, title:"Shared homes",imgsrc:"/assets/images/cat19.jpg" },
  { id:20, title:"Luxe",imgsrc:"/assets/images/cat20.jpg" },
]

export type Hotel = {
  id:number,
  title:string,
  rating:number | string,
  distance:number,
  date:string,
  price:number,
  imgsrc:string
}

export const hotels:Hotel[] = [
  {id:1, title:"Suomussalmi KK, Finland",rating:4.93,distance:6430,date:"10-15 Oct",price:10764,imgsrc:"/assets/images/hotel1.webp"},
  {id:2, title:"Pudasjarvi, Finland",rating:"New",distance:6517,date:"2-7 Oct",price:13903,imgsrc:"/assets/images/hotel2.webp"},
  {id:3, title:"Kuusamo, Finland",rating:5.0,distance:6490,date:"1-6 Oct",price:17940,imgsrc:"/assets/images/hotel3.webp"},
  {id:4, title:"Kemijarvi, Finland",rating:4.88,distance:6608,date:"12-17 Oct",price:23266,imgsrc:"/assets/images/hotel4.webp"},
  {id:5, title:"Pelkosenniemi, Finland",rating:4.85,distance:6610,date:"28 Oct-2 Nov",price:9239,imgsrc:"/assets/images/hotel5.webp"},
  {id:6, title:"Puolanka, Finland",rating:4.93,distance:6472,date:"6-12 Dec",price:7454,imgsrc:"/assets/images/hotel6.webp"},
  {id:7, title:"Posio, Finland",rating:5.0,distance:6519,date:"9-14 Nov",price:9575,imgsrc:"/assets/images/hotel7.webp"},
  {id:8, title:"Kuusamo, Finland",rating:4.9,distance:6488,date:"2-8 Oct",price:11742,imgsrc:"/assets/images/hotel8.webp"},
  {id:9, title:"Salla, Finland",rating:5.0,distance:6539,date:"1-7 Nov",price:15249,imgsrc:"/assets/images/hotel9.webp"},
  {id:10, title:"Hyrynsalmi, Finland",rating:4.68,distance:6444,date:"2-7 Oct",price:4485,imgsrc:"/assets/images/hotel10.webp"},
  {id:11, title:"Pyhatunturi, Finland",rating:4.95,distance:6612,date:"1-6 Nov",price:6458,imgsrc:"/assets/images/hotel11.webp"},
  {id:12, title:"Kuusamo, Finland",rating:4.98,distance:6501,date:"24-29 Nov",price:11571,imgsrc:"/assets/images/hotel12.webp"},
  {id:13, title:"Pudasjarvi, Finland",rating:5.0,distance:6518,date:"3-8 Oct",price:16505,imgsrc:"/assets/images/hotel13.webp"},
  {id:14, title:"Kuusamo, Finland",rating:4.59,distance:6493,date:"3-8 Oct",price:9103,imgsrc:"/assets/images/hotel14.webp"},
  {id:15, title:"Kuusamo, Finland",rating:4.52,distance:6496,date:"2-7 Oct",price:6727,imgsrc:"/assets/images/hotel15.webp"},
  {id:16, title:"Hyrynsalmi, Finland",rating:4.8,distance:6440,date:"9-15 Oct",price:6728,imgsrc:"/assets/images/hotel16.webp"},
  {id:17, title:"Posio, Finland",rating:4.83,distance:6517,date:"17-23 Oct",price:6458,imgsrc:"/assets/images/hotel17.webp"},
  {id:18, title:"Kuusamo, Finland",rating:4.6,distance:6489,date:"23-28 Oct",price:7163,imgsrc:"/assets/images/hotel18.webp"},
  {id:19, title:"Kuusamo, Finland",rating:5.0,distance:6476,date:"11-17 Oct",price:8073,imgsrc:"/assets/images/hotel19.webp"},
  {id:20, title:"Gildeskal, Finland",rating:4.89,distance:7150,date:"14-19 Oct",price:16765,imgsrc:"/assets/images/hotel20.webp"},
]