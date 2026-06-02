import BookInfo from "../BookInfo"
const Books = () => {
const bookList = [
{
  id: 0,
  title: "Atomic Habits",
  author: "James Clear",
  frontCover: "https://m.media-amazon.com/images/I/513Y5o- DYtL.jpg",
  backCover: "https://m.media- amazon.com/images/I/81DCnP7ntKL._AC_UF1000,1000_QL80_.jpg",
  datePublished: "2018",
  purchaseLink: "https://www.amazon.com/Atomic-Habits-James-Clear- audiobook/dp/B07RFSSYBH",
},

{
  id: 1,
  title: "Outliers",
  author: "Malcolm Gladwell",
  frontCover: "https://m.media-amazon.com/images/I/51CFbC0HoeL.jpg",
  backCover: "https://www.shopyaar.com/upload/product/a69375492ef2da69b89c3093a32e375e.jpg",
  datePublished: "2008",
  purchaseLink: "https://www.amazon.com/Outliers-Malcolm-Gladwell-audiobook/dp/B001LNK9C4/ref=sr_1_1?adgrpid=116047907195&hvadid=585359320515&hvdev=c&hvlocphy=21541&hvnetw=g&hvqmt=e&hvrand=8987847268972473835&hvtargid=kwd-298703248067&hydadcr=10787_13491799&keywords=outliers&qid=1699642346&s=books&sr=1-1",
},
{
  id: 2,
  title: "The 10X Rule",
  author: "Grant Cardone",
  frontCover: "https://m.media-amazon.com/images/I/51txCrB2JqL.jpg",
  backCover: "https://bookbins.in/wp-content/uploads/2021/05/The-10x-Rule-Grant-Cardone-Buy-Online-Bookbins-2.png",
  datePublished: "2011",
  purchaseLink: "https://www.amazon.com/dp/B005DGW34C?plink=Ic0UuVbawSdTNyjo&pf_rd_r=H132JYJ316N8X5G3YZY5&ref_=adblp13npsbx_1_3_im",
},

{
  id: 3,
  title: "Outsasaliers",
  author: "Malcolm Gladwell",
  frontCover: "https://m.media-amazon.com/images/I/51CFbC0HoeL.jpg",
  backCover: "https://www.shopyaar.com/upload/product/a69375492ef2da69b89c3093a32e375e.jpg",
  datePublished: "2008",
  purchaseLink: "https://www.amazon.com/Outliers-Malcolm-Gladwell-audiobook/dp/B001LNK9C4/ref=sr_1_1?adgrpid=116047907195&hvadid=585359320515&hvdev=c&hvlocphy=21541&hvnetw=g&hvqmt=e&hvrand=8987847268972473835&hvtargid=kwd-298703248067&hydadcr=10787_13491799&keywords=outliers&qid=1699642346&s=books&sr=1-1",
},
{
  id: 4,
  title: "Outliesdssrs",
  author: "Malcolm Gladwell",
  frontCover: "https://m.media-amazon.com/images/I/51CFbC0HoeL.jpg",
  backCover: "https://www.shopyaar.com/upload/product/a69375492ef2da69b89c3093a32e375e.jpg",
  datePublished: "2008",
  purchaseLink: "https://www.amazon.com/Outliers-Malcolm-Gladwell-audiobook/dp/B001LNK9C4/ref=sr_1_1?adgrpid=116047907195&hvadid=585359320515&hvdev=c&hvlocphy=21541&hvnetw=g&hvqmt=e&hvrand=8987847268972473835&hvtargid=kwd-298703248067&hydadcr=10787_13491799&keywords=outliers&qid=1699642346&s=books&sr=1-1",
},
{
  id: 5,
  title: "Outlieggers",
  author: "Malcolm Gladwell",
  frontCover: "https://m.media-amazon.com/images/I/51CFbC0HoeL.jpg",
  backCover: "https://www.shopyaar.com/upload/product/a69375492ef2da69b89c3093a32e375e.jpg",
  datePublished: "2008",
  purchaseLink: "https://www.amazon.com/Outliers-Malcolm-Gladwell-audiobook/dp/B001LNK9C4/ref=sr_1_1?adgrpid=116047907195&hvadid=585359320515&hvdev=c&hvlocphy=21541&hvnetw=g&hvqmt=e&hvrand=8987847268972473835&hvtargid=kwd-298703248067&hydadcr=10787_13491799&keywords=outliers&qid=1699642346&s=books&sr=1-1",
},
{
  id: 6,
  title: "Outlrfrfiers",
  author: "Malcolm Gladwell",
  frontCover: "https://m.media-amazon.com/images/I/51CFbC0HoeL.jpg",
  backCover: "https://www.shopyaar.com/upload/product/a69375492ef2da69b89c3093a32e375e.jpg",
  datePublished: "2008",
  purchaseLink: "https://www.amazon.com/Outliers-Malcolm-Gladwell-audiobook/dp/B001LNK9C4/ref=sr_1_1?adgrpid=116047907195&hvadid=585359320515&hvdev=c&hvlocphy=21541&hvnetw=g&hvqmt=e&hvrand=8987847268972473835&hvtargid=kwd-298703248067&hydadcr=10787_13491799&keywords=outliers&qid=1699642346&s=books&sr=1-1",
},
{
  id: 7,
  title: "Odsdutliers",
  author: "Malcolm Gladwell",
  frontCover: "https://m.media-amazon.com/images/I/51CFbC0HoeL.jpg",
  backCover: "https://www.shopyaar.com/upload/product/a69375492ef2da69b89c3093a32e375e.jpg",
  datePublished: "2008",
  purchaseLink: "https://www.amazon.com/Outliers-Malcolm-Gladwell-audiobook/dp/B001LNK9C4/ref=sr_1_1?adgrpid=116047907195&hvadid=585359320515&hvdev=c&hvlocphy=21541&hvnetw=g&hvqmt=e&hvrand=8987847268972473835&hvtargid=kwd-298703248067&hydadcr=10787_13491799&keywords=outliers&qid=1699642346&s=books&sr=1-1",
}
]
  return (
    <div>
      {bookList.map((book)=>{
        return (<BookInfo key={book.id} book={book}>
              <li>{book.title}</li>
          </BookInfo>
        )
      })}
    </div>
  )
}

export default Books
